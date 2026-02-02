import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Form verisi tipi
interface ContactFormData {
  name: string
  email: string
  company: string
  phone: string
  topic: string
  service: string
  budget: string
  timeline: string
  preferredContact: string
  message: string
  website?: string // honeypot
  consents: {
    kvkk: boolean
    marketing: boolean
  }
}

// Rate limiting için basit in-memory store (Vercel'de her instance için ayrı)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 dakika
const MAX_REQUESTS = 5 // 1 dakikada max 5 istek

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (record.count >= MAX_REQUESTS) {
    return false
  }

  record.count++
  return true
}

// Email validasyonu
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Telefon validasyonu (Türkiye formatı)
function isValidPhone(phone: string): boolean {
  if (!phone) return true // Opsiyonel alan
  const phoneRegex = /^(\+90|0)?[0-9]{10}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Sanitize input
function sanitize(str: string): string {
  return str
    .trim()
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .slice(0, 5000) // Max 5000 karakter
}

export async function POST(request: NextRequest) {
  try {
    // IP adresi al
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Rate limit kontrolü
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyin.' },
        { status: 429 }
      )
    }

    const body: ContactFormData = await request.json()

    // Honeypot kontrolü (bot koruması)
    if (body.website) {
      // Bot tespit edildi, sessizce başarılı yanıt döndür
      return NextResponse.json({ success: true })
    }

    // Zorunlu alan kontrolü
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Ad, e-posta ve mesaj alanları zorunludur.' },
        { status: 400 }
      )
    }

    // KVKK onayı kontrolü
    if (!body.consents?.kvkk) {
      return NextResponse.json(
        { success: false, error: 'KVKK onayı zorunludur.' },
        { status: 400 }
      )
    }

    // Email validasyonu
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      )
    }

    // Telefon validasyonu
    if (!isValidPhone(body.phone)) {
      return NextResponse.json(
        { success: false, error: 'Geçerli bir telefon numarası giriniz.' },
        { status: 400 }
      )
    }

    // Verileri sanitize et
    const sanitizedData = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      company: sanitize(body.company || ''),
      phone: sanitize(body.phone || ''),
      topic: sanitize(body.topic || ''),
      service: sanitize(body.service || ''),
      budget: sanitize(body.budget || ''),
      timeline: sanitize(body.timeline || ''),
      preferredContact: sanitize(body.preferredContact || 'E-posta'),
      message: sanitize(body.message),
      consents: body.consents,
      submittedAt: new Date().toISOString(),
      ip: ip,
      userAgent: request.headers.get('user-agent') || 'unknown',
    }

    // ============================================
    // NODEMAILER İLE E-POSTA GÖNDER
    // ============================================
    console.log('📧 Mail gönderim başlıyor...', {
      user: process.env.SMTP_USER,
      to: process.env.MAIL_TO,
      hasPassword: !!process.env.SMTP_PASS
    })

    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmail service shortcut
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Gmail App Password
      },
      tls: {
        rejectUnauthorized: false
      }
    })

    // SMTP bağlantısını test et
    try {
      await transporter.verify()
      console.log('✅ SMTP bağlantısı başarılı')
    } catch (smtpError) {
      console.error('❌ SMTP bağlantı hatası:', smtpError)
      const errorMessage = smtpError instanceof Error ? smtpError.message : String(smtpError)
      throw new Error(`SMTP bağlantı hatası: ${errorMessage}`)
    }

    // Email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Yeni İletişim Formu</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #38BDF8, #A855F7); padding: 20px; border-radius: 8px 8px 0 0; }
          .header h1 { color: white; margin: 0; font-size: 24px; }
          .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
          .field { margin-bottom: 15px; }
          .field-label { font-weight: bold; color: #374151; font-size: 12px; text-transform: uppercase; }
          .field-value { color: #111827; margin-top: 4px; }
          .message-box { background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; margin-top: 10px; }
          .footer { background: #1f2937; color: #9ca3af; padding: 15px; border-radius: 0 0 8px 8px; font-size: 12px; }
          .badge { display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
          .badge-topic { background: #dbeafe; color: #1e40af; }
          .badge-service { background: #f3e8ff; color: #7c3aed; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📧 Yeni İletişim Formu</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Konu</div>
              <div class="field-value"><span class="badge badge-topic">${sanitizedData.topic || 'Belirtilmedi'}</span></div>
            </div>
            
            <div class="field">
              <div class="field-label">Ad Soyad</div>
              <div class="field-value">${sanitizedData.name}</div>
            </div>
            
            <div class="field">
              <div class="field-label">E-posta</div>
              <div class="field-value"><a href="mailto:${sanitizedData.email}">${sanitizedData.email}</a></div>
            </div>
            
            ${sanitizedData.phone ? `
            <div class="field">
              <div class="field-label">Telefon</div>
              <div class="field-value"><a href="tel:${sanitizedData.phone}">${sanitizedData.phone}</a></div>
            </div>
            ` : ''}
            
            ${sanitizedData.company ? `
            <div class="field">
              <div class="field-label">Şirket</div>
              <div class="field-value">${sanitizedData.company}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="field-label">İlgilenilen Hizmet</div>
              <div class="field-value"><span class="badge badge-service">${sanitizedData.service || 'Belirtilmedi'}</span></div>
            </div>
            
            ${sanitizedData.budget ? `
            <div class="field">
              <div class="field-label">Bütçe Aralığı</div>
              <div class="field-value">${sanitizedData.budget}</div>
            </div>
            ` : ''}
            
            ${sanitizedData.timeline ? `
            <div class="field">
              <div class="field-label">Zaman Çizelgesi</div>
              <div class="field-value">${sanitizedData.timeline}</div>
            </div>
            ` : ''}
            
            <div class="field">
              <div class="field-label">İletişim Tercihi</div>
              <div class="field-value">${sanitizedData.preferredContact}</div>
            </div>
            
            <div class="field">
              <div class="field-label">Mesaj</div>
              <div class="message-box">${sanitizedData.message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="field" style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
              <div class="field-label">Onaylar</div>
              <div class="field-value">
                ✅ KVKK: ${sanitizedData.consents.kvkk ? 'Onaylandı' : 'Onaylanmadı'}<br>
                ${sanitizedData.consents.marketing ? '✅' : '❌'} Pazarlama: ${sanitizedData.consents.marketing ? 'Onaylandı' : 'Onaylanmadı'}
              </div>
            </div>
          </div>
          <div class="footer">
            <p>📅 Gönderim: ${new Date(sanitizedData.submittedAt).toLocaleString('tr-TR')}</p>
            <p>🌐 IP: ${sanitizedData.ip}</p>
          </div>
        </div>
      </body>
      </html>
    `

    // Mail gönder
    try {
      const mailResult = await transporter.sendMail({
        from: `"Arlan Medya İletişim" <${process.env.SMTP_USER}>`,
        to: process.env.MAIL_TO || 'info@arlanmedya.com',
        replyTo: sanitizedData.email,
        subject: `🔔 Yeni İletişim: ${sanitizedData.topic || 'Genel'} - ${sanitizedData.name}`,
        html: htmlContent,
      })
      
      console.log('📧 Mail başarıyla gönderildi:', {
        messageId: mailResult.messageId,
        from: process.env.SMTP_USER,
        to: process.env.MAIL_TO
      })
    } catch (mailError) {
      console.error('❌ Mail gönderim hatası:', mailError)
      const errorMessage = mailError instanceof Error ? mailError.message : String(mailError)
      throw new Error(`Mail gönderim hatası: ${errorMessage}`)
    }

    console.log('✅ İşlem tamamlandı')

    // Başarılı yanıt
    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla alındı. En kısa sürede size dönüş yapacağız.',
    })

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' },
      { status: 500 }
    )
  }
}

// GET isteğini reddet
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}

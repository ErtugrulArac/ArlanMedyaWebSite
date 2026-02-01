import React from 'react'
import { X, FileText } from 'lucide-react'

interface KVKKModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
}

export default function KVKKModal({ isOpen, onClose, onAccept }: KVKKModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === 'Escape') onClose()
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

      <div
        className="relative w-full max-w-2xl rounded-2xl bg-[#0b1220]/90 border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#38BDF8]/35 to-transparent" />

        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/10 flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#38BDF8]" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">KVKK Aydınlatma Metni</h3>
              <p className="text-white/40 text-xs">Kişisel veri işleme bilgilendirmesi</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 flex items-center justify-center transition-colors"
            aria-label="Kapat"
          >
            <X className="w-4 h-4 text-white/70" />
          </button>
        </div>

        <div className="p-5">
          <div className="max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar text-white/60 text-xs leading-relaxed space-y-3">
            <p className="text-white/70">
              <span className="text-white font-medium">Veri Sorumlusu:</span> Arlan Medya
            </p>

            <p>
              Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, iletişim formu aracılığıyla
              paylaştığınız kişisel verilerin işlenmesine ilişkin olarak sizi bilgilendirmek amacıyla hazırlanmıştır.
            </p>

            <p className="text-white/70 font-medium">İşlenen Kişisel Veriler</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Kimlik: Ad Soyad</li>
              <li>İletişim: E-posta, Telefon</li>
              <li>Kurumsal: Şirket adı (varsa)</li>
              <li>Talep: Hizmet seçimi, bütçe, zaman çizelgesi, mesaj içeriği</li>
            </ul>

            <p className="text-white/70 font-medium">İşleme Amaçları</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Talebinizi değerlendirmek ve size dönüş yapmak</li>
              <li>Tekliflendirme / proje planlama sürecini yürütmek</li>
              <li>İletişim faaliyetlerini sürdürmek</li>
              <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
            </ul>

            <p className="text-white/70 font-medium">Hukuki Sebep</p>
            <p>
              Kişisel verileriniz, KVKK'nın 5. maddesinde yer alan hukuki sebeplere dayanarak; sözleşmenin kurulması/ifası için gerekli olması,
              veri sorumlusunun meşru menfaati ve gerektiğinde açık rızanız kapsamında işlenebilir.
            </p>

            <p className="text-white/70 font-medium">Aktarım</p>
            <p>
              Verileriniz, yalnızca hizmetin ifası için gerekli olması halinde; e-posta sağlayıcıları, barındırma (hosting), CRM sistemleri gibi
              hizmet sağlayıcılarla sınırlı olmak üzere aktarılabilir.
            </p>

            <p className="text-white/70 font-medium">Saklama Süresi</p>
            <p>
              Verileriniz, ilgili mevzuatta öngörülen süreler ve işleme amacının gerektirdiği süre boyunca saklanır; sürenin sonunda silinir, yok edilir
              veya anonimleştirilir.
            </p>

            <p className="text-white/70 font-medium">Haklarınız</p>
            <p>
              KVKK'nın 11. maddesi kapsamındaki haklarınıza ilişkin taleplerinizi, <span className="text-white/80">info@arlanmedya.com</span> üzerinden
              iletebilirsiniz.
            </p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <p className="text-white/30 text-[11px]">Not: Metni şirket unvanı/adres ile özelleştirmeniz önerilir.</p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onAccept}
                className="px-4 py-2 rounded-xl bg-[#38BDF8]/15 hover:bg-[#38BDF8]/20 border border-[#38BDF8]/25 text-[#38BDF8] text-xs font-semibold transition-colors"
              >
                Okudum, Onaylıyorum
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white/70 text-xs font-medium transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>

        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.04);
            border-radius: 999px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(56, 189, 248, 0.25);
            border-radius: 999px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(56, 189, 248, 0.4);
          }
        `}</style>
      </div>
    </div>
  )
}
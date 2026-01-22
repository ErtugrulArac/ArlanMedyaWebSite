"use client";

import {
  useMemo,
  useRef,
  useState,
  useEffect,
  useCallback,
  Suspense,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";
import { ArrowRight, Sparkles } from "lucide-react";
import styles from "./PrismHero.module.css";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduced(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return reduced;
}

function colorToRgb(color: string) {
  const parsed = new THREE.Color(color);
  return `${Math.round(parsed.r * 255)}, ${Math.round(
    parsed.g * 255
  )}, ${Math.round(parsed.b * 255)}`;
}

interface PrismHeroProps {
  title?: string;
  accentText?: string;
  kicker?: string;
  chips?: string[];
  ctaText?: string;
  secondaryText?: string;
  onCtaClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
  colors?: string[];
  intensity?: number;
  tilt?: number;
  parallax?: number;
  minHeight?: number | string;
}

interface ResolvedColors {
  base: string;
  accent: string;
  highlight: string;
}

export default function PrismHero({
  title = "Design-led, glass prism UI",
  accentText = "A prism hero that leans with your cursor, with depth, glow, and calm motion.",
  kicker = "Premium interaction",
  chips = ["Glass", "Depth", "Motion", "Three.js"],
  ctaText = "Explore",
  secondaryText = "View details",
  onCtaClick,
  onSecondaryClick,
  className,
  colors = ["#0a0b14", "#7ec8ff", "#f8fbff"],
  intensity = 1,
  tilt = 1,
  parallax = 1,
  minHeight = 520,
}: PrismHeroProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const rootRef = useRef<HTMLElement>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [vars, setVars] = useState<Record<string, string>>({});

  const resolvedColors = useMemo<ResolvedColors>(() => {
    const palette = Array.isArray(colors) ? colors : [];
    return {
      base: palette[0] || "#0a0b14",
      accent: palette[1] || "#7ec8ff",
      highlight: palette[2] || palette[1] || "#f8fbff",
    };
  }, [colors]);

  const resolvedChips = useMemo(() => {
    if (!Array.isArray(chips)) return [];
    return chips.filter((chip) => typeof chip === "string" && chip.trim());
  }, [chips]);

  const intensityValue = Number.isFinite(intensity) ? intensity : 1;
  const tiltValue = Number.isFinite(tilt) ? tilt : 1;
  const parallaxValue = Number.isFinite(parallax) ? parallax : 1;

  const motionScale = prefersReducedMotion ? 0.55 : 1;
  const resolvedTilt = tiltValue * motionScale;
  const resolvedParallax = parallaxValue * motionScale;

  const handlePointerMove = useCallback(
    (event: React.PointerEvent) => {
      const container = rootRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;

      pointerRef.current.x = nx * 2;
      pointerRef.current.y = ny * -2;

      const rotateX = ny * -12 * resolvedTilt;
      const rotateY = nx * 16 * resolvedTilt;
      const shiftX = nx * 18 * resolvedParallax;
      const shiftY = ny * 12 * resolvedParallax;

      setVars({
        "--ph-rotate-x": `${rotateX}deg`,
        "--ph-rotate-y": `${rotateY}deg`,
        "--ph-shift-x": `${shiftX}px`,
        "--ph-shift-y": `${shiftY}px`,
      });
    },
    [resolvedTilt, resolvedParallax]
  );

  const handlePointerLeave = useCallback(() => {
    setIsActive(false);
    setVars({});
    pointerRef.current.x = 0;
    pointerRef.current.y = 0;
  }, []);

  const handlePointerEnter = useCallback(() => {
    setIsActive(true);
  }, []);

  const rootStyle = useMemo(
    () => ({
      "--ph-min-height":
        typeof minHeight === "number" ? `${minHeight}px` : minHeight,
      "--ph-color-1": resolvedColors.base,
      "--ph-color-2": resolvedColors.accent,
      "--ph-color-3": resolvedColors.highlight,
      "--ph-color-1-rgb": colorToRgb(resolvedColors.base),
      "--ph-color-2-rgb": colorToRgb(resolvedColors.accent),
      "--ph-color-3-rgb": colorToRgb(resolvedColors.highlight),
      "--ph-intensity": intensityValue,
    } as React.CSSProperties),
    [minHeight, resolvedColors, intensityValue]
  );

  const showActions = Boolean(ctaText) || Boolean(secondaryText);

  return (
    <section
      ref={rootRef}
      className={className || styles.root}
      style={rootStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerEnter={handlePointerEnter}
      data-active={isActive ? "true" : "false"}
      aria-label={`${title} prism hero`}
    >
      <div className={styles.canvasShell} aria-hidden="true">
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4.2], fov: 42 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
        >
          <Suspense fallback={null}>
            <Scene
              pointerRef={pointerRef}
              prefersReducedMotion={prefersReducedMotion}
              intensity={intensityValue}
              tilt={tiltValue}
              parallax={parallaxValue}
              colors={resolvedColors}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className={styles.overlay} style={vars}>
        {kicker ? (
          <div className={styles.kicker}>
            <span className={styles.kickerIcon} aria-hidden="true">
              <Sparkles size={16} />
            </span>
            <span className={styles.kickerText}>{kicker}</span>
          </div>
        ) : null}

        <h1 className={styles.title}>{title}</h1>
        {accentText ? <p className={styles.subtitle}>{accentText}</p> : null}

        {resolvedChips.length > 0 ? (
          <div className={styles.chips}>
            {resolvedChips.map((chip, index) => (
              <span key={`${chip}-${index}`} className={styles.chip}>
                {chip}
              </span>
            ))}
          </div>
        ) : null}

        {showActions ? (
          <div className={styles.actions}>
            {ctaText ? (
              <button
                type="button"
                className={styles.cta}
                onClick={() => onCtaClick?.()}
              >
                <span>{ctaText}</span>
                <ArrowRight size={18} className={styles.ctaIcon} />
              </button>
            ) : null}
            {secondaryText ? (
              <button
                type="button"
                className={styles.secondary}
                onClick={() => onSecondaryClick?.()}
              >
                {secondaryText}
              </button>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.noise} aria-hidden="true" />
    </section>
  );
}

interface SceneProps {
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  prefersReducedMotion: boolean;
  intensity: number;
  tilt: number;
  parallax: number;
  colors: ResolvedColors;
}

function Scene({
  pointerRef,
  prefersReducedMotion,
  intensity,
  tilt,
  parallax,
  colors,
}: SceneProps) {
  const motionScale = prefersReducedMotion ? 0.55 : 1;

  return (
    <>
      <ambientLight intensity={0.35 + intensity * 0.1} />
      <directionalLight
        position={[3, 2, 3]}
        intensity={1.1 + intensity * 0.2}
      />
      <directionalLight
        position={[-4, -2, 2]}
        intensity={0.45 + intensity * 0.1}
      />

      <Environment preset="city" />

      <Float
        speed={1.25 * motionScale}
        rotationIntensity={0.35 * motionScale}
        floatIntensity={0.45 * motionScale}
        floatingRange={[-0.08 * motionScale, 0.12 * motionScale]}
      >
        <Prism
          pointerRef={pointerRef}
          intensity={intensity}
          tilt={tilt}
          parallax={parallax}
          prefersReducedMotion={prefersReducedMotion}
          colors={colors}
        />
      </Float>

      <Shards
        pointerRef={pointerRef}
        intensity={intensity}
        parallax={parallax}
        prefersReducedMotion={prefersReducedMotion}
        colors={colors}
      />
    </>
  );
}

interface PrismProps {
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  intensity: number;
  tilt: number;
  parallax: number;
  prefersReducedMotion: boolean;
  colors: ResolvedColors;
}

function Prism({
  pointerRef,
  intensity,
  tilt,
  parallax,
  prefersReducedMotion,
  colors,
}: PrismProps) {
  const group = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.05, 0);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i += 1) {
      const v = new THREE.Vector3().fromBufferAttribute(pos, i);
      const n = v.clone().normalize();
      const wobble =
        (Math.sin(v.x * 6) + Math.cos(v.y * 6) + Math.sin(v.z * 6)) * 0.012;
      v.addScaledVector(n, wobble);
      pos.setXYZ(i, v.x, v.y, v.z);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, []);

  const targetRot = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;

    const pointer = pointerRef.current || { x: 0, y: 0 };
    const motionScale = prefersReducedMotion ? 0.6 : 1;
    const tiltStrength = (Number.isFinite(tilt) ? tilt : 1) * motionScale;
    const parallaxStrength =
      (Number.isFinite(parallax) ? parallax : 1) * motionScale;

    targetRot.current.x = pointer.y * 0.22 * tiltStrength;
    targetRot.current.y = pointer.x * 0.38 * tiltStrength;

    const stiffness = 18;
    const damping = 10;
    const ax = stiffness * (targetRot.current.x - vel.current.x);
    const ay = stiffness * (targetRot.current.y - vel.current.y);

    vel.current.x += ax * dt;
    vel.current.y += ay * dt;

    vel.current.x *= Math.exp(-damping * dt);
    vel.current.y *= Math.exp(-damping * dt);

    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, vel.current.x, 0.12);
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, vel.current.y, 0.12);

    g.rotation.z += dt * 0.12 * motionScale;

    g.position.x = THREE.MathUtils.lerp(
      g.position.x,
      pointer.x * 0.18 * parallaxStrength,
      0.06
    );
    g.position.y = THREE.MathUtils.lerp(
      g.position.y,
      pointer.y * 0.12 * parallaxStrength,
      0.06
    );
  });

  return (
    <group ref={group}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          transmission={1}
          thickness={1.15}
          roughness={0.08}
          ior={1.35}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0}
          envMapIntensity={1.2 + intensity * 0.4}
          color={colors.accent}
          transparent
        />
      </mesh>

      <mesh scale={0.78}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          emissiveIntensity={0.8 + intensity * 0.4}
          emissive={colors.highlight}
          opacity={0.12}
          transparent
        />
      </mesh>
    </group>
  );
}

interface ShardsProps {
  pointerRef: React.MutableRefObject<{ x: number; y: number }>;
  intensity: number;
  parallax: number;
  prefersReducedMotion: boolean;
  colors: ResolvedColors;
}

function Shards({
  pointerRef,
  intensity,
  parallax,
  prefersReducedMotion,
  colors,
}: ShardsProps) {
  const group = useRef<THREE.Group>(null);
  const shards = useMemo(() => {
    return new Array(16).fill(0).map((_, i) => {
      const r = 1.75 + Math.random() * 0.9;
      const a = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 1.3;
      const s = 0.08 + Math.random() * 0.18;
      return {
        key: `shard-${i}`,
        pos: new THREE.Vector3(Math.cos(a) * r, y, Math.sin(a) * r),
        rot: new THREE.Euler(
          Math.random() * 2,
          Math.random() * 2,
          Math.random() * 2
        ),
        scale: new THREE.Vector3(s, s * (1.5 + Math.random()), s),
        speed: 0.2 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      };
    });
  }, []);

  useFrame((state, dt) => {
    const g = group.current;
    if (!g) return;

    const pointer = pointerRef.current || { x: 0, y: 0 };
    const motionScale = prefersReducedMotion ? 0.5 : 1;
    const parallaxStrength =
      (Number.isFinite(parallax) ? parallax : 1) * motionScale;

    g.rotation.y = THREE.MathUtils.lerp(
      g.rotation.y,
      pointer.x * 0.12 * parallaxStrength,
      0.06
    );
    g.rotation.x = THREE.MathUtils.lerp(
      g.rotation.x,
      pointer.y * 0.08 * parallaxStrength,
      0.06
    );
    g.position.x = THREE.MathUtils.lerp(
      g.position.x,
      pointer.x * 0.08 * parallaxStrength,
      0.05
    );
    g.position.y = THREE.MathUtils.lerp(
      g.position.y,
      pointer.y * 0.05 * parallaxStrength,
      0.05
    );

    g.children.forEach((child, idx) => {
      const shard = shards[idx];
      if (!shard) return;
      child.rotation.x += dt * shard.speed * 0.65 * motionScale;
      child.rotation.y += dt * shard.speed * 0.85 * motionScale;
      child.position.y =
        shard.pos.y +
        Math.sin(state.clock.elapsedTime * shard.speed + shard.phase) *
          0.08 *
          motionScale;
    });
  });

  return (
    <group ref={group}>
      {shards.map((shard) => (
        <mesh
          key={shard.key}
          position={shard.pos}
          rotation={shard.rot}
          scale={shard.scale}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshPhysicalMaterial
            transmission={0.85}
            thickness={0.4}
            roughness={0.18}
            ior={1.25}
            clearcoat={1}
            clearcoatRoughness={0.2}
            envMapIntensity={1 + intensity * 0.3}
            color={colors.accent}
            transparent
            opacity={0.55}
          />
        </mesh>
      ))}
    </group>
  );
}

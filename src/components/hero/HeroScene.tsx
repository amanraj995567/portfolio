"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import { ParticleField } from "@/components/hero/ParticleField";

/**
 * Canvas boundary for the hero's 3D scene. Kept in its own client
 * component so it can be lazy-loaded with `next/dynamic({ ssr: false })`
 * from the (server-renderable) Hero section — Three.js touches `window`
 * and has no business running during SSR.
 */
export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 9], fov: 45 }}
      className="!absolute inset-0"
    >
      {/* No scene.background — the canvas is transparent (gl alpha) so the
          page's own dark background shows through. Setting a THREE color of
          "transparent" is invalid and makes the scene opaque white. */}
      <fog attach="fog" args={["#0a0d16", 8, 16]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 4, 6]} intensity={80} color="#6d8bff" />
      <pointLight position={[-6, -3, -4]} intensity={40} color="#a06dff" />

      <Suspense fallback={null}>
        <ParticleField />
        <Sparkles
          count={60}
          scale={[12, 7, 8]}
          size={1.6}
          speed={0.25}
          opacity={0.35}
          color="#8fa8ff"
        />
      </Suspense>
    </Canvas>
  );
}

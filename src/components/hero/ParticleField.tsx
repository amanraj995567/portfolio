"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const NODE_COUNT = 28;
const CONNECTION_DISTANCE = 3.4;
const RADIUS = 5.5;

type NodeDatum = {
  position: THREE.Vector3;
  phase: number;
  speed: number;
  scale: number;
};

function generateNodes(): NodeDatum[] {
  const nodes: NodeDatum[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    // Distribute inside a flattened ellipsoid so the network reads as a
    // wide "service mesh" plane rather than a perfect sphere.
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = RADIUS * Math.cbrt(Math.random());
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta) * 0.55;
    const z = r * Math.cos(phi) * 0.7;
    nodes.push({
      position: new THREE.Vector3(x, y, z),
      phase: Math.random() * Math.PI * 2,
      speed: 0.3 + Math.random() * 0.5,
      scale: 0.5 + Math.random() * 0.7,
    });
  }
  return nodes;
}

function buildConnections(nodes: NodeDatum[]) {
  const positions: number[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i]!.position;
      const b = nodes[j]!.position;
      if (a.distanceTo(b) < CONNECTION_DISTANCE) {
        positions.push(a.x, a.y, a.z, b.x, b.y, b.z);
      }
    }
  }
  return new Float32Array(positions);
}

/**
 * The 3D "holographic microservice mesh" behind the hero headline: a field
 * of glowing nodes with connecting edges (à la a service topology / neural
 * net), gently bobbing, that tilts toward the cursor for a parallax feel.
 */
export function ParticleField() {
  const nodes = useMemo(() => generateNodes(), []);
  const linePositions = useMemo(() => buildConnections(nodes), [nodes]);

  const groupRef = useRef<THREE.Group>(null);
  const instancedRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const { pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    // Gentle cursor-driven parallax rotation on the whole mesh.
    if (groupRef.current) {
      const targetX = pointer.y * 0.15;
      const targetY = pointer.x * 0.25;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.04,
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY + t * 0.02,
        0.04,
      );
    }

    // Bob each node with its own phase/speed.
    if (instancedRef.current) {
      nodes.forEach((node, i) => {
        const bobY = Math.sin(t * node.speed + node.phase) * 0.25;
        dummy.position.set(node.position.x, node.position.y + bobY, node.position.z);
        dummy.scale.setScalar(node.scale);
        dummy.updateMatrix();
        instancedRef.current!.setMatrixAt(i, dummy.matrix);
      });
      instancedRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      <instancedMesh ref={instancedRef} args={[undefined, undefined, NODE_COUNT]}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial
          color="#5b8cff"
          emissive="#5b8cff"
          emissiveIntensity={2.2}
          toneMapped={false}
        />
      </instancedMesh>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7c9bff"
          transparent
          opacity={0.18}
          toneMapped={false}
        />
      </lineSegments>
    </group>
  );
}

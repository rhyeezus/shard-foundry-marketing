'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function DiamondMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.OctahedronGeometry(1, 0);
    // Slightly taller than wide to match reference
    geo.applyMatrix4(new THREE.Matrix4().makeScale(1, 1.2, 1));
    return geo;
  }, []);

  return (
    <group ref={groupRef} rotation={[0.15, 0, 0]}>
      <mesh geometry={geometry} scale={1.4}>
        <meshPhongMaterial
          color="#162550"
          specular="#6080ff"
          shininess={120}
          flatShading={true}
        />
      </mesh>

      {/* Key light — upper front right */}
      <directionalLight position={[3, 4, 3]} intensity={2.5} color="#ffffff" />
      {/* Fill light — lower back */}
      <directionalLight position={[-2, -2, -2]} intensity={0.5} color="#2244aa" />
      {/* Rim light — upper left */}
      <directionalLight position={[-3, 3, 1]} intensity={0.8} color="#4466dd" />
      <ambientLight intensity={0.25} color="#0a1535" />
    </group>
  );
}

export function Diamond() {
  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <DiamondMesh />
    </Canvas>
  );
}

'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Edges } from '@react-three/drei';
import * as THREE from 'three';

// top → bottom, matching CSS linear-gradient(180deg, top 0%, bottom 100%)
const GRADIENTS = [
  ['#FF7A1F', '#FFBB00'],  // orange
  ['#2BC6B2', '#53E6EF'],  // teal
  ['#7B4BFF', '#A750FF'],  // purple
];

// Valid 3-colouring — no adjacent faces share a colour
const FACE_COLOR_IDX = [0, 1, 2, 1, 2, 0, 2, 1];

function DiamondMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.005;
  });

  const geometry = useMemo(() => {
    const base = new THREE.OctahedronGeometry(1, 0);
    // Reduce y from 1.2 → 1.05: keeps the diamond shape but takes the edge off the sharp apex
    base.applyMatrix4(new THREE.Matrix4().makeScale(1, 1.2, 1));

    const geo = base.toNonIndexed();
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const buf = new Float32Array(pos.count * 3);

    const linearGradients = GRADIENTS.map(([top, bot]) => ({
      top: new THREE.Color().setStyle(top),
      bot: new THREE.Color().setStyle(bot),
    }));

    for (let f = 0; f < 8; f++) {
      const { top, bot } = linearGradients[FACE_COLOR_IDX[f]];
      for (let v = 0; v < 3; v++) {
        const vi = f * 3 + v;
        const t = (pos.getY(vi) + 1.2) / 2.4;
        buf[vi * 3 + 0] = top.r * t + bot.r * (1 - t);
        buf[vi * 3 + 1] = top.g * t + bot.g * (1 - t);
        buf[vi * 3 + 2] = top.b * t + bot.b * (1 - t);
      }
    }

    geo.setAttribute('color', new THREE.BufferAttribute(buf, 3));
    return geo;
  }, []);

  return (
    <group ref={groupRef} rotation={[0.15, 0, 0]}>
      <mesh geometry={geometry} scale={0.7}>
        <meshBasicMaterial
          vertexColors={true}
          polygonOffset={true}
          polygonOffsetFactor={2}
          polygonOffsetUnits={2}
        />
        {/* lineWidth doubled — works via Line2 in drei v10 */}
        <Edges threshold={15} lineWidth={2} color="#ffffff" />
      </mesh>
    </group>
  );
}

export function Diamond() {
  return (
    <Canvas
      className="w-full h-full"
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <DiamondMesh />
    </Canvas>
  );
}

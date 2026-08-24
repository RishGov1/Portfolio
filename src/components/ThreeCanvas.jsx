import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleNetwork({ mousePosition }) {
  const pointsRef = useRef();

  // Generate 800 3D particle positions
  const [positions, colors] = useMemo(() => {
    const count = 750;
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);

    const colorChoices = [
      new THREE.Color('#6366f1'), // indigo
      new THREE.Color('#38bdf8'), // cyan
      new THREE.Color('#a855f7'), // violet
      new THREE.Color('#10b981')  // emerald
    ];

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;

      const randomColor = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      cols[i * 3] = randomColor.r;
      cols[i * 3 + 1] = randomColor.g;
      cols[i * 3 + 2] = randomColor.b;
    }

    return [pos, cols];
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.05;
      pointsRef.current.rotation.y += delta * 0.08;

      // Smooth interaction with mouse
      const targetX = (mousePosition.current.x * 0.3);
      const targetY = (mousePosition.current.y * 0.3);

      pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.05;
      pointsRef.current.rotation.x += (-targetY - pointsRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={pointsRef}>
      <Points positions={positions} colors={colors} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          vertexColors
          size={0.06}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function CentralGeometry() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={[2.5, 0, -2]}>
      <icosahedronGeometry args={[2.2, 1]} />
      <meshBasicMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.25}
      />
    </mesh>
  );
}

export default function ThreeCanvas() {
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = -(e.clientY / window.innerHeight) * 2 + 1;
    mousePosition.current = { x, y };
  };

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none opacity-80"
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <ParticleNetwork mousePosition={mousePosition} />
        <CentralGeometry />
      </Canvas>
    </div>
  );
}

// components/ThreeDCard.tsx

import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useState } from 'react';
import { motion } from 'framer-motion';

const ThreeDCard = ({ children }: { children: React.ReactNode }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} />
      <mesh rotation={[0, 0, 0]} scale={hovered ? 1.1 : 1}>
        <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
        <meshStandardMaterial attach="material" color="white" />
        <Html center>
          <motion.div
            className="w-full h-full"
            animate={{ rotateY: hovered ? 10 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {children}
          </motion.div>
        </Html>
      </mesh>
    </Canvas>
  );
};

export default ThreeDCard;

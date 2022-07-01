import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import BikeModel from './OBJ/Bike';
import ManualBikeModel from './OBJ/Manual-bike';

export default function Custom() {
  return (
    <Canvas className="vh-100">
      <ambientLight />
      <BikeModel />
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}

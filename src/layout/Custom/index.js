import { Canvas } from '@react-three/fiber';
import React, { useRef, useState, Suspense } from 'react';
import BikeModel from './OBJ/Bike';
import { HexColorPicker } from 'react-colorful';
import { proxy, useSnapshot } from 'valtio';
import { OrbitControls } from '@react-three/drei';

const state = proxy({
  current: null,
  items: {
    Frame_MAT: '#eee',
    Saddle_MAT: '#eee',
    Metal_MAT: '#eee',
    DerailleurRear_MAT: '#eee',
    Crankset_MAT: '#eee',
    Pedal_MAT: '#eee',
    Chain_MAT: '#eee',
    Cage_MAT: '#eee',
    Bottle_MAT: '#eee',
    Brakes_MAT: '#eee',
    PaintBlack_MAT: '#eee',
    Wheels_MAT: '#eee',
    Computer_MAT: '#eee',
    HandlebarTape_MAT: '#eee',
    Shifters_MAT: '#eee',
    Cassette_MAT: '#eee',
  },
});

function Picker() {
  const snap = useSnapshot(state);
  return (
    <section
      className="position-absolute w-50 m-5"
      style={{
        display: snap.current ? 'block' : 'none',
      }}
    >
      <section className="d-flex justify-content-center align-items-center gap-3">
        <HexColorPicker
          className=""
          color={snap.items[snap.current]}
          onChange={(color) => (state.items[snap.current] = color)}
        />
        <h1
          className=""
          style={{
            color: state.items[snap.current],
          }}
        >
          {snap.current}
        </h1>
      </section>
    </section>
  );
}

export default function Custom() {
  return (
    <div className="container-fluid m-0 p-0">
      <Picker />
      <main className="bg-dark" style={{ height: '768px' }}>
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <spotLight
            intensity={0.5}
            angle={0.1}
            penumbra={1}
            position={[10, 15, 10]}
            castShadow
          />
          <Suspense fallback={null}>
            <BikeModel state={state} />
          </Suspense>

          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </main>
    </div>
  );
}

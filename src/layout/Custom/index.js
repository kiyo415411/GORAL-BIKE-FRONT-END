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
    <div className="row w-40 me-auto m-5 justify-content-center align-items-center">
      <HexColorPicker
        className="picker col-6"
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color)}
      />
      <h1
        className="col-6"
        style={{
          color: state.items[snap.current],
        }}
      >
        {snap.current}
      </h1>
    </div>
  );
}

export default function Custom() {
  return (
    <>
      <nav>
        <Picker />
      </nav>
      <main style={{ height: '600px' }}>
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight />
          <Suspense fallback={null}>
            <BikeModel state={state} />
          </Suspense>

          <pointLight position={[10, 10, 10]} />
          <OrbitControls makeDefault />
        </Canvas>
      </main>
    </>
  );
}

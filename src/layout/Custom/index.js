import { Canvas } from '@react-three/fiber';
import React, { useRef, useState, Suspense } from 'react';
import BikeModel from './OBJ/Bike';
import { HexColorPicker } from 'react-colorful';
import { proxy, useSnapshot } from 'valtio';
import { Ground } from './Ground';
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from '@react-three/drei';
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
      className="fixed-top"
      style={{
        display: snap.current ? 'block' : 'none',
      }}
    >
      <section className="d-flex justify-content-start align-items-center gap-3">
        <HexColorPicker
          className="m-5"
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

function BikeShow() {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <BikeModel state={state} />
          </>
        )}
      </CubeCamera>
      <ambientLight intensity={0.7} />
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />
    </>
  );
}
export default function Custom() {
  return (
    <Suspense fallback={null}>
      <Picker />
      <div className="vh-100 bg-black">
        <Canvas>
          <BikeShow />
        </Canvas>
      </div>
    </Suspense>
  );
}

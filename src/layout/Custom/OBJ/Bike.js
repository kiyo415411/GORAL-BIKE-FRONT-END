import React, { useRef, useState, useEffect } from 'react';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import * as THREE from 'three';
export default function BikeModel({ ...props }) {
  const group = useRef();
  const frontWheel = useRef();
  const backWheel = useRef();

  const [hovered, set] = useState(null);
  useEffect(() => {
    const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#000" style="white-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`;
    const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`;
    if (hovered) {
      document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
        cursor
      )}'), auto`;
      return () =>
        (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(
          auto
        )}'), auto`);
    }
  }, [hovered]);
  const snap = useSnapshot(props.state);
  const { nodes, materials } = useGLTF('/bike.gltf');

  useEffect(() => {
    frontWheel.current.geometry.computeBoundingBox();
    backWheel.current.geometry.computeBoundingBox();
    const boundingBox = frontWheel.current.geometry.boundingBox;
    const backboundingBox = backWheel.current.geometry.boundingBox;
    const center = new THREE.Vector3();
    const backcenter = new THREE.Vector3();
    boundingBox.getCenter(center);
    backboundingBox.getCenter(backcenter);

    frontWheel.current.geometry.translate(-center.x, -center.y, -center.z);
    backWheel.current.geometry.translate(
      -backcenter.x,
      -backcenter.y,
      -backcenter.z
    );
  }, []);

  useFrame(() => (frontWheel.current.rotation.x += 0.008));
  useFrame(() => (backWheel.current.rotation.x += 0.008));

  return (
    <>
      <group
        ref={group}
        {...props}
        dispose={null}
        position={[0, 1.06, 0]}
        onPointerOver={(e) => (
          e.stopPropagation(), set(e.object.material.name)
        )}
        onPointerOut={(e) => e.intersections.length === 0 && set(null)}
        onPointerMissed={() => (props.state.current = null)}
        onClick={(e) => (
          e.stopPropagation(), (props.state.current = e.object.material.name)
        )}
      >
        <group scale={0.02}>
          <mesh
            geometry={nodes.SeatPost.geometry}
            material={materials.Frame_MAT}
            material-color={snap.items.Frame_MAT}
          />
          <mesh
            geometry={nodes.SeatClampBottom.geometry}
            material={materials.Frame_MAT}
            material-color={snap.items.Frame_MAT}
          />
          <mesh
            geometry={nodes.Saddle.geometry}
            material={materials.Saddle_MAT}
            material-color={snap.items.Saddle_MAT}
          >
            <mesh
              geometry={nodes.SaddleBarL.geometry}
              material={materials.Saddle_MAT}
              material-color={snap.items.Saddle_MAT}
            />
            <mesh
              geometry={nodes.SaddleBarR.geometry}
              material={materials.Saddle_MAT}
              material-color={snap.items.Saddle_MAT}
            />
          </mesh>
          <mesh
            geometry={nodes.SeatClampTop.geometry}
            material={materials.Frame_MAT}
            material-color={snap.items.Frame_MAT}
          >
            <mesh
              geometry={nodes.nut.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes.bolt_b_.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
          </mesh>
          <mesh
            geometry={nodes.bolt_a_.geometry}
            material={materials.Metal_MAT}
            material-color={snap.items.Metal_MAT}
          />
          <mesh
            geometry={nodes.stud.geometry}
            material={materials.Metal_MAT}
            material-color={snap.items.Metal_MAT}
          />
          <mesh
            geometry={nodes.Gear_p01.geometry}
            material={materials.DerailleurRear_MAT}
            material-color={snap.items.DerailleurRear_MAT}
          />
          <mesh
            geometry={nodes.CrankGearLarge.geometry}
            material={materials.Crankset_MAT}
            material-color={snap.items.Crankset_MAT}
          />
          <mesh
            geometry={nodes.CrankLeft.geometry}
            material={materials.Crankset_MAT}
            material-color={snap.items.Crankset_MAT}
          >
            <mesh
              geometry={nodes['pedal_left-mesh'].geometry}
              material={materials.Pedal_MAT}
              material-color={snap.items.Pedal_MAT}
            />
            <mesh
              geometry={nodes['pedal_left-mesh_1'].geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
          </mesh>
          <mesh
            geometry={nodes['DerailleurFront-mesh'].geometry}
            material={materials.DerailleurFront_MAT}
            material-color={snap.items.DerailleurFront_MAT}
          />
          <mesh
            geometry={nodes['DerailleurFront-mesh_1'].geometry}
            material={materials.Metal_MAT}
            material-color={snap.items.Metal_MAT}
          />
          <mesh
            geometry={nodes.CrankGearSmall.geometry}
            material={materials.Crankset_MAT}
            material-color={snap.items.Crankset_MAT}
          />
          <mesh
            geometry={nodes.CrankRight.geometry}
            material={materials.Crankset_MAT}
            material-color={snap.items.Crankset_MAT}
          >
            <mesh
              geometry={nodes['pedal_right-mesh'].geometry}
              material={materials.Pedal_MAT}
              material-color={snap.items.Pedal_MAT}
            />
            <mesh
              geometry={nodes['pedal_right-mesh_1'].geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
          </mesh>
          <mesh
            geometry={nodes.Chain.geometry}
            material={materials.Chain_MAT}
            material-color={snap.items.Chain_MAT}
          />
          <mesh
            geometry={nodes['DerailleurRear-mesh'].geometry}
            material={materials.DerailleurRear_MAT}
            material-color={snap.items.DerailleurRear_MAT}
          />
          <mesh
            geometry={nodes['DerailleurRear-mesh_1'].geometry}
            material={materials.Metal_MAT}
            material-color={snap.items.Metal_MAT}
          />
          <mesh
            geometry={nodes.Gear_p02.geometry}
            material={materials.DerailleurRear_MAT}
            material-color={snap.items.DerailleurRear_MAT}
          />
          <mesh
            geometry={nodes.CageBolt2.geometry}
            material={materials.Metal_MAT}
            material-color={snap.items.Metal_MAT}
          />
          <mesh
            geometry={nodes.CageRear.geometry}
            material={materials.Cage_MAT}
            material-color={snap.items.Cage_MAT}
          />
          <mesh
            geometry={nodes.CageBolt1.geometry}
            material={materials.Metal_MAT}
            material-color={snap.items.Metal_MAT}
          />
          <mesh
            geometry={nodes.Bottle.geometry}
            material={materials.Bottle_MAT}
            material-color={snap.items.Bottle_MAT}
          />
          <mesh
            geometry={nodes.CageFront.geometry}
            material={materials.Cage_MAT}
            material-color={snap.items.Cage_MAT}
          />
          <mesh
            geometry={nodes.CageBolt3.geometry}
            material={materials.Metal_MAT}
            material-color={snap.items.Metal_MAT}
          />
          <mesh
            geometry={nodes.CageBolt4.geometry}
            material={materials.Metal_MAT}
            material-color={snap.items.Metal_MAT}
          />
          <mesh
            geometry={nodes.Frame.geometry}
            material={materials.Frame_MAT}
            material-color={snap.items.Frame_MAT}
          >
            <mesh
              geometry={nodes.pCylinder1.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes['Brakes_Rear-mesh'].geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes['Brakes_Rear-mesh_1'].geometry}
              material={materials.Brakes_MAT}
              material-color={snap.items.Brakes_MAT}
            />
            <mesh
              geometry={nodes.CableRearLower.geometry}
              material={materials.PaintBlack_MAT}
              material-color={snap.items.PaintBlack_MAT}
            />
            <mesh
              geometry={nodes.pCylinder2.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes.SkewerRearA.geometry}
              material={materials.PaintBlack_MAT}
              material-color={snap.items.PaintBlack_MAT}
            />
            <mesh
              geometry={nodes.CableRearUpper.geometry}
              material={materials.PaintBlack_MAT}
              material-color={snap.items.PaintBlack_MAT}
            />
            <mesh
              geometry={nodes.bolt_a_04.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes.Cables_Front.geometry}
              material={materials.PaintBlack_MAT}
              material-color={snap.items.PaintBlack_MAT}
            />
            <mesh
              geometry={nodes.SkewerRearB.geometry}
              material={materials.PaintBlack_MAT}
              material-color={snap.items.PaintBlack_MAT}
            />
            <mesh
              geometry={nodes.pCylinder3.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
          </mesh>
          <mesh
            geometry={nodes.magnet.geometry}
            material={materials.Computer_MAT}
            material-color={snap.items.Computer_MAT}
          />
          <mesh
            geometry={nodes.Fork.geometry}
            material={materials.Frame_MAT}
            material-color={snap.items.Frame_MAT}
          >
            <mesh
              geometry={nodes.SkewerFrontA.geometry}
              material={materials.PaintBlack_MAT}
              material-color={snap.items.PaintBlack_MAT}
            />
            <mesh
              geometry={nodes.ForkInnerMetal.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes.SkewerFrontB.geometry}
              material={materials.PaintBlack_MAT}
              material-color={snap.items.PaintBlack_MAT}
            />
            <mesh
              geometry={nodes.sensor.geometry}
              material={materials.Computer_MAT}
              material-color={snap.items.Computer_MAT}
            />
            <mesh
              geometry={nodes['brakes_front-mesh'].geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes['brakes_front-mesh_1'].geometry}
              material={materials.Brakes_MAT}
              material-color={snap.items.Brakes_MAT}
            />
          </mesh>
          <mesh
            geometry={nodes.HandleBars.geometry}
            material={materials.Frame_MAT}
            material-color={snap.items.Frame_MAT}
          >
            <mesh
              geometry={nodes.HandleBarBolt2.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes.tape.geometry}
              material={materials.HandlebarTape_MAT}
              material-color={snap.items.HandlebarTape_MAT}
            />
            <mesh
              geometry={nodes.HandleBarBolt1.geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
            <mesh
              geometry={nodes['shifters-mesh'].geometry}
              material={materials.Shifters_MAT}
              material-color={snap.items.Shifters_MAT}
            />
            <mesh
              geometry={nodes['shifters-mesh_1'].geometry}
              material={materials.Metal_MAT}
              material-color={snap.items.Metal_MAT}
            />
          </mesh>
          {/* 後輪 */}

          <mesh
            ref={backWheel}
            position={[0, -18, -52]}
            geometry={nodes.WheelRear_hiProfile.geometry}
            material={materials.Wheels_MAT}
            material-color={snap.items.Wheels_MAT}
          />

          {/* 前輪 */}
          <mesh
            ref={frontWheel}
            position={[0, -18, 52]}
            geometry={nodes['WheelFront_hiProfile-mesh'].geometry}
            material={materials.Wheels_MAT}
            material-color={snap.items.Wheels_MAT}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload('/bike.gltf');

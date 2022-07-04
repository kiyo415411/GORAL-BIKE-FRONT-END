import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { proxy, useSnapshot } from 'valtio';

export default function ManualBikeModel({ ...props }) {
  const group = useRef();
  const state = proxy({
    current: null,
    items: {
      WheelRear_hiProfile: '#000',
    },
  });
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/manual-bike.gltf');
  useFrame((state, delta) => (group.current.rotation.y += 0.01));

  return (
    <group scale={0.02} ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.WheelRear_hiProfile.geometry}
        material={nodes.WheelRear_hiProfile.material}
        material-color={snap.items.WheelRear_hiProfile}
      />
      <mesh
        geometry={nodes.CasetteGears.geometry}
        material={nodes.CasetteGears.material}
      />
      <mesh
        geometry={nodes.SeatPost.geometry}
        material={nodes.SeatPost.material}
      />
      <mesh
        geometry={nodes.SeatClampBottom.geometry}
        material={nodes.SeatClampBottom.material}
      />
      <mesh geometry={nodes.Saddle.geometry} material={nodes.Saddle.material} />
      <mesh
        geometry={nodes.SaddleBarL.geometry}
        material={nodes.SaddleBarL.material}
      />
      <mesh
        geometry={nodes.SaddleBarR.geometry}
        material={nodes.SaddleBarR.material}
      />
      <mesh
        geometry={nodes.SeatClampTop.geometry}
        material={nodes.SeatClampTop.material}
      />
      <mesh geometry={nodes.nut.geometry} material={nodes.nut.material} />
      <mesh
        geometry={nodes.bolt_b_.geometry}
        material={nodes.bolt_b_.material}
      />
      <mesh
        geometry={nodes.bolt_a_.geometry}
        material={nodes.bolt_a_.material}
      />
      <mesh geometry={nodes.stud.geometry} material={nodes.stud.material} />
      <mesh
        geometry={nodes.Gear_p01.geometry}
        material={nodes.Gear_p01.material}
      />
      <mesh
        geometry={nodes.CrankGearLarge.geometry}
        material={nodes.CrankGearLarge.material}
      />
      <mesh
        geometry={nodes.CrankLeft.geometry}
        material={nodes.CrankLeft.material}
      />
      <mesh
        geometry={nodes.pedal_left.geometry}
        material={nodes.pedal_left.material}
      />
      <mesh
        geometry={nodes.DerailleurFront.geometry}
        material={nodes.DerailleurFront.material}
      />
      <mesh
        geometry={nodes.CrankGearSmall.geometry}
        material={nodes.CrankGearSmall.material}
      />
      <mesh
        geometry={nodes.CrankRight.geometry}
        material={nodes.CrankRight.material}
      />
      <mesh
        geometry={nodes.pedal_right.geometry}
        material={nodes.pedal_right.material}
      />
      <mesh geometry={nodes.Chain.geometry} material={nodes.Chain.material} />
      <mesh
        geometry={nodes.DerailleurRear.geometry}
        material={nodes.DerailleurRear.material}
      />
      <mesh
        geometry={nodes.Gear_p02.geometry}
        material={nodes.Gear_p02.material}
      />
      <mesh geometry={nodes.Frame.geometry} material={nodes.Frame.material} />
      <mesh
        geometry={nodes.pCylinder1.geometry}
        material={nodes.pCylinder1.material}
      />
      <mesh
        geometry={nodes.Brakes_Rear.geometry}
        material={nodes.Brakes_Rear.material}
      />
      <mesh
        geometry={nodes.CableRearLower.geometry}
        material={nodes.CableRearLower.material}
      />
      <mesh
        geometry={nodes.pCylinder2.geometry}
        material={nodes.pCylinder2.material}
      />
      <mesh
        geometry={nodes.SkewerRearA.geometry}
        material={nodes.SkewerRearA.material}
      />
      <mesh
        geometry={nodes.CableRearUpper.geometry}
        material={nodes.CableRearUpper.material}
      />
      <mesh
        geometry={nodes.bolt_a_04.geometry}
        material={nodes.bolt_a_04.material}
      />
      <mesh
        geometry={nodes.Cables_Front.geometry}
        material={nodes.Cables_Front.material}
      />
      <mesh
        geometry={nodes.SkewerRearB.geometry}
        material={nodes.SkewerRearB.material}
      />
      <mesh
        geometry={nodes.pCylinder3.geometry}
        material={nodes.pCylinder3.material}
      />
      <mesh
        geometry={nodes.CageBolt2.geometry}
        material={nodes.CageBolt2.material}
      />
      <mesh
        geometry={nodes.CageRear.geometry}
        material={nodes.CageRear.material}
      />
      <mesh
        geometry={nodes.CageBolt1.geometry}
        material={nodes.CageBolt1.material}
      />
      <mesh geometry={nodes.Bottle.geometry} material={nodes.Bottle.material} />
      <mesh
        geometry={nodes.CageFront.geometry}
        material={nodes.CageFront.material}
      />
      <mesh
        geometry={nodes.CageBolt3.geometry}
        material={nodes.CageBolt3.material}
      />
      <mesh
        geometry={nodes.CageBolt4.geometry}
        material={nodes.CageBolt4.material}
      />
      <mesh
        geometry={nodes.WheelFront_hiProfile.geometry}
        material={nodes.WheelFront_hiProfile.material}
      />
      <mesh geometry={nodes.magnet.geometry} material={nodes.magnet.material} />
      <mesh geometry={nodes.Fork.geometry} material={nodes.Fork.material} />
      <mesh
        geometry={nodes.SkewerFrontA.geometry}
        material={nodes.SkewerFrontA.material}
      />
      <mesh
        geometry={nodes.ForkInnerMetal.geometry}
        material={nodes.ForkInnerMetal.material}
      />
      <mesh
        geometry={nodes.SkewerFrontB.geometry}
        material={nodes.SkewerFrontB.material}
      />
      <mesh geometry={nodes.sensor.geometry} material={nodes.sensor.material} />
      <mesh
        geometry={nodes.brakes_front.geometry}
        material={nodes.brakes_front.material}
      />
      <mesh
        geometry={nodes.HandleBars.geometry}
        material={nodes.HandleBars.material}
      />
      <mesh
        geometry={nodes.HandleBarBolt2.geometry}
        material={nodes.HandleBarBolt2.material}
      />
      <mesh geometry={nodes.tape.geometry} material={nodes.tape.material} />
      <mesh
        geometry={nodes.HandleBarBolt1.geometry}
        material={nodes.HandleBarBolt1.material}
      />
      <mesh
        geometry={nodes.shifters.geometry}
        material={nodes.shifters.material}
      />
    </group>
  );
}

useGLTF.preload('/manual-bike.gltf');

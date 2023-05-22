import React, { forwardRef, ReactElement, useState } from "react";
import useRefs from 'react-use-refs'
import { Canvas, Color, ThreeElements, useThree } from "@react-three/fiber";
import {
  View,
  Preload,
  OrbitControls,
  PerspectiveCamera,
  CameraShake,
  PivotControls,
  Environment,
  // Center,
  // useTexture
} from '@react-three/drei'
// import { useComponentValue, useEntityQuery } from "@latticexyz/react";
// import { getComponentValueStrict, Has } from "@latticexyz/recs";
// import { useMUD } from "./MUDContext";
// import { useKeyboardMovement } from "./useKeyboardMovement";
import { Model } from './Model';

// const Plane = (props: ThreeElements["mesh"]) => {
//   return (
//     <mesh {...props}>
//       {/* eslint-disable-next-line react/no-unknown-property */}
//       <boxGeometry args={[10, 5, 10]} />
//       <meshStandardMaterial color="green" />
//     </mesh>
//   );
// };

// const Player = (props: ThreeElements["mesh"] & { color: Color }) => {
//   return (
//     <mesh {...props}>
//       {/* eslint-disable-next-line react/no-unknown-property */}
//       <boxGeometry args={[1, 2, 1]} />
//       <meshStandardMaterial color={props.color} />
//     </mesh>
//   );
// };

// const Scene = () => {
//   const {
//     components: { Position },
//     network: { playerEntity },
//   } = useMUD();

//   useKeyboardMovement();

//   const playerPosition = useComponentValue(Position, playerEntity);
//   const players = useEntityQuery([Has(Position)]).map((entity) => {
//     const position = getComponentValueStrict(Position, entity);
//     return {
//       entity,
//       position,
//     };
//   });

//   useThree((state) => {
//     if (playerPosition) {
//       state.camera.position.set(playerPosition.x - 5, playerPosition.y + 5, playerPosition.z + 5);
//     } else {
//       state.camera.position.set(-5, 5, 5);
//     }
//     state.camera.rotation.order = "YXZ";
//     state.camera.rotation.y = -Math.PI / 4;
//     state.camera.rotation.x = Math.atan(-1 / Math.sqrt(2));
//   });

//   return (
//     <group>
//       <ambientLight />
//       {/* eslint-disable-next-line react/no-unknown-property */}
//       <pointLight position={[10, 10, 10]} />
//       <Plane position={[0, -5, 0]} />
//       {players.map((p, i) => (
//         <Player
//           key={i}
//           color={Math.floor(parseInt(p.entity) * 123456) % 16777215}
//           position={[p.position.x, p.position.y, p.position.z]}
//         />
//       ))}
//     </group>
//   );
// };

export const App = () => {
  const [ref, view1, view2] = useRefs();
  return (
    <div ref={ref} className="container">
      <div className="text">
        <Link ref={view1}>Buy Property Art 1</Link>
        <div ref={view1} className="view scale" />
      </div>
      <div className="text">
        <Link ref={view2}>Buy Property Art 2</Link>
        <div ref={view2} className="view scale" />
      </div>
      <Canvas eventSource={ref} className="canvas">
        <View track={view1}>
          {/* <Bg /> */}
          <Common color="lightblue" />
          <PivotControls lineWidth={3} depthTest={false} displayValues={false} scale={2}>
            <Model scale={10} position={[150, -40, 230]} rotation={[0, 0.15, -0.15]} />
          </PivotControls>
          <CameraShake intensity={0.5} />
          <OrbitControls makeDefault />
        </View>
        <View track={view2}>
          {/* <Bg /> */}
          <Common color="lightblue" />
          <PivotControls lineWidth={3} depthTest={false} displayValues={false} scale={2}>
            <Model scale={10} position={[110, -60, 200]} rotation={[0, 0.15, -0.1]} />
          </PivotControls>
          <CameraShake intensity={0.5} />
          <OrbitControls makeDefault />
        </View>
        <Preload all />
      </Canvas>
    </div>
  );
};

// function Bg() {
//   const { width, height } = useThree((state) => state.viewport)
//   const image = useTexture(
//     'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
//   )
//   return (
//     <mesh scale={[width, height, -2]}>
//       <planeGeometry />
//       <meshBasicMaterial map={image} depthWrite={false} />
//     </mesh>
//   )
// }

const Common = ({ color }) => (
  <>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <Environment preset="dawn" />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </>
)

const Link = forwardRef(({ children }, fRef) => {
  const [hovered, hover] = useState(false)
  return (
    <a
      href="https://github.com/ltfschoen/property-art"
      onPointerMove={(e) => {
        const x = e.nativeEvent.offsetX
        const y = e.nativeEvent.offsetY - e.target.offsetTop - 100
        fRef.current.style.transform = `translate3d(${x}px,${y}px,0)`
      }}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      {children}
      <div ref={fRef} className="view" style={{ position: 'absolute', width: 200, display: hovered ? 'block' : 'none' }} />
    </a>
  )
})




import * as THREE from 'three'
import React, { forwardRef, ReactElement, useState } from "react";
import useRefs from 'react-use-refs'
import { extend, Canvas, Color, ThreeElements, useThree } from "@react-three/fiber";
import {
  View,
  Preload,
  OrbitControls,
  PerspectiveCamera,
  OrthographicCamera,
  CameraShake,
  PivotControls,
  RandomizedLight,
  AccumulativeShadows,
  Environment,
  // Center,
  useTexture
} from '@react-three/drei'
import { Menu, Button } from '@mantine/core'
import { create } from 'zustand'
// import { useComponentValue, useEntityQuery } from "@latticexyz/react";
// import { getComponentValueStrict, Has } from "@latticexyz/recs";
// import { useMUD } from "./MUDContext";
// import { useKeyboardMovement } from "./useKeyboardMovement";
import Header from './components/Header';
import { Scene } from './Scene';
// note: the compressed version with smaller .glb file size messes up the pavillion
// import { Scene } from './SceneCompressed';

const matrix = new THREE.Matrix4()
const positions = {
  Top: [0, 10, 0], Bottom: [0, -10, 0],
  Left: [-10, 0, 0], Right: [10, 0, 0],
  Back: [0, 0, -10], Front: [0, 0, 10],
  Perspective: [4, 4, 4], Orthogonal: [4, 4, 4],
}
const useStore = create((set) => ({
  // FIXME - restructure since this does not scale easily to multiple property art 
  view1: 'Perspective',
  view2: 'Perspective',
  setPanelView: (which, view) => {
    set({ [which]: view });
  },
}))

const Link = forwardRef(({ children }, fRef) => {
  // const [hovered, hover] = useState(false)
  return (
    <a className="buy-link" href="https://github.com/ltfschoen/property-art">{children}</a>
    // <a
    //   href="https://github.com/ltfschoen/property-art"
    //   onPointerMove={(e) => {
    //     const x = e.nativeEvent.offsetX
    //     const y = e.nativeEvent.offsetY - e.target.offsetTop - 100
    //     fRef.current.style.transform = `translate3d(${x}px,${y}px,0)`
    //   }}
    //   onPointerOver={() => hover(true)}
    //   onPointerOut={() => hover(false)}>
    //   {children}
    //   <div ref={fRef} className="view" style={{ position: 'absolute', width: 200, display: hovered ? 'block' : 'none' }} />
    // </a>
  )
})
// https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively
extend({ Link })

const Preview = forwardRef(({ children }, fRef) => {
  const [hovered, hover] = useState(false)
  return (
    <div>
      <a
        href="#"
        className="preview-address"
        onPointerOver={() => hover(true)}
        onBlur={() => hover(false)}
      >
        {children}
      </a>
      <img
        onClick={() => hover(false)}
        onMouseOut={() => hover(false)}
        src="/pavillion-cropped.jpeg" style={{ position: 'absolute', left: 180, width: 400, zIndex: 3, display: hovered ? 'block' : 'none' }} />
    </div>
  )
})
extend({ Preview })

const Address = forwardRef(({ children }, fRef) => {
  return (
    <span className="buy-address">{children}</span>
  )
})
extend({ Address })

const Details = forwardRef(({ children }, fRef) => {
  return (
    <div className="details-address">
      <div className="details-address-item">Price (OP): 1m</div>
      <div className="details-address-item">Borrow Max. (%): 300</div>
      <div className="details-address-item">ROI (%): 10</div>
      <div className="details-address-item">Royalty (%): 5</div>
    </div>
  )
})
extend({ Details })

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
  const [view1, view2] = useRefs();
  return (
    <div className="nav-custom">
      <Header />
      <div className="container">

        <Canvas shadows frameloop="demand" eventSource={document.getElementById('root')} className="canvas">
          <View index={1} track={view1}>
            {/* <Bg /> */}
            {/* <Common color="lightblue" /> */}
            <PanelCameraSwitcher which="view1" />
            <PivotControls lineWidth={3} depthTest={false} displayValues={false} scale={2} matrix={matrix} />
            <Scene background="lightblue" matrix={matrix} scale={10} position={[150, -150, -730]} rotation={[0, 0.15, -0.15]}>
              {/* <AccumulativeShadows temporal frames={100} position={[0, -0.4, 0]} scale={14} alphaTest={0.85} color="orange" colorBlend={0.5}>
              <RandomizedLight amount={8} radius={8} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
            </AccumulativeShadows> */}
            </Scene>
            <CameraShake intensity={0.5} />
            <OrbitControls makeDefault />
          </View>
          <View index={2} track={view2}>
            {/* <Bg /> */}
            {/* <Common color="lightblue" /> */}
            <PanelCameraSwitcher which="view2" />
            <PivotControls lineWidth={3} depthTest={false} displayValues={false} scale={2} matrix={matrix} />
            <Scene background="lightblue" matrix={matrix} scale={10} position={[110, -50, 100]} rotation={[0, 0.15, -0.1]}>
              {/* <AccumulativeShadows temporal frames={100} position={[0, -0.4, 0]} scale={14} alphaTest={0.85} color="orange" colorBlend={0.5}>
              <RandomizedLight amount={8} radius={8} ambient={0.5} position={[5, 5, -10]} bias={0.001} />
            </AccumulativeShadows> */}
            </Scene>
            <CameraShake intensity={0.5} />
            <OrbitControls makeDefault />
          </View>
          <Preload all />
        </Canvas>
        <div className="text">
          <Details ref={view1} />
          <Preview ref={view1}>Preview</Preview>
          <Link ref={view1}>Buy</Link>
          <Panel ref={view1} which="view1" />
          <Address ref={view1}>54 Campbell Pde Bondi Beach</Address>
        </div>
        <div className="spacer"></div>
        <div className="text">
          <Details ref={view1} />
          <Preview ref={view2}>Preview</Preview>
          <Link ref={view2}>Buy</Link>
          <Panel ref={view2} which="view2" />
          <Address ref={view1}>280 Campbell Pde Bondi Beach</Address>
        </div>
      </div>
    </div>
  );
};

const Panel = forwardRef(({ which }, fRef) => {
  const value = useStore((state) => state[which])
  const setPanelView = useStore((state) => state.setPanelView)

  return (
    <div ref={fRef} className="panel scale">
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Button>{value}</Button>
        </Menu.Target>
        <Menu.Dropdown onClick={(e) => setPanelView(which, e.target.innerText)}>
          <Menu.Item>Perspective</Menu.Item>
          <Menu.Item>Orthogonal</Menu.Item>
          <Menu.Item>Front</Menu.Item>
          <Menu.Item>Back</Menu.Item>
          <Menu.Item>Top</Menu.Item>
          <Menu.Item>Bottom</Menu.Item>
          <Menu.Item>Left</Menu.Item>
          <Menu.Item>Right</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div >
  )
})
Panel.displayName = 'Panel';

function PanelCameraSwitcher({ which }) {
  const view = useStore((state) => state[which])
  if (view === 'Perspective') {
    return <PerspectiveCamera position={[4, 4, 4]} fov={25} />
  } else if (view === 'Orthogonal') {
    return <OrthographicCamera position={[4, 4, 4]} zoom={280} />
  } else {
    return <OrthographicCamera position={positions[view]} zoom={100} />
  }
}

function Bg() {
  const { width, height } = useThree((state) => state.viewport)
  // const image = useTexture(
  //   'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  // )
  const image = useTexture(
    '/pavillion-cropped.jpeg'
  )
  return (
    <mesh scale={[width, height, 2]}>
      <planeGeometry />
      <meshBasicMaterial map={image} depthWrite={false} />
    </mesh>
  )
}

// const Common = ({ color }) => (
//   <>
//     {color && <color attach="background" args={[color]} />}
//     <ambientLight intensity={0.5} />
//     <pointLight position={[20, 30, 10]} intensity={1} />
//     <pointLight position={[-10, -10, -10]} color="blue" />
//     <Environment preset="dawn" />
//     <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
//   </>
// )

import React, { useRef } from 'react'
import {
  Environment,
  Center,
  useGLTF,
} from '@react-three/drei'

export function Scene({ background = 'white', children, ...props }) {
  const { nodes, materials } = useGLTF('/BondiCompressed.glb')

  return (
    <>
      <color attach="background" args={[background]} />
      <ambientLight />
      <directionalLight position={[10, 10, -15]} castShadow shadow-bias={-0.0001} shadow-mapSize={1024} />
      <Environment preset="city" />
      <group
        matrixAutoUpdate={false}
        onUpdate={(self) => (self.matrix = props.matrix)}
        {...props}
        dispose={null}
      >
        {/* <Center> */}
        <mesh geometry={nodes.water.geometry} material={materials['Material.038']} position={[0, 0.22, -28.85]} scale={[20, 1, 20]} />
        <group position={[-0.1, 0.74, -29.51]} scale={[20, 1, 20]}>
          <mesh geometry={nodes.Plane001.geometry} material={materials['Material.037']} />
          <mesh geometry={nodes.Plane001_1.geometry} material={materials.Material} />
          <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.002']} />
          <mesh geometry={nodes.Plane001_3.geometry} material={materials['Material.003']} />
          <mesh geometry={nodes.Plane001_4.geometry} material={materials['Material.010']} />
        </group>
        <mesh geometry={nodes.Landscape.geometry} material={materials['Material.002']} position={[-11.71, -4.97, -17.9]} rotation={[0, 1.57, 0]} scale={[7, 4.96, 7]} />
        <group position={[-7.82, 0.29, -28.19]} scale={0.3}>
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_1.geometry} material={materials['metal black']} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_2.geometry} material={materials['metal white']} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_3.geometry} material={materials.Concrete} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_4.geometry} material={materials.Lamp_Poles_Glass} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_5.geometry} material={materials.Lamp_Poles_Mirror} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_6.geometry} material={materials.Lamp_Poles_Glass_2} />
        </group>
        <mesh geometry={nodes.Boxwood_2.geometry} material={materials.Leaves} position={[-7.99, 1.03, -31.99]} scale={0.45} />
        <group position={[-12.19, 0.66, -24.56]} rotation={[0, -Math.PI / 2, 0]} scale={0.05}>
          <mesh geometry={nodes.BezierCurve005_1.geometry} material={materials.GN_Road_Asphalt} />
          <mesh geometry={nodes.BezierCurve005_2.geometry} material={materials.GN_RoadSide_Unpaved} />
          <mesh geometry={nodes.BezierCurve005_3.geometry} material={materials['metal white']} />
        </group>
        <group position={[-4.12, 0.09, -30.99]} rotation={[0, -1.16, 0]} scale={[9.09, 1.58, 21]}>
          <mesh geometry={nodes.Landscape001_1.geometry} material={materials.Material} />
          <mesh geometry={nodes.Landscape001_2.geometry} material={materials['Material.009']} />
        </group>
        <mesh geometry={nodes.Plane024.geometry} material={materials['Material.001']} position={[-0.44, 1.07, -33]} rotation={[0, 0.33, 0]} scale={[0.73, 0.18, 0.18]} />
        <mesh geometry={nodes.BONDI_PAVILION.geometry} material={materials.browntext} position={[-2.56, 1.26, -29.5]} rotation={[1.66, -0.03, -0.33]} scale={0.11} />
        <mesh geometry={nodes.Plane008.geometry} material={materials['Material.015']} position={[1.3, 0.79, -30.7]} rotation={[0, 0.33, 0]} scale={0.18} />
        <group position={[-12.72, 1.53, -29.1]} rotation={[-1.59, 0, -2.26]} scale={-0.59}>
          <mesh geometry={nodes.wahallaCourt_1.geometry} material={materials['brick.001']} />
          <mesh geometry={nodes.wahallaCourt_2.geometry} material={materials.windowInside010} />
          <mesh geometry={nodes.wahallaCourt_3.geometry} material={materials['windowframes.001']} />
          <mesh geometry={nodes.wahallaCourt_4.geometry} material={materials['Material.016']} />
          <mesh geometry={nodes.wahallaCourt_5.geometry} material={materials['whiteframe.005']} />
          <mesh geometry={nodes.wahallaCourt_6.geometry} material={materials['lightgrey.003']} />
          <mesh geometry={nodes.wahallaCourt_7.geometry} material={materials['windowInside.001']} />
          <mesh geometry={nodes.wahallaCourt_8.geometry} material={materials['whiteframe.003']} />
          <mesh geometry={nodes.wahallaCourt_9.geometry} material={materials['Material.032']} />
        </group>
        <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane066.geometry} material={materials['brick.001']} />
        <mesh geometry={nodes.Plane007.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane023.geometry} material={materials['Material.001']} />
        {/* </Center> */}
        {children}
      </group>
    </>
  )
}

useGLTF.preload('/BondiCompressed.glb')

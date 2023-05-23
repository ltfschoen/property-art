import React, { useRef } from 'react'
import {
  Environment,
  Center,
  useGLTF,
} from '@react-three/drei'

export function Scene({ background = 'white', children, ...props }) {
  const { nodes, materials } = useGLTF('/Bondi.glb')

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
        <mesh geometry={nodes.Landscape.geometry} material={materials['Material.005']} position={[-11.71, -4.97, -17.9]} rotation={[0, 1.57, 0]} scale={[7, 4.96, 7]} />
        <mesh geometry={nodes.rand2.geometry} material={materials['Material.004']} position={[-20.26, 0.06, -16.89]} rotation={[Math.PI, -1.51, Math.PI]} scale={[7, 6, 7]} />
        <mesh geometry={nodes.Landscape004.geometry} material={materials['Material.007']} position={[22.41, -0.49, -22.66]} scale={[4.5, 1, 4.5]} />
        <group position={[-7.82, 0.29, -28.19]} scale={0.3}>
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_1.geometry} material={materials['metal black']} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_2.geometry} material={materials['metal white']} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_3.geometry} material={materials.Concrete} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_4.geometry} material={materials.Lamp_Poles_Glass} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_5.geometry} material={materials.Lamp_Poles_Mirror} />
          <mesh geometry={nodes.Pole_Two_Lamps_Tall_6.geometry} material={materials.Lamp_Poles_Glass_2} />
        </group>
        <group position={[1.4, 0.66, -31.67]} scale={0.3}>
          <mesh geometry={nodes.Pole_Two_Lamps_1.geometry} material={materials['metal black']} />
          <mesh geometry={nodes.Pole_Two_Lamps_2.geometry} material={materials['metal white']} />
          <mesh geometry={nodes.Pole_Two_Lamps_3.geometry} material={materials.Concrete} />
          <mesh geometry={nodes.Pole_Two_Lamps_4.geometry} material={materials.Lamp_Poles_Glass} />
          <mesh geometry={nodes.Pole_Two_Lamps_5.geometry} material={materials.Lamp_Poles_Mirror} />
          <mesh geometry={nodes.Pole_Two_Lamps_6.geometry} material={materials.Lamp_Poles_Glass_2} />
        </group>
        <group position={[4.46, 0.66, -32.36]} scale={0.3}>
          <mesh geometry={nodes.Pole_Traffic_Lights_Tall_1.geometry} material={materials['metal black']} />
          <mesh geometry={nodes.Pole_Traffic_Lights_Tall_2.geometry} material={materials['metal white']} />
          <mesh geometry={nodes.Pole_Traffic_Lights_Tall_3.geometry} material={materials.Concrete} />
        </group>
        <group position={[-5.04, 0.66, -28.72]} scale={0.3}>
          <mesh geometry={nodes.Pole_Traffic_Lights_1.geometry} material={materials['metal black']} />
          <mesh geometry={nodes.Pole_Traffic_Lights_2.geometry} material={materials['metal white']} />
          <mesh geometry={nodes.Pole_Traffic_Lights_3.geometry} material={materials.Concrete} />
        </group>
        <group position={[-11.94, 0.66, -28.35]} scale={0.3}>
          <mesh geometry={nodes.Pole_One_Lamp_Tall_1.geometry} material={materials['metal black']} />
          <mesh geometry={nodes.Pole_One_Lamp_Tall_2.geometry} material={materials['metal white']} />
          <mesh geometry={nodes.Pole_One_Lamp_Tall_3.geometry} material={materials.Concrete} />
          <mesh geometry={nodes.Pole_One_Lamp_Tall_4.geometry} material={materials.Lamp_Poles_Glass} />
          <mesh geometry={nodes.Pole_One_Lamp_Tall_5.geometry} material={materials.Lamp_Poles_Mirror} />
          <mesh geometry={nodes.Pole_One_Lamp_Tall_6.geometry} material={materials.Lamp_Poles_Glass_2} />
        </group>
        <group position={[-8.53, 0.66, -26.7]} scale={0.3}>
          <mesh geometry={nodes.Pole_One_Lamp_1.geometry} material={materials['metal black']} />
          <mesh geometry={nodes.Pole_One_Lamp_2.geometry} material={materials['metal white']} />
          <mesh geometry={nodes.Pole_One_Lamp_3.geometry} material={materials.Concrete} />
          <mesh geometry={nodes.Pole_One_Lamp_4.geometry} material={materials.Lamp_Poles_Glass} />
          <mesh geometry={nodes.Pole_One_Lamp_5.geometry} material={materials.Lamp_Poles_Mirror} />
          <mesh geometry={nodes.Pole_One_Lamp_6.geometry} material={materials.Lamp_Poles_Glass_2} />
        </group>
        <mesh geometry={nodes.Boxwood_2.geometry} material={materials.Leaves} position={[-7.99, 1.03, -31.99]} scale={0.45} />
        <mesh geometry={nodes.Boxwood_1.geometry} material={materials.Leaves} position={[-5.71, 0.96, -32.07]} scale={0.3} />
        <group position={[-12.19, 0.66, -24.56]} rotation={[0, -Math.PI / 2, 0]} scale={0.05}>
          <mesh geometry={nodes.BezierCurve005_1.geometry} material={materials.GN_Road_Asphalt} />
          <mesh geometry={nodes.BezierCurve005_2.geometry} material={materials.GN_RoadSide_Unpaved} />
          <mesh geometry={nodes.BezierCurve005_3.geometry} material={materials['metal white']} />
        </group>
        <group position={[-4.12, 0.09, -30.99]} rotation={[0, -1.16, 0]} scale={[9.09, 1.58, 21]}>
          <mesh geometry={nodes.Landscape001_1.geometry} material={materials['Material.008']} />
          <mesh geometry={nodes.Landscape001_2.geometry} material={materials['Material.009']} />
        </group>
        <mesh geometry={nodes.Boxwood_2001.geometry} material={materials.Leaves} position={[-8.69, 0.85, -31.53]} scale={0.45} />
        <mesh geometry={nodes.Boxwood_2002.geometry} material={materials.Leaves} position={[-9.63, 0.87, -30.39]} scale={0.45} />
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.001']} position={[-1.74, 1.07, -30.04]} rotation={[0, 0.33, 0]} scale={[3.29, 0.01, 0.18]} />
        <mesh geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[-5.12, 1.07, -30.32]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={[1.19, 0.01, 0.18]} />
        <mesh geometry={nodes.Cube003.geometry} material={materials['Material.001']} position={[0.75, 1.07, -32.34]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={[1.19, 0.01, 0.18]} />
        <mesh geometry={nodes.Plane024.geometry} material={materials['Material.001']} position={[-0.44, 1.07, -33]} rotation={[0, 0.33, 0]} scale={[0.73, 0.18, 0.18]} />
        <mesh geometry={nodes.Plane064.geometry} material={materials['Material.001']} position={[-4.59, 1.07, -31.57]} rotation={[0, 0.33, 0]} scale={[0.73, 0.18, 0.18]} />
        <mesh geometry={nodes.Plane065.geometry} material={materials['Material.001']} position={[-1.65, 1.07, -29.78]} rotation={[0, 0.33, 0]} scale={[1.46, 0.18, 0.09]} />
        <mesh geometry={nodes.Plane066.geometry} material={materials['brick.001']} position={[-1.86, 1.34, -30.4]} rotation={[0, 0.33, 0]} scale={[1.48, 0.18, 0.59]} />
        <mesh geometry={nodes.Cube004.geometry} material={materials['Material.001']} position={[-1.62, 1.08, -29.69]} rotation={[0, 0.33, 0]} scale={[1.46, 0.02, 0.02]} />
        <mesh geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[-3.03, 1.08, -29.28]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={[0.09, 0.02, 0.01]} />
        <mesh geometry={nodes.Cube006.geometry} material={materials['Material.001']} position={[-0.29, 1.08, -30.23]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={[0.09, 0.02, 0.02]} />
        <mesh geometry={nodes.Cube007.geometry} material={materials['Material.001']} position={[-3.24, 1.11, -29.91]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={[0.55, 0.23, 0.02]} />
        <mesh geometry={nodes.Cube008.geometry} material={materials['Material.001']} position={[-0.48, 1.11, -30.86]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={[0.55, 0.23, 0.02]} />
        <mesh geometry={nodes.Cube009.geometry} material={materials['Material.001']} position={[-2.05, 1.2, -30.89]} rotation={[Math.PI, -0.33, Math.PI]} scale={[1.46, 0.14, 0.02]} />
        <mesh geometry={nodes.Cube011.geometry} material={materials['Material.001']} position={[-1.68, 1.29, -29.86]} rotation={[Math.PI, -0.33, Math.PI]} scale={[1.47, 0.05, 0.02]} />
        <mesh geometry={nodes.Plane002.geometry} material={materials['Material.006']} position={[0.76, 1.07, -32.35]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={[1.19, 0.18, 0.18]} />
        <mesh geometry={nodes.Plane003.geometry} material={materials['Material.011']} position={[-5.12, 1.07, -30.32]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={[1.19, 0.18, 0.18]} />
        <mesh geometry={nodes.Plane004.geometry} material={materials.brick} position={[-3.98, 1.07, -29.26]} rotation={[0, 0.33, 0]} scale={[0.91, 0.18, 0.18]} />
        <mesh geometry={nodes.Plane005.geometry} material={materials['Material.012']} position={[0.5, 1.07, -30.81]} rotation={[0, 0.33, 0]} scale={[0.91, 0.18, 0.18]} />
        <mesh geometry={nodes.Plane006.geometry} material={materials['Material.014']} position={[-0.27, 1.07, -33.05]} rotation={[0, 0.33, 0]} scale={[0.91, 0.18, 0.18]} />
        <mesh geometry={nodes.Plane007.geometry} material={materials.brickroof} position={[-4.75, 1.07, -31.5]} rotation={[0, 0.33, 0]} scale={[0.91, 0.18, 0.18]} />
        <mesh geometry={nodes.BONDI_PAVILION.geometry} material={materials.browntext} position={[-2.56, 1.26, -29.5]} rotation={[1.66, -0.03, -0.33]} scale={0.11} />
        <mesh geometry={nodes.Plane008.geometry} material={materials['Material.015']} position={[1.3, 0.79, -30.7]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane009.geometry} material={materials['Material.001']} position={[-1.62, 0.88, -29.69]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane010.geometry} material={materials['Material.001']} position={[-1.79, 0.88, -29.63]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane011.geometry} material={materials['Material.001']} position={[-1.97, 0.88, -29.57]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane012.geometry} material={materials['Material.001']} position={[-2.14, 0.88, -29.51]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane013.geometry} material={materials['Material.001']} position={[-2.31, 0.88, -29.45]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane014.geometry} material={materials['Material.001']} position={[-1.45, 0.88, -29.75]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane015.geometry} material={materials['Material.001']} position={[-1.28, 0.88, -29.81]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane016.geometry} material={materials['Material.001']} position={[-1.1, 0.88, -29.87]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane019.geometry} material={materials['Material.001']} position={[-1.07, 0.88, -32.59]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={0.18} />
        <mesh geometry={nodes.Plane020.geometry} material={materials['Material.001']} position={[-0.24, 0.88, -30.17]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={0.18} />
        <mesh geometry={nodes.Plane021.geometry} material={materials['Material.001']} position={[-3.24, 0.88, -29.33]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane022.geometry} material={materials['Material.001']} position={[-3, 0.88, -29.22]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={0.18} />
        <mesh geometry={nodes.Plane025.geometry} material={materials['Material.001']} position={[-3.84, 0.88, -31.63]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={0.18} />
        <mesh geometry={nodes.Plane026.geometry} material={materials['Material.001']} position={[-0.93, 0.88, -29.93]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane027.geometry} material={materials['Material.001']} position={[-0.76, 0.88, -29.99]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane028.geometry} material={materials['Material.001']} position={[-0.59, 0.88, -30.05]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane029.geometry} material={materials['Material.001']} position={[-0.41, 0.88, -30.11]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane030.geometry} material={materials['Material.001']} position={[-2.49, 0.88, -29.39]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane031.geometry} material={materials['Material.001']} position={[-2.66, 0.88, -29.33]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane032.geometry} material={materials['Material.001']} position={[-2.83, 0.88, -29.28]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane033.geometry} material={materials['Material.001']} position={[-3, 0.88, -29.22]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane034.geometry} material={materials['Material.001']} position={[-3.41, 0.88, -29.27]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane035.geometry} material={materials['Material.001']} position={[-3.58, 0.88, -29.21]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane036.geometry} material={materials['Material.001']} position={[-3.75, 0.88, -29.15]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane037.geometry} material={materials['Material.001']} position={[-3.93, 0.88, -29.09]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane038.geometry} material={materials['Material.001']} position={[-4.1, 0.88, -29.03]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane039.geometry} material={materials['Material.001']} position={[-4.27, 0.88, -28.97]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane040.geometry} material={materials['Material.001']} position={[-4.44, 0.88, -28.91]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane041.geometry} material={materials['Material.001']} position={[-4.62, 0.88, -28.85]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane042.geometry} material={materials['Material.001']} position={[-4.79, 0.88, -28.79]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane043.geometry} material={materials['Material.001']} position={[1.25, 0.88, -30.88]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane044.geometry} material={materials['Material.001']} position={[1.08, 0.88, -30.82]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane045.geometry} material={materials['Material.001']} position={[0.91, 0.88, -30.76]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane046.geometry} material={materials['Material.001']} position={[0.74, 0.88, -30.7]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane047.geometry} material={materials['Material.001']} position={[0.56, 0.88, -30.64]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane048.geometry} material={materials['Material.001']} position={[0.39, 0.88, -30.58]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane049.geometry} material={materials['Material.001']} position={[0.22, 0.88, -30.52]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane050.geometry} material={materials['Material.001']} position={[0.05, 0.88, -30.46]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane051.geometry} material={materials['Material.001']} position={[-0.13, 0.88, -30.4]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane052.geometry} material={materials['Material.001']} position={[-0.3, 0.88, -30.34]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane053.geometry} material={materials['Material.001']} position={[-4.79, 0.88, -28.79]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={0.18} />
        <mesh geometry={nodes.Plane054.geometry} material={materials['Material.001']} position={[1.43, 0.88, -30.94]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={0.18} />
        <mesh geometry={nodes.Plane055.geometry} material={materials['Material.001']} position={[0.36, 0.88, -33.47]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane056.geometry} material={materials['Material.001']} position={[-5.68, 0.88, -31.38]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane057.geometry} material={materials['Material.001']} position={[-4.44, 0.88, -28.91]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={0.18} />
        <mesh geometry={nodes.Plane058.geometry} material={materials['Material.001']} position={[-4.91, 0.88, -29.14]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane059.geometry} material={materials['Material.001']} position={[-4.91, 0.88, -29.14]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane060.geometry} material={materials['Material.001']} position={[-0.42, 0.88, -30.69]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane061.geometry} material={materials['Material.001']} position={[1.08, 0.88, -30.82]} rotation={[-Math.PI, 1.24, -Math.PI]} scale={0.18} />
        <mesh geometry={nodes.Plane062.geometry} material={materials['Material.001']} position={[-1.07, 0.88, -32.59]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane063.geometry} material={materials['Material.001']} position={[-5.56, 0.88, -31.04]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane067.geometry} material={materials['Material.001']} position={[-3.06, 1.07, -29.39]} rotation={[0, 0.33, 0]} scale={0.18} />
        <mesh geometry={nodes.Plane068.geometry} material={materials['Material.001']} position={[-0.84, 0.88, -31.31]} rotation={[0, 0.33, 0]} scale={0.18} />
        <group position={[-12.72, 1.53, -29.1]} rotation={[-1.59, 0, -2.26]} scale={-0.59}>
          <mesh geometry={nodes.wahallaCourt_1.geometry} material={materials.wahallaCourt} />
          <mesh geometry={nodes.wahallaCourt_2.geometry} material={materials['Material.016']} />
          <mesh geometry={nodes.wahallaCourt_3.geometry} material={materials['whiteframe.005']} />
          <mesh geometry={nodes.wahallaCourt_4.geometry} material={materials['lightgrey.004']} />
          <mesh geometry={nodes.wahallaCourt_5.geometry} material={materials.windowInside010} />
          <mesh geometry={nodes.wahallaCourt_6.geometry} material={materials['Material.017']} />
          <mesh geometry={nodes.wahallaCourt_7.geometry} material={materials['whiteframe.004']} />
          <mesh geometry={nodes.wahallaCourt_8.geometry} material={materials['lightgrey.003']} />
          <mesh geometry={nodes.wahallaCourt_9.geometry} material={materials['windowInside.001']} />
          <mesh geometry={nodes.wahallaCourt_10.geometry} material={materials['Material.018']} />
          <mesh geometry={nodes.wahallaCourt_11.geometry} material={materials['whiteframe.003']} />
          <mesh geometry={nodes.wahallaCourt_12.geometry} material={materials['lightgrey.002']} />
          <mesh geometry={nodes.wahallaCourt_13.geometry} material={materials['windowInside.002']} />
          <mesh geometry={nodes.wahallaCourt_14.geometry} material={materials['Material.019']} />
          <mesh geometry={nodes.wahallaCourt_15.geometry} material={materials['whiteframe.002']} />
          <mesh geometry={nodes.wahallaCourt_16.geometry} material={materials['lightgrey.001']} />
          <mesh geometry={nodes.wahallaCourt_17.geometry} material={materials['windowInside.003']} />
          <mesh geometry={nodes.wahallaCourt_18.geometry} material={materials['Material.020']} />
          <mesh geometry={nodes.wahallaCourt_19.geometry} material={materials['whiteframe.001']} />
          <mesh geometry={nodes.wahallaCourt_20.geometry} material={materials['grey.010']} />
          <mesh geometry={nodes.wahallaCourt_21.geometry} material={materials['windowInsides.018']} />
          <mesh geometry={nodes.wahallaCourt_22.geometry} material={materials['Material.021']} />
          <mesh geometry={nodes.wahallaCourt_23.geometry} material={materials.whiteframe} />
          <mesh geometry={nodes.wahallaCourt_24.geometry} material={materials['lightgrey.005']} />
          <mesh geometry={nodes.wahallaCourt_25.geometry} material={materials['windowInside.018']} />
          <mesh geometry={nodes.wahallaCourt_26.geometry} material={materials['Material.022']} />
          <mesh geometry={nodes.wahallaCourt_27.geometry} material={materials['Material.023']} />
          <mesh geometry={nodes.wahallaCourt_28.geometry} material={materials['lightgrey.006']} />
          <mesh geometry={nodes.wahallaCourt_29.geometry} material={materials['Material.024']} />
          <mesh geometry={nodes.wahallaCourt_30.geometry} material={materials['Material.025']} />
          <mesh geometry={nodes.wahallaCourt_31.geometry} material={materials['whiteframe.006']} />
          <mesh geometry={nodes.wahallaCourt_32.geometry} material={materials['lightgrey.007']} />
          <mesh geometry={nodes.wahallaCourt_33.geometry} material={materials.windowsInside} />
          <mesh geometry={nodes.wahallaCourt_34.geometry} material={materials['Material.026']} />
          <mesh geometry={nodes.wahallaCourt_35.geometry} material={materials['Material.027']} />
          <mesh geometry={nodes.wahallaCourt_36.geometry} material={materials['lightgrey.008']} />
          <mesh geometry={nodes.wahallaCourt_37.geometry} material={materials['windowInside.005']} />
          <mesh geometry={nodes.wahallaCourt_38.geometry} material={materials['Material.028']} />
          <mesh geometry={nodes.wahallaCourt_39.geometry} material={materials['Material.029']} />
          <mesh geometry={nodes.wahallaCourt_40.geometry} material={materials['lightgrey.009']} />
          <mesh geometry={nodes.wahallaCourt_41.geometry} material={materials['windowInsides.001']} />
          <mesh geometry={nodes.wahallaCourt_42.geometry} material={materials['Material.030']} />
          <mesh geometry={nodes.wahallaCourt_43.geometry} material={materials.whiteframing} />
          <mesh geometry={nodes.wahallaCourt_44.geometry} material={materials['lightgrey.011']} />
          <mesh geometry={nodes.wahallaCourt_45.geometry} material={materials['windowInside.004']} />
          <mesh geometry={nodes.wahallaCourt_46.geometry} material={materials['windowframes.001']} />
          <mesh geometry={nodes.wahallaCourt_47.geometry} material={materials['whiteframing.001']} />
          <mesh geometry={nodes.wahallaCourt_48.geometry} material={materials['Material.031']} />
          <mesh geometry={nodes.wahallaCourt_49.geometry} material={materials['windowInside.006']} />
          <mesh geometry={nodes.wahallaCourt_50.geometry} material={materials['Material.032']} />
          <mesh geometry={nodes.wahallaCourt_51.geometry} material={materials['Material.033']} />
          <mesh geometry={nodes.wahallaCourt_52.geometry} material={materials.colBlue} />
        </group>
        {/* </Center> */}
        {children}
      </group>
    </>
  )
}

useGLTF.preload('/Bondi.glb')

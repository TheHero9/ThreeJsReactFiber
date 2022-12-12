import {RoundedBox, Text3D} from "@react-three/drei";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from "react";
import { useState } from "react";
import { TextureLoader } from 'three';

import mapImage from "/src/Photos/mapImage.jpg"
import roboto from '/Roboto Light_Regular.json'

export default function WaitingSection(){
    let frame= useLoader(
        GLTFLoader, "/3DImports/picture_frame/scene.gltf"
      ).scene

      let sofa= useLoader(
        GLTFLoader, "/3DImports/modern__sofa/scene.gltf"
      ).scene

      const textureMap = useLoader(TextureLoader, mapImage)
    
      const [hovered, setHovered] = useState(false)

      useEffect(() => {
        frame.scale.set(0.02, 0.02, 0.03)
        sofa.scale.set(6, 6, 6)

        document.body.style.cursor = hovered ? "pointer" : "auto"
      }, [hovered]);


    return (
        <>

        {/* Frame */}
        <primitive object={frame} position={[-1.4, 5.7, 15]} rotation={[0, 1.6 ,0]}/>

        {/* Map */}
        <mesh position={[1.6, 8.2, 14.7]} rotation={[0,-1*Math.PI,0]} >
        <planeBufferGeometry attach="geometry" args ={[4.6, 4.1]}/>
        <meshLambertMaterial attach="material" map={textureMap}/>
      </mesh>

        {/* Sofa */}
        <primitive object={sofa} position={[8.9, 2, 12.4]} rotation={[0, 1*Math.PI ,0]}/>

        {/* Walls */}
    <mesh position={[6.5 , 6.1, 15]} rotation={[0,1*Math.PI,0]} >
        <planeBufferGeometry attach="geometry" args ={[17,12]}/>
        <meshLambertMaterial attach="material"  color={"aqua"} />
      </mesh>

      <mesh position={[15, 6.1, 10.4]} rotation={[0,1.5*Math.PI,0]} >
        <planeBufferGeometry attach="geometry" args ={[9.3,12]}/>
        <meshLambertMaterial attach="material"  color={0x7DE5ED} />
      </mesh>

        {/* Button */}
        <RoundedBox 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        args={[3, 1.5, 0.5]} position={[1, 4.6, 14.6]} radius={0.05} smoothness={4}>
            <meshPhongMaterial color="#1C315E" />

            <Text3D 
            
            font={roboto} size={0.6} position={[0.9, -0.25 , -0.2]} castShadow="true"  rotation={[0, 1*Math.PI, 0]} height={0.1} >
            Click
                <meshLambertMaterial color={"white"}/>
            </Text3D>
        </RoundedBox>
        </>
    )
}
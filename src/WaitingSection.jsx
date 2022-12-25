import {RoundedBox, Text3D} from "@react-three/drei";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from "react";
import { useState } from "react";
import { TextureLoader } from 'three';

import mapImage from "/src/Photos/mapImage.jpg"
import roboto from '/Roboto Light_Regular.json'
import walltexture from '/src/Photos/wallTextureWaiting.jpg'

export default function WaitingSection(){
    let frame= useLoader(
        GLTFLoader, "/framescene.glb"
      ).scene

      let sofa= useLoader(
        GLTFLoader, "/modernsofascene.glb"
      ).scene

      const textureMap = useLoader(TextureLoader, mapImage)
      const walltexture2= useLoader(TextureLoader, walltexture)
    
      const [clicked, setClicked] = useState(true)
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
        <meshLambertMaterial attach="material" map={walltexture2} color={"aqua"} />
      </mesh>

      <mesh position={[15, 6.1, 10.4]} rotation={[0,1.5*Math.PI,0]} >
        <planeBufferGeometry attach="geometry" args ={[9.3,12]}/>
        <meshLambertMaterial attach="material" map={walltexture2} color={0x7DE5ED} />
      </mesh>

        {/* Button */}
      <RoundedBox 
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        args={[3, 1.5, 0.5]} position={[1, 4.6, 14.6]} radius={0.05} smoothness={4}>
            <meshPhongMaterial color="#1C315E" />
            

            <Text3D
            font={roboto} size={0.6} position={[0.9, -0.25 , -0.2]} castShadow="true"  rotation={[0, 1*Math.PI, 0]} height={0.1} >
            Click
                <meshLambertMaterial color={"white"}/>
            </Text3D>
      </RoundedBox>

            <Text3D
            font={roboto} size={clicked ? 0.0 : 0.6} position={[13.3, 9.15 , 14.8]} castShadow="true" rotation={[0, 1*Math.PI, 0]} height={0.15} >
            Welcome to my world!
                <meshLambertMaterial color={"#1C315E"}/>
            </Text3D>

            <Text3D
            font={roboto} size={clicked ? 0.0 : 0.5} position={[14.2, 7.85 , 14.8]} castShadow="true"  rotation={[0, 1*Math.PI, 0]} height={0.15} >
            Click on each of the projectors
                <meshLambertMaterial color={"#1C315E"}/>
            </Text3D>

            <Text3D
            font={roboto} size={clicked ? 0.0 : 0.5} position={[13.3, 6.65 , 14.8]} castShadow="true"  rotation={[0, 1*Math.PI, 0]} height={0.15} >
            to find out more about me.
                <meshLambertMaterial color={"#1C315E"}/>
            </Text3D>
        
        </>
    )
}
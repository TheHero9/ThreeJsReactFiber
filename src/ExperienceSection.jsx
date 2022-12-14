import {Text3D} from "@react-three/drei";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from "react";
import { useState } from "react";
import { TextureLoader } from "three";

import roboto from '/Roboto Light_Regular.json'
import marioback3 from "/src/Photos/marioback3.jpg"
import marioback from "/src/Photos/marioback.jpg"


export default function EducationSection(){
      let lake= useLoader(
        GLTFLoader, "/lakescene.glb"
      ).scene

      let mysteryBox = useLoader(
        GLTFLoader, "/mysteryscene.glb"
      ).scene

      let piranhas = useLoader(
        GLTFLoader, "/piranhascene.glb"
      ).scene

      let mario = useLoader(
        GLTFLoader, "/marioscene.glb"
      ).scene
    
      let pillar = useLoader(
        GLTFLoader, "/pillarscene.glb"
      )

      let projector= useLoader(
        GLTFLoader, "/projectorscene.glb"
      )
    
      const backTexture = useLoader(TextureLoader, marioback)
      const backTexture3 = useLoader(TextureLoader, marioback3)

      const [pillarGeo2, setPillarGeo2] = useState()
      const [projectorGeo2, setProjectorGeo2] = useState()

      if(!pillarGeo2){
        const scene2 = pillar.scene.clone(true)
        setPillarGeo2(scene2)
      }

      if(!projectorGeo2){
        const sceneProjector2 = projector.scene.clone(true)
        setProjectorGeo2(sceneProjector2)
      }

      //Dependancies
      const [clicked, setClicked] = useState(false)
      const [hovered, setHovered] = useState(false)

      const [clickedBox, setClickedBox] = useState(false)
      const [hoveredBox, setHoveredBox] = useState(false)

      // Links
      const settingsURL='location=yes,height=1670,width=1120,scrollbars=yes,status=yes'

      useFrame(()=> {
        projectorGeo2.rotation.y += 0.02   

        mysteryBox.rotation.y += 0.0019

      })

      useEffect(() => {
        pillarGeo2.scale.set(0.003, 0.002, 0.003);
        lake.scale.set(0.11, 0.11, 0.11)
        piranhas.scale.set(0.01, 0.01, 0.01)
        mysteryBox.scale.set(2,2,2)
        
        document.body.style.cursor = hovered ? "pointer" : "auto"
        document.body.style.cursor = hoveredBox ? "pointer" : "auto"
      }, [hovered, hoveredBox]);
      
    
      const test = {
      }

    return(
     <>

      {/* Lake*/}
      <primitive object={lake} rotation={[0,0,0]} position={[8.1,-1.4,-8.1]} />

      {/*Box*/}
      <primitive onClick={(e) =>{
        setClickedBox(true)
        window.open("https://github.com/TheHero9/Experience", '_blank', settingsURL)

        var sound2 = new Audio("./sounds/coin.mp3");
        sound2.play();
      }} 
      onPointerOver={() => setHoveredBox(true)}
      onPointerOut={() => setHoveredBox(false)}
      
      object={mysteryBox} rotation={[0,-0.3,0]} position={[5.6, 4.4, -13]} />

      {/*Piranhas*/}
      <primitive onClick={()=>{
        var sound3 = new Audio("./sounds/pipetravel.mp3")
        sound3.play()
      }} 
      onPointerOver={() => setHoveredBox(true)}
      onPointerOut={() => setHoveredBox(false)}
       object={piranhas} rotation={[0, 0, 0]} position={[13.3, 2.2, -12]} />

      {/*Pillar*/}
      <primitive object={pillarGeo2} rotation={[0, 0, 0]} position={[5.47, 1.7,-2.6]} />

      {/*Mario>*/}
      <primitive onClick={() => {
        var sound1 = new Audio("./sounds/marioJump.mp3");
        sound1.play();
      }}
      
      onPointerOver={() => setHoveredBox(true)}
      onPointerOut={() => setHoveredBox(false)}
      object={mario} rotation={[0, 0, 0]} position={[9.17, 0.2, -2.3]} />

      {/*Projector*/}
      <primitive object={projectorGeo2}  
          onClick={(e)=> {
            setClicked(!clicked)
          }}

          onPointerOver={() => setHoveredBox(true)}
          onPointerOut={() => setHoveredBox(false)}

          rotation={[0, 0, 0]} position={[5.35, 3.11,-2.6]}
          />

      {/* Walls for Experience section*/}
    <mesh position={[15.01, 6.1, -8]} rotation={[0, -0.5*Math.PI, 0]} >
        <planeGeometry attach="geometry" args ={[13.7,12]}/>
        <meshLambertMaterial attach="material" map={backTexture}  />
      </mesh>

      {/* BackWall */}
      <mesh position={[8.156, 6.1, -15]} rotation={[0, -2*Math.PI, 0]} >
        <planeGeometry attach="geometry" args ={[14,12]}/>
        <meshLambertMaterial attach="material"  map={backTexture3}/>
      </mesh>

      {/* <TextEducationSection/> */}
      <Text3D font={roboto} size={clicked ? 0.5 : 0} castShadow="true"  height={0.2} {...test}  position={[2.9, 3.71 ,-2.6]}>
      Experience Section
          <meshLambertMaterial color={"white"}/>
          {/* 0x001253 */}
      </Text3D>


     </>
    )
    
}


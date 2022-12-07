import { Text3D} from "@react-three/drei";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from "react";
import { useState } from "react";

import roboto from '/Roboto Light_Regular.json'


export default function EducationSection(){
      let lake= useLoader(
        GLTFLoader, "./src/3DImports/calm_lake/scene.gltf"
      ).scene

      let mysteryBox = useLoader(
        GLTFLoader, "./src/3DImports/mystery_block/scene.gltf"
      ).scene

      let piranhas = useLoader(
        GLTFLoader, "./src/3DImports/Piranhas/scene.gltf"
      ).scene

      let mario = useLoader(
        GLTFLoader, "./src/3DImports/mario/scene.gltf"
      ).scene
    
      let pillar = useLoader(
        GLTFLoader, "./src/3DImports/Pillar/greek/scene.gltf"
      )

      let projector= useLoader(
        GLTFLoader, "./src/3DImports/hologram_projector/scene.gltf"
      )
    

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


      useFrame(()=> {
        projectorGeo2.rotation.y += 0.02
        
      })

      useEffect(() => {
        pillarGeo2.scale.set(0.003, 0.002, 0.003);
        lake.scale.set(0.11, 0.11, 0.11)
        piranhas.scale.set(0.01, 0.01, 0.01)
        mysteryBox.scale.set(2,2,2)
        
        document.body.style.cursor = hovered ? "pointer" : "auto"
      }, [hovered]);
      
    
      const test = {
      }

    return(
     <>

      {/* Lake*/}
      <primitive object={lake} rotation={[0,0,0]} position={[8.1,-1.4,-8.1]} />

      {/*Box*/}
      <primitive object={mysteryBox} rotation={[0,-0.3,0]} position={[5.6, 4.4, -13]} />

      {/*Box*/}
      <primitive object={piranhas} rotation={[0, 0, 0]} position={[13.3, 2.2, -12]} />

      {/*Pillar*/}
      <primitive object={pillarGeo2} rotation={[0, 0, 0]} position={[5.47, 1.7,-2.6]} />

      {/*Mario>*/}
      <primitive object={mario} rotation={[0, 0, 0]} position={[9.17, 0.2, -2.3]} />

      {/*Projector*/}
      <primitive object={projectorGeo2}  
          onClick={(e)=> {
            setClicked(!clicked)
          }}

          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}

          rotation={[0, 0, 0]} position={[5.35, 3.11,-2.6]}
          />


      {/* <TextEducationSection/> */}
      <Text3D font={roboto} size={clicked ? 0.5 : 0} castShadow="true"  height={0.1} {...test}  position={[2.9, 3.71 ,-2.6]}>
      Education Section
          <meshLambertMaterial color={0x001253}/>
      </Text3D>
     </>
    )
    
}


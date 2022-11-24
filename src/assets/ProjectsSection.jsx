import { Billboard, RoundedBox, Text3D} from "@react-three/drei";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState } from "react";


import { TextMaker} from "./Texts";
import roboto from '/Roboto Light_Regular.json'

export default function ProjectsSection(){
      let tree= useLoader(
        GLTFLoader, "src/3DImports/Tree/pine_tree/scene.gltf"
      ).scene

       let grass= useLoader(
        GLTFLoader, "src/3DImports/grass_ground/scene.gltf"
       ).scene

       let pillar = useLoader(
        GLTFLoader, "src/3DImports/Pillar/greek/scene.gltf"
      )
      let rock= useLoader(
        GLTFLoader, "src/3DImports/Rock/scene.gltf"
      ).scene

      let rock2= useLoader(
        GLTFLoader, "src/3DImports/BigRock/scene.gltf"
      ).scene

      let slide= useLoader(
        GLTFLoader, "src/3DImports/slide/scene.gltf"
      ).scene
      
      let shiba= useLoader(
        GLTFLoader, "src/3DImports/ShibaDog/scene.gltf"
      ).scene

      let projector= useLoader(
        GLTFLoader, "src/3DImports/hologram_projector/scene.gltf"
      )
      
        
    const [pillarGeo, setPillarGeo] = useState()
    const [projectorGeo, setProjectorGeo] = useState()

    if(!pillarGeo){
      const scenePillar = pillar.scene.clone(true)
      setPillarGeo(scenePillar)
    }

    if(!projectorGeo){
      const sceneProjector = projector.scene.clone(true)
      setProjectorGeo(sceneProjector)
    }

    //Dependancies
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)

    useFrame(()=> {
      projectorGeo.rotation.y -= 0.02
    })

      useEffect(() => {
        pillarGeo.scale.set(0.003, 0.002, 0.003);
        rock2.scale.set(0.0045, 0.0045, 0.0045)
        rock.scale.set(5,5,5)

        slide.scale.set(0.4,0.4,0.4)

        grass.scale.set(0.22, 0.09, 0.177)

        document.body.style.cursor = hovered ? "pointer" : "auto"
      }, [hovered]);
      

      

    return(
     <>

      {/* Pillar */}
      <primitive object={pillarGeo} rotation={[0,0.3,0]} position={[-5,0.2,-2]} />

      {/* Rock */}
      <primitive object={rock} position={[-9.5,0.3,-4]} />

      {/* Rock Big*/}
      <primitive object={rock2} rotation={[0,9.8,0]} position={[-12.9,0.2,-13]} />

      {/* Pine tree */}
      <primitive object={tree} rotation={[0,7,0]} position={[-7.1,-0.19,-11]} />

      {/* Grass */}
      <primitive object={grass} rotation={[0,0,0]} position={[-3.4,0.1,-4.6]} />

      {/* Slide */}
      <primitive object={slide} rotation={[0,2,0]} position={[-3.9,-0.05,-9]} />

      {/* Shiba Dog */}
      <primitive object={shiba} rotation={[0.3,0,0]} position={[-9.5,2.3,-3.2]} />

      {/* Projector */}
      <primitive 
          onClick={(e)=> {
            setClicked(!
              clicked)
          }} 
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          object={projectorGeo} 
          rotation={[0,0.3,0]} 
          position={[-5.15,1.61,-2.0]} />
        
        
        {/* Text  */}
        <Text3D font={roboto} size={clicked ? 0.5 : 0} height={0.2} position={[-7.2, 2.3 ,-1.4]} rotation={[0,0.4,0]}>
           Projects Setion
          <meshNormalMaterial />
      </Text3D>
        
     </>
    )
}

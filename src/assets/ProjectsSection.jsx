import { Billboard, RoundedBox} from "@react-three/drei";
import { useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState } from "react";


import { TextMaker} from "./Texts";


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


      useEffect(() => {
        pillarGeo.scale.set(0.003, 0.002, 0.003);
        rock2.scale.set(0.0045, 0.0045, 0.0045)
        rock.scale.set(5,5,5)

        slide.scale.set(0.4,0.4,0.4)

        grass.scale.set(0.22, 0.09, 0.177)
      });
      

      //Project text
      const [clicked, setClicked] = useState(false)


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
            setClicked(!clicked)
          }} 

          object={projectorGeo} 
          rotation={[0,0.3,0]} 
          position={[-5.15,1.61,-2.0]} />
        
        <TextMaker  color={"red"}  fillOpacity={clicked ? 1 : 0} fontSize={0.2} rotation={[0,0.4,0]} coords={{x:-5.0, y:2.29, z:-1.95}} message={"Projects Section"}/>
        
     </>
    )
}

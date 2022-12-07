import { Billboard, RoundedBox, Text3D} from "@react-three/drei";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState } from "react";


import { TextMaker} from "./Texts";
import roboto from '/Roboto Light_Regular.json'

export default function ProjectsSection(){
      let tree= useLoader(
        GLTFLoader, "./src/3DImports/Tree/pine_tree/scene.gltf"
      ).scene

      let signs= useLoader(
        GLTFLoader, "./src/3DImports/signs/scene.gltf"
      ).scene

       let grass= useLoader(
        GLTFLoader, "./src/3DImports/grass_ground/scene.gltf"
       ).scene

       let pillar = useLoader(
        GLTFLoader, "./src/3DImports/Pillar/greek/scene.gltf"
      )
      let rock= useLoader(
        GLTFLoader, "./src/3DImports/Rock/scene.gltf"
      ).scene

      let rock2= useLoader(
        GLTFLoader, "./src/3DImports/BigRock/scene.gltf"
      ).scene

      let slide= useLoader(
        GLTFLoader, "./src/3DImports/slide/scene.gltf"
      ).scene
      
      let shiba= useLoader(
        GLTFLoader, "./src/3DImports/ShibaDog/scene.gltf"
      ).scene

      let projector= useLoader(
        GLTFLoader, "./src/3DImports/hologram_projector/scene.gltf"
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

    //Link
    const settingsURL='location=yes,height=1670,width=1120,scrollbars=yes,status=yes'
  
    useFrame(()=> {
      projectorGeo.rotation.y -= 0.02
      // rock.rotation.y -= 0.02
      // rock.rotation.x +=0.03
    })

      useEffect(() => {
        pillarGeo.scale.set(0.003, 0.003, 0.003);
        rock2.scale.set(0.0045, 0.0045, 0.0045)
        rock.scale.set(5,5,5)

        signs.scale.set(1.4,1.4,1.4)

        slide.scale.set(0.6,0.6,0.6)

        grass.scale.set(0.22, 0.09, 0.177)

        document.body.style.cursor = hovered ? "pointer" : "auto"
      }, [hovered]);
      

      

    return(
     <>

      {/* Pillar */}
      <primitive object={pillarGeo} rotation={[0,0.3,0]} position={[-7.06,0.2,-6.9]} />

      {/* Rock */}
      <primitive object={rock} position={[-9.5,0.3,-4]} />

      {/* Rock Big*/}
      <primitive object={rock2} rotation={[0,9.8,0]} position={[-12.9,0.2,-13]} />

      {/* Pine tree */}
      <primitive object={tree} rotation={[0,7,0]} position={[-7.1,-0.19,-11]} />

      {/* Grass */}
      <primitive object={grass} rotation={[0,0,0]} position={[-3.4,0.1,-4.6]} />

      {/* Slide */}
      <primitive object={slide} rotation={[0,2,0]} position={[-3.9,-0.05,-12]} />

      {/* Shiba Dog */}
      <primitive object={shiba} rotation={[0.3,0,0]} position={[-9.5,2.3,-3.2]} />

      {/* Signs */}
      <primitive object={signs} rotation={[0,0.3,0]} position={[-3,0,-7]} />

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
          position={[-7.15,2.31,-6.9]} />
        
        
        {/* Text  */}
        <Text3D font={roboto} size={clicked ? 0.5 : 0} height={0.2} position={[-9.2, 3 ,-6.4]} rotation={[0,0.4,0]}>
           Projects Setion
          <meshLambertMaterial color={0xF5EBE0}/>
      </Text3D>


          {/* Projects Links */}
      <Text3D
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => window.open("https://thehero9.github.io/Portfolio3.0/", '_blank', settingsURL)}
      font={roboto} size={clicked ? 0.5 : 0} height={0.15} position={[-1.7, 1.5, -7.3]} rotation={[0, 0.3,0]}>
           CV
          <meshLambertMaterial color={0xF5EBE0}/>
      </Text3D>

      <Text3D 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => window.open("https://thehero9.github.io/NumberLe-The-Game/", '_blank', settingsURL)}
      font={roboto} size={clicked ? 0.4 : 0} height={0.15} position={[-3.7, 1.5, -6.7]} rotation={[0, 0.3,0]}>
           Game
          <meshLambertMaterial color={0xF5EBE0}/>
      </Text3D>

      <Text3D 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => window.open("https://thehero9.github.io/Blog-react/", '_blank', settingsURL)}
      font={roboto} size={clicked ? 0.4 : 0} height={0.15} position={[-5.3, 1.7, -6.2]} rotation={[0, 0.3,0]}>
           Blog
          <meshLambertMaterial color={0xF5EBE0}/>
      </Text3D>
        
     </>
    )
}

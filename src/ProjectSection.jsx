import { Text3D} from "@react-three/drei";
import { useFrame, useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState } from "react";
import { TextureLoader } from "three";

import roboto from '/Roboto Light_Regular.json'
import plains from "/src/Photos/PlainsBiome.jpg"
import plains2 from "/src/Photos/plains2.jpg"

export default function ProjectsSection(){
      let tree= useLoader(
        GLTFLoader, "/treescene.glb"
      ).scene

      let signs= useLoader(
        GLTFLoader, "/signsscene.glb"
      ).scene

       let grass= useLoader(
        GLTFLoader, "/grassgroundscene.glb"
       ).scene

       let pillar = useLoader(
        GLTFLoader, "/pillarscene.glb"
      )
      let rock= useLoader(
        GLTFLoader, "/rockscene.glb"
      ).scene

      let rock2= useLoader(
        GLTFLoader, "/bigrockscene.glb"
      ).scene

      let slide= useLoader(
        GLTFLoader, "/slidescene.glb"
      ).scene
      
      let shiba= useLoader(
        GLTFLoader, "/shibadogscene.glb"
      ).scene

      let projector= useLoader(
        GLTFLoader, "/projectorscene.glb"
      )
      
        
    const [pillarGeo, setPillarGeo] = useState(false)
    const [projectorGeo, setProjectorGeo] = useState(false)

    if(!pillarGeo){
      const scenePillar = pillar.scene.clone(true)
      setPillarGeo(scenePillar)
    }

    if(!projectorGeo){
      const sceneProjector = projector.scene.clone(true)
      setProjectorGeo(sceneProjector)
    }

    const plainsTexture = useLoader(TextureLoader, plains)
    const plainsTexture2 = useLoader(TextureLoader, plains2)


    //Dependancies
    const [clicked, setClicked] = useState(false)
    const [hovered, setHovered] = useState(false)

    const [hoveredCV, setHoveredCv] = useState(false)
    const [hoveredGame, setHoveredGame] = useState(false)
    const [hoveredBlog, setHoveredBlog] = useState(false)

    //Link
    const settingsURL='location=yes,height=1670,width=1120,scrollbars=yes,status=yes'
  
    useFrame(()=> {
      projectorGeo.rotation.y -= 0.02
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
      <primitive onClick={()=>{
        var soundDog = new Audio("./sounds/bark.mp3")
        soundDog.play()
      }}
      onPointerOver={()=>{
        setHovered(true)
      }}
      onPointerOut={()=>{
        setHovered(false)
      }}
      
      object={shiba} rotation={[0.3,0,0]} position={[-9.5,2.3,-3.2]} />

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


      {/* Walls Left(For project section) */}
    <mesh position={[-15.01, 6.05, -8.2]} rotation={[0, 0.5*Math.PI, 0]} >
        <planeGeometry attach="geometry" args ={[14, 12.1]}/>
        <meshLambertMaterial attach="material" map={plainsTexture2} />
      </mesh>

          {/* Back wall */}
      <mesh position={[-6.9, 6.05, -14.99]} rotation={[0, -2*Math.PI, 0]} >
        <planeGeometry attach="geometry" args ={[16.2, 12.1]}/>
        <meshLambertMaterial attach="material" map={plainsTexture} />
      </mesh>


          {/* Projects Links */}
      <Text3D
      onPointerOver={() => {
        setHovered(true)
        setHoveredCv(true)}}
      onPointerOut={() => {
        setHovered(false)
        setHoveredCv(false)}}
      onClick={(e) => window.open("https://thehero9.github.io/Portfolio3.0/", '_blank', settingsURL)}
      font={roboto} size={clicked ? 0.5 : 0} height={0.17} position={[-1.7, 1.5, -7.3]} rotation={[0, 0.3,0]}>
           CV
          <meshLambertMaterial color={hoveredCV ? 0xFBC252 : 0xF5EBE0}/>
      </Text3D>

      <Text3D 
      onPointerOver={() => {setHovered(true)
      setHoveredGame(true)}}
      onPointerOut={() => {setHovered(false)
      setHoveredGame(false)}}
      onClick={(e) => window.open("https://thehero9.github.io/NumberLe-The-Game/", '_blank', settingsURL)}
      font={roboto} size={clicked ? 0.4 : 0} height={0.17} position={[-3.7, 1.5, -6.7]} rotation={[0, 0.3,0]}>
           Game
          <meshLambertMaterial color={hoveredGame? 0xFBC252 : 0xF5EBE0}/>
      </Text3D>

      <Text3D 
      onPointerOver={() => {setHovered(true)
      setHoveredBlog(true)}}
      onPointerOut={() => {setHovered(false)
      setHoveredBlog(false)}}
      onClick={(e) => window.open("https://thehero9.github.io/Blog-react/", '_blank', settingsURL)}
      font={roboto} size={clicked ? 0.4 : 0} height={0.17} position={[-5.3, 1.7, -6.2]} rotation={[0, 0.3,0]}>
           Blog
          <meshLambertMaterial color={hoveredBlog ? 0xFBC252 : 0xF5EBE0}/>
      </Text3D>
        
     </>
    )
}

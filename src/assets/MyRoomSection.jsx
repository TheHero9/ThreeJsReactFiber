import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState } from "react";
import { useLoader } from '@react-three/fiber';
import { Plane,Text3D } from '@react-three/drei';
import * as THREE from "three"
import { TextureLoader } from 'three';

//Photo
import wall from "./wallTexture.jpg"


import roboto from '/Roboto Light_Regular.json'

export default function MyRoomSection(){

    let wooden_shelf= useLoader(
        GLTFLoader, "src/3DImports/Myroom/wooden_shelf/scene.gltf"
    )

    const [shelf1, shelfGeometry1] = useState()
    const [shelf2, shelfGeometry2] = useState()
    const [shelf3, shelfGeometry3] = useState()

      if(!shelf1){
        const scene = wooden_shelf.scene.clone(true)
        shelfGeometry1(scene)

        const scene2 = wooden_shelf.scene.clone(true)
        shelfGeometry2(scene2)

        const scene3 = wooden_shelf.scene.clone(true)
        shelfGeometry3(scene3)
      }


    let computer_desk= useLoader(
        GLTFLoader, "src/3DImports/Myroom/computer_desk/scene.gltf"
      ).scene

    let tiles= useLoader(
        GLTFLoader, "src/3DImports/Myroom/tiles/scene.gltf"
    ).scene

    let laptop= useLoader(
        GLTFLoader, "src/3DImports/Myroom/laptop/scene.gltf"
    ).scene

    let mousepad= useLoader(
        GLTFLoader, "src/3DImports/Myroom/mousepad/scene.gltf"
    ).scene

    let office_chair= useLoader(
        GLTFLoader, "src/3DImports/Myroom/office_chair/scene.gltf"
    ).scene

    let shelf= useLoader(
        GLTFLoader, "src/3DImports/Myroom/shelf/scene.gltf"
    ).scene

    const textureWall1= useLoader(TextureLoader, wall)
    const textureWall2= useLoader(TextureLoader, wall)

    const [hovered, setHovered] = useState(false)

    const settingsURL='location=yes,height=1670,width=1120,scrollbars=yes,status=yes'

    useEffect(() => {
        computer_desk.scale.set(1.4, 1.4, 1.4)
        laptop.scale.set(0.10, 0.10, 0.10)
        mousepad.scale.set(1.3, 1.1, 1.3)
        office_chair.scale.set(0.06, 0.06, 0.06)
        tiles.scale.set(0.1, 0.05, 0.032)
        shelf.scale.set(5, 5, 5)

        shelf1.scale.set(3, 3, 3)
        shelf2.scale.set(3, 3, 3)
        shelf3 .scale.set(3, 3, 3)

        document.body.style.cursor = hovered ? "pointer" : "auto"
      }, [hovered]);

    return(
        <>
    {/*Computer Desk*/}
    <primitive object={computer_desk} rotation={[0, -1*Math.PI, 0]} position={[-11, 4.1, 13]} />

    {/*Laptop*/}
    <primitive object={laptop} rotation={[0, -1*Math.PI, 0]} position={[-11.25, 4.16, 13.5]} />

    {/*Mousepad*/}
    <primitive object={mousepad} rotation={[0, -1*Math.PI, 0]} position={[-10.73, 4.2, 13.5]} />

    {/*Office Chair*/}
    <primitive object={office_chair} rotation={[0,-0.35*Math.PI, 0]} position={[-18, 0.75, 13]} />

    {/*Shelf*/}
    <primitive object={shelf} rotation={[0, -1*Math.PI, 0]} position={[-5.4, -0.1, 14]} />

    {/*Wooden Shelf*/}
    <primitive object={shelf1} rotation={[0, -1*Math.PI, 0]} position={[-11.1, 6.5, 14.25]} />

    {/*Wooden Shelf*/}
    <primitive object={shelf2} rotation={[0, -1*Math.PI, 0]} position={[-11.1, 8.4, 14.25]} />

    {/*Wooden Shelf*/}
    <primitive object={shelf3} rotation={[0, -1*Math.PI, 0]} position={[-11.1, 10.3, 14.25]} />

    {/*Tiles*/}
    <primitive object={tiles} rotation={[0, -1*Math.PI, 0]} position={[-10, 0.3, 10.2]} />




    <mesh position={[-8.5,5,15.01]} rotation={[0,1*Math.PI,0]} >
        <planeBufferGeometry attach="geometry" args ={[13,15]}/>
        <meshLambertMaterial attach="material" map={textureWall1} color={"aqua"} />
      </mesh>

      <mesh position={[-15, 5, 10.7]} rotation={[0,-1.5*Math.PI,0]} >
        <planeBufferGeometry attach="geometry" args ={[10,15]}/>
        <meshLambertMaterial attach="material" map={textureWall1} color="aqua" />
      </mesh>


      <Text3D
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => window.open("https://www.linkedin.com/in/demetrios-vlassis/", '_blank', settingsURL)}
      font={roboto} size={0.5} height={0.25} position={[-3.5, 5.3, 14.2]} rotation={[0,1*Math.PI,0]}>
           LinkedIn
          <meshLambertMaterial color={0x0002A1} />
      </Text3D>

      <Text3D 
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)} 
      onClick={(e) => window.open("https://www.facebook.com/dimi.v.02/", '_blank', settingsURL)}
      font={roboto} size={0.5} height={0.25} position={[-3.4, 7.5, 14.2]} rotation={[0,1*Math.PI,0]}>
           Facebook
          <meshLambertMaterial color={0x332FD0}/>
      </Text3D>

      <Text3D 
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)} 
          onClick={(e) => window.open("https://www.instagram.com/dimi.v.9/", '_blank', settingsURL)}
          font={roboto}  size={0.5} height={0.25} position={[-3.3, 9.3, 14.2]} rotation={[0,1*Math.PI,0]}>
           Instagram
          <meshLambertMaterial color={0x80489C} />
      </Text3D>













        </>
    )
}
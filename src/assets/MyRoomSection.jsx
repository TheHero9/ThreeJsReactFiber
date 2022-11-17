import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState } from "react";
import { useLoader } from '@react-three/fiber';
import { Plane } from '@react-three/drei';
import * as THREE from "three"


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

    

    useEffect(() => {
        computer_desk.scale.set(1.4, 1.4, 1.4)
        laptop.scale.set(0.10, 0.10, 0.10)
        mousepad.scale.set(1.3, 1.1, 1.3)
        office_chair.scale.set(0.06, 0.06, 0.06)
        shelf.scale.set(5, 5, 5)

        shelf1.scale.set(3, 3, 3)
        shelf2.scale.set(3, 3, 3)
        shelf3 .scale.set(3, 3, 3)
      }, []);

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
    <primitive object={shelf1} rotation={[0, -1*Math.PI, 0]} position={[-11.1, 6.5, 14]} />

    {/*Wooden Shelf*/}
    <primitive object={shelf2} rotation={[0, -1*Math.PI, 0]} position={[-11.1, 8.4, 14]} />

    {/*Wooden Shelf*/}
    <primitive object={shelf3} rotation={[0, -1*Math.PI, 0]} position={[-11.1, 10.3, 14]} />




    <mesh position={[-8.5,5,15]} rotation={[0,0,0]} >
        <planeBufferGeometry attach="geometry" args ={[13,15]}/>
        <meshLambertMaterial attach="material" color={0x5DA7DB} side={THREE.DoubleSide}/>
      </mesh>

      <mesh position={[-15, 5, 10.5]} rotation={[0,-0.5*Math.PI,0]} >
        <planeBufferGeometry attach="geometry" args ={[9,10]}/>
        <meshLambertMaterial attach="material" color="aqua" side={THREE.DoubleSide}/>
      </mesh>
        </>
    )
}
import * as THREE from "three" 
import {Plane} from '@react-three/drei';
import {usePlane} from "@react-three/cannon"
import { useRef } from "react";

export default function Floor(){
    const [ref] = usePlane(
        () => ({
            type: "Static",
            rotation: [-Math.PI /2, 0,0]
        }), useRef(null)
    )


    return (
        <>
        <mesh rotation={[-0.5*Math.PI,0,0]}>
            <planeBufferGeometry attach="geometry" args={[40, 40]}  />
            <meshPhongMaterial attach="material" color={0x393E46} />
         </mesh>
        </>
    )
}
import * as THREE from "three" 
import {Plane, RoundedBox} from '@react-three/drei';
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
            <planeBufferGeometry attach="geometry" args={[30, 30]}  />
            <meshPhongMaterial attach="material" color={0x393E46} />
         </mesh>
        
         {/* <RoundedBox args={[30,2,30]} radius={0} smoothness={1} position={[0,0,0]}>
            <meshPhongMaterial color="blue" wireframe/>
        </RoundedBox> */}
        </>
    )
}
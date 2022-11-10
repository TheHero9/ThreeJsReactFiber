import { Billboard, RoundedBox} from "@react-three/drei";
import { useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from "react";


import { TextProjectsSection } from "./Texts";


export default function ProjectsSection(){
    // const gltf = useLoader(GLTFLoader, "3D Imports/greek_pillar/scene.gltf")

    let mesh = useLoader(
        GLTFLoader, "3D Imports/greek/scene.gltf"
      ).scene

      useEffect(() => {
        mesh.scale.set(0.0009, 0.0008, 0.0009);
    
        mesh.children[0].position.set(-365, -18, -67);
      },[mesh]);
    

    return(
     <>
        <Billboard
        follow={false}
        lockX={true}
        lockY={false}
        lockZ={true} // Lock the rotation on the z axis (default=false)
        >
            <RoundedBox args={[0.7,0.5,0.3]} radius={0} smoothness={1} position={[-5.35,0.8,-7]}>
            <meshPhongMaterial color="blue" wireframe/>
            </RoundedBox>
            <TextProjectsSection/>
             

        </Billboard> 
        <primitive object={mesh} position={[-5,0,-7]} />
     </>
    )
}

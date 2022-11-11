import { Billboard, RoundedBox} from "@react-three/drei";
import { useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from "react";

import { TextProjectsSection } from "./Texts";


export default function ProjectsSection(){
      let tree= useLoader(
        GLTFLoader, "Tree/pine_tree/scene.gltf"
      ).scene

       let grass= useLoader(
        GLTFLoader, "Grass/realtime_grass/scene.gltf"
       ).scene

       let pillar = useLoader(
        GLTFLoader, "3D Imports/greek/scene.gltf"
      ).scene

      let rock= useLoader(
        GLTFLoader, "Rock/rock/scene.gltf"
      ).scene

      // let rock2= useLoader(
      //   GLTFLoader, "Rock/rock/scene.gltf"
      // ).scene
        
      useEffect(() => {
        pillar.scale.set(0.0020, 0.0020, 0.0020);
        rock.scale.set(5,5,5)
        // rock.scale.set(7,7,7)
      });
      
    return(
     <>

      {/* Pillar */}
      <primitive object={pillar} rotation={[0,0.3,0]} position={[-5,0,-2]} />

      {/* Rock */}
      <primitive object={rock} position={[-13.5,0,-3]} />

      {/* Pine tree */}
      <primitive object={tree} rotation={[0,7,0]} position={[-10,-0.15,-11]} />

      {/* Grass */}
      <primitive object={grass} rotation={[0,0,0]} position={[-7,-0.25,-8]} />
        

        
        <Billboard
        follow={false}
        lockX={true}
        lockY={false}
        lockZ={true}>
            <RoundedBox args={[0.9,0.7,0.5]} radius={0} rotation={[0,0.3,0]} smoothness={1} position={[-5.1,1.76,-2]}>
            <meshPhongMaterial color="blue"/>
            </RoundedBox>
            <TextProjectsSection/>
        </Billboard> 
     </>
    )
}

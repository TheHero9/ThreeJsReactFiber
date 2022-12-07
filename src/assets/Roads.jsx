import { useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState } from "react";


export default function Roads(){
    let road= useLoader(
        GLTFLoader, "./src/3DImports/road_straight/scene.gltf"
      )

      const [geometry, setGeometry] = useState()
      const [geometry2, setGeometry2] = useState()

      if(!geometry){
        const scene = road.scene.clone(true)
        setGeometry(scene)

        const scene2 = road.scene.clone(true)
        setGeometry2(scene2)
      }


    useEffect(() => {
       geometry.scale.set(0.115, 0.115, 0.25)
    //    geometry2.scale.set(0.115, 0.115, 0.14)
    });
    
    return(
        <>
            {/*Road*/}
            <primitive object={geometry} rotation={[0,Math.PI/2,0]} position={[0, 0.1, 2.3]} />
            {/* <primitive object={geometry2} rotation={[0,Math.PI/2,0]} position={[9, 0.1, 2.3]} /> */}
        </>
    )
}
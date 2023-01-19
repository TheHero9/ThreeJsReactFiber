import { useLoader} from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useState } from "react";


export default function Roads(){
    let road= useLoader(
        GLTFLoader, "Imports/roadscene.glb"
      )

      const [geometry, setGeometry] = useState()

      if(!geometry){
        const scene = road.scene.clone(true)
        setGeometry(scene)

        const scene2 = road.scene.clone(true)
      }


    useEffect(() => {
       geometry.scale.set(0.115, 0.115, 0.25)
    });
    
    return(
        <>
            {/*Road*/}
            <primitive object={geometry} rotation={[0,Math.PI/2,0]} position={[0, 0.1, 2.3]} />
        </>
    )
}
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function Shiba(props){
    const gltf = useLoader(GLTFLoader, props.url)

    return(
        <canvas>
      <primitive object={gltf.scene} />
    </canvas>
    )
}
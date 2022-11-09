import { TextureLoader } from 'three/src/loaders/TextureLoader';
import universe from "../universe.jpg"
import {useLoader} from '@react-three/fiber'
import * as THREE from "three"

function Plane(props){
    const colorMap = useLoader(TextureLoader, universe)
    return(
      <mesh position={[props.coords.x,props.coords.y,props.coords.z]} rotation={props.rotation} >
        <planeBufferGeometry attach="geometry" args ={[3,3]}/>
        <meshLambertMaterial attach="material" side={THREE.DoubleSide} map={colorMap}/>
      </mesh>
    )
  }

export default function Planes(){
    return(
        <>
        {/* 4Planes */}
      {/* <Plane coords={{x:5, y:2.5, z:0}} rotation={[0,-0.5*Math.PI,0]}/>
      <Plane coords={{x:-5, y:2.5, z:0}} rotation={[0,-0.5*Math.PI,0]}/>
      <Plane coords={{x:0, y:2.5, z:-5}} rotation={[0,0,0]}/>
      <Plane coords={{x:0, y:2.5, z:9}} rotation={[0,0,0]}/> */}

      <Plane coords={{x:-5, y:0.1, z:-20}} rotation={[-0.5*Math.PI,0,0]}/>
      <Plane coords={{x:20, y:0.1, z:-10}} rotation={[-0.5*Math.PI,0,0]}/>
      <Plane coords={{x:19, y:0.1, z:20}} rotation={[-0.5*Math.PI,0,0]}/>
      <Plane coords={{x:3, y:0.1, z:19}} rotation={[-0.5*Math.PI,0,0]}/>
      <Plane coords={{x:-15, y:0.1, z:19}} rotation={[-0.5*Math.PI,0,0]}/>

      
        </>
    )
}
//Import needed files
import React from 'react'
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars, Text, Billboard, RoundedBox} from '@react-three/drei';
import * as THREE from "three"
import {AmbientLight} from "three"
import './App.css'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import {Physics} from '@react-three/cannon'

//Import components
import Planes from './assets/Planes';
import Floor from './assets/Floor';
import Texts from './assets/Texts';
import Car from './assets/Car';

function App() {
  return (
    <Canvas>
      <Physics broadphase='SAP' gravity={[0, -2.6, 0]}>

      <PerspectiveCamera makeDefault fov={75} position={[0,5,10]}/>
      {/* <primitive object={new THREE.AxesHelper(2)}/> */}

      <Planes/>
      <Car/>
      <Texts/>
      {/* <Billboard
  follow={true}
  lockX={true}
  lockY={false}
  lockZ={true} // Lock the rotation on the z axis (default=false)
>
  <RoundedBox args={[1, 1, 1]} radius={0.05} smoothness={4} position={[0,5,0]}>
  <meshPhongMaterial color="blue" wireframe />
</RoundedBox>
</Billboard> */}

      <Floor/>

      <ambientLight/>
      <Stars/>
      <OrbitControls/>

      {/* <pointLight position={[1,1,1]}/> */}
      </Physics>
    </Canvas>
  )
}

export default App

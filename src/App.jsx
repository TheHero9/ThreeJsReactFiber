//Import needed files
import React from 'react'
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import * as THREE from "three"
import {AmbientLight} from "three"
import './App.css'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

//Import components
import Planes from './assets/Planes';


function App() {
  const gltf = useLoader(GLTFLoader, "src/3DObjects/shibaDog/scene.gltf")
  return (
    <Canvas>
      <PerspectiveCamera makeDefault fov={75} position={[0,1,5]}/>
      <primitive object={new THREE.AxesHelper(2)}/>
      <primitive position={[0,1,1]} object={gltf.scene} />
      <Planes/>

      <ambientLight/>
      <Stars/>
      <OrbitControls/>

      {/* <pointLight position={[1,1,1]}/> */}
    </Canvas>
  )
}

export default App

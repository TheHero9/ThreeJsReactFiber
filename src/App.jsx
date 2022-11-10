//Import needed files
import React, { Suspense } from 'react'
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
import {Texts} from './assets/Texts';
import Car from './assets/Car';
import Loader from './assets/Loader';
import ProjectsSection from './assets/ProjectsSection';



function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader/>}>
      <Physics broadphase='SAP' gravity={[0, -2.6, 0]}>

      <PerspectiveCamera makeDefault fov={40} position={[0,1,5]}/>
      {/* <primitive object={new THREE.AxesHelper(2)}/> */}

      <Planes/>
      {/* <Car/> */}
      <Texts/>
      

      <Floor/>

      <ProjectsSection/>
      <ambientLight/>
      <Stars/>
      <OrbitControls/>

      {/* <pointLight position={[1,1,1]}/> */}
      </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App

//Import needed files
import React, { Suspense } from 'react'
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars,Text3D, KeyboardControls, Text, Billboard, RoundedBox} from '@react-three/drei';
import * as THREE from "three"
import {Physics} from '@react-three/cannon'
import './App.css'



//Import components
import Planes from './assets/Planes';
import Floor from './assets/Floor';
import {Texts} from './assets/Texts';
import Loader from './assets/Loader';
import ProjectsSection from './assets/ProjectsSection';
import ExperiencenSection from './assets/ExperienceSection';
import Roads from './assets/Roads';
import MyRoomSection from './assets/MyRoomSection';
// import Decorations from './assets/Decorations';
// import Car from './assets/Car';



function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader/>}>
        <Physics broadphase='SAP' gravity={[0, -2.6, 0]}>


    {/* Main Camera */}
      <PerspectiveCamera makeDefault fov={40} zoom={1} position={[0,7,15]}/>
      
    {/* My Imports */}
      <>
      <Planes/>
      <Texts/>
      <Floor/>
      <Roads/>
      </>

    {/* Sections */}
    <>
      <ExperiencenSection/>
      <ProjectsSection/>
      <MyRoomSection/> 
    </>
      

    {/* Other Imports */}
    <>
      <ambientLight/>
      <pointLight position={[7,0,-7]}/>
      <Stars/>
      <OrbitControls/>
    </>

      
      
        </Physics>
      </Suspense>
    </Canvas>
  )
}

export default App

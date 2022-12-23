//Import needed files
import React, { Suspense } from 'react'
import { Canvas, useFrame, useLoader, useThree} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars,Text3D, KeyboardControls, Text, Billboard, RoundedBox} from '@react-three/drei';
import * as THREE from "three"
import {Physics} from '@react-three/cannon'
import './App.css'



//Import components
import Planes from './OtherParts/Planes';
import Floor from './OtherParts/Floor';
import {Texts} from './OtherParts/Texts';
import Loader from './OtherParts/Loader';
import Roads from './OtherParts/Roads';
import ProjectsSection from './ProjectsSection/ProjectsSection';
import ExperiencenSection from './ExperienceSection/ExperienceSection';
import MyRoomSection from './MyRoomSection/MyRoomSection';
import WaitingSection from './WaitingSection/WaitingSection';
// import Decorations from './assets/Decorations';
// import Car from './assets/Car';



function App() {

  return (
    <Canvas>
      <Suspense fallback={<Loader/>}>
        <Physics broadphase='SAP' gravity={[0, -2.6, 0]}>


    {/* Main Camera */}
      <PerspectiveCamera makeDefault fov={40} zoom={1} rotation={[0,1*Math.PI,0]} position={[0, 50, -50]}/>
        {/* 0,6,13 */}
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
      <WaitingSection/>
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

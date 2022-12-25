//Import needed files
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars,Text3D, KeyboardControls, Text, Billboard, RoundedBox} from '@react-three/drei';
import * as THREE from "three"
import './App.css'

//Import components
import Roads from '/src/OtherParts/Roads';
import Loader from '/src/OtherParts/Loader';

import ExperienceSection from "/src/ExperienceSection.jsx"
import ProjectsSection from '/src/ProjectSection.jsx';
import MyRoomSection from '/src/MyRoomSection.jsx';
import WaitingSection from '/src/WaitingSection';

// import Planes from '/src/Planes.jsx';
// import Floor from '/src/OtherParts/Floor';
// import {Texts} from '/src/OtherParts/Texts';





function App() {
  return (
    <Canvas>
      <Suspense fallback={<Loader/>}>    
        <PerspectiveCamera makeDefault fov={70} zoom={1} rotation={[0,1*Math.PI,0]} position={[1, 10, 5]}/>
        {/* <primitive object={new THREE.AxesHelper(2)}/> */}

        <ExperienceSection/>
        <ProjectsSection/>
        <MyRoomSection/>
        <WaitingSection/>

        <Roads/>
        <ambientLight/>
        <Stars/>
        <OrbitControls rotateSpeed={0.5} />

        <pointLight intensity={0.5} position={[0,10, 0]}/>
      </Suspense>
    </Canvas>
  )
}

export default App

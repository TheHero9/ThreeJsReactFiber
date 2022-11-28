//Import needed files
import React, { Suspense } from 'react'
import { Canvas, useFrame, useLoader} from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Stars,Text3D, KeyboardControls, Text, Billboard, RoundedBox} from '@react-three/drei';
import * as THREE from "three"
import './App.css'

import {Physics} from '@react-three/cannon'



//Import components
import Planes from './assets/Planes';
import Floor from './assets/Floor';
import {Texts} from './assets/Texts';
import Loader from './assets/Loader';
import ProjectsSection from './assets/ProjectsSection';
import EducationSection from './assets/EducationSection';
import Roads from './assets/Roads';
import MyRoomSection from './assets/MyRoomSection';
// import Decorations from './assets/Decorations';
// import Car from './assets/Car';



function App() {
  return (
    <Canvas>
      {/* <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}> */}


      <Suspense fallback={<Loader/>}>
        
      <Physics broadphase='SAP' gravity={[0, -2.6, 0]}>

      <PerspectiveCamera makeDefault fov={40} zoom={1} position={[0,7,15]}/>
      {/* <primitive object={new THREE.AxesHelper(2)}/> */}

      <Planes/>
      {/* <Car/> */}
      <Texts/>
      {/* <Text className="hide" depthOffset={20}  fillOpacity={1} position={[0,5,0]}>Hello</Text> */}

      <Floor/>
      {/* <Decorations/> */}


      

      <EducationSection/>
      <ProjectsSection/>
      <MyRoomSection/>

      <Roads/>

      <ambientLight/>
      <Stars/>
      <OrbitControls/>

      <pointLight position={[7,0,-7]}/>
      </Physics>
      </Suspense>

      {/* </KeyboardControls> */}
    </Canvas>
  )
}

export default App

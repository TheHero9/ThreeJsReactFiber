//Import needed files
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas, useFrame, useLoader, useThree} from '@react-three/fiber'
import {OrbitControls, PerspectiveCamera, Stars,Text3D, KeyboardControls, Text, Billboard, RoundedBox, useGLTF} from '@react-three/drei';
import { useControls, button } from 'leva'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Vector3 } from 'three'
import annotations from './annotations.json'
import * as THREE from "three"
import './App.css'

//Import components
import Roads from '/src/OtherParts/Roads';
import Loader from '/src/OtherParts/Loader';

import ExperienceSection from "/src/ExperienceSection.jsx"
import ProjectsSection from '/src/ProjectSection.jsx';
import MyRoomSection from '/src/MyRoomSection.jsx';
import WaitingSection from '/src/WaitingSection';
import { Camera } from 'three';

// import Planes from '/src/Planes.jsx';
// import Floor from '/src/OtherParts/Floor';
// import {Texts} from '/src/OtherParts/Texts';

// const CameraOrbitController = () => {
//   const {camera, gl} = useThree()

//   useEffect(() => {
//     const controls = new OrbitControls(camera, gl.domElement)
   
    
//     console.log(controls.target)
//     controls.target.set(10,7,9)
//     controls.update()

//     controls.target.set(0,0,0)

//     console.log(controls.rotateSpeed)
//     controls.rotateSpeed  = 0.3

//     return () => {
//       controls.dispose()
//     }
//   }, [camera, gl])
  
//   return null
// }


function Arena({ controls, lerping, setLerping }) {
  const [to, setTo] = useState(new Vector3(0, 50, 10))
  const [target, setTarget] = useState(new Vector3(0, 1, 0))

  useControls('📍 Choose Position', () => {
    console.log('creating buttons')


    const _buttons = annotations.reduce(
      (acc, a) =>
        Object.assign(acc, {
          [a.title]: button(() => {
            setTo(a.position)
            setTarget(a.lookAt)
            setLerping(true)
          })
        }),
      {}
    )
    return _buttons
  })

  useFrame(({ camera }, delta) => {
    if (lerping) {
      camera.position.lerp(to, delta)
      controls.current.target.lerp(target, delta)
    }
  })

  return (
    <>
    </>
  )
}


function App() {
  const ref = useRef()
  const [lerping, setLerping] = useState(false)

  return (
    <Canvas 
    camera={{ position: [10, 10, 0], fov: 60 }}
    onPointerDown={() => setLerping(false)}
    onWheel={() => setLerping(false)}
    >
      
      <Suspense fallback={<Loader/>}> 
          
        {/* <PerspectiveCamera zoom={1} makeDefault fov={60} position={[0,10, -3]} />  */}
        {/* <primitive object={new THREE.AxesHelper(2)}/> */}

        <ExperienceSection/>
        
        <ProjectsSection/>
        <MyRoomSection/>
        <WaitingSection/>


        <Roads/>
        <ambientLight/>
        <Stars/>
        
        <OrbitControls target={[9,5,15]} ref={ref} />
        <Arena controls={ref} lerping={lerping} setLerping={setLerping} />

        {/* <CameraOrbitController/> */}
        {/* <OrbitControls  rotateSpeed={0.5} />  */}
        <pointLight intensity={0.5} position={[0,10, 0]}/>
        
      </Suspense>
    </Canvas>
  )
}

export default App

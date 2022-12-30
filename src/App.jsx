//Import needed files
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei';
import { useControls, button } from 'leva'
import { Vector3 } from 'three'

import './App.css'

//Import components
import Roads from '/src/OtherParts/Roads';
import Loader from '/src/OtherParts/Loader';
import annotations from './annotations.json'
import ExperienceSection from "/src/ExperienceSection.jsx"
import ProjectSection from '/src/ProjectSection.jsx';
import MyRoomSection from '/src/MyRoomSection.jsx';
import WaitingSection from '/src/WaitingSection';

function Arena({ controls, lerping, setLerping }) {
  const [to, setTo] = useState(new Vector3(0, 50, 10))
  const [target, setTarget] = useState(new Vector3(0, 1, 0))

  useControls('📍 Choose Position', () => {
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
          
        <ExperienceSection/> 
        <ProjectSection/>
        <MyRoomSection/>
        <WaitingSection/>


        <Roads/>
        <ambientLight/>
        <Stars/>
        
        <OrbitControls target={[9,5,15]} ref={ref} />
        <Arena controls={ref} lerping={lerping} setLerping={setLerping} />
        <pointLight intensity={0.5} position={[0,10, 0]}/>
        
      </Suspense>
    </Canvas>
  )
}

export default App

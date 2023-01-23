//Import needed files
import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import {OrbitControls, Stars} from '@react-three/drei';
import { useControls, button } from 'leva'
import { Vector3 } from 'three'
import * as THREE from 'three';

import '../Css/App.css'

//Import components
import Roads from '/src/Components/Roads';
import Loader from '/src/Components/Loader';
import annotations from '/annotations.json'
import annotations2 from '/annotations2.json'
import ExperienceSection from "/src/Components/ExperienceSection.jsx"
import ProjectSection from '/src/Components/ProjectSection.jsx';
import MyRoomSection from '/src/Components/MyRoomSection.jsx';
import WaitingSection from '/src/Components/WaitingSection';
import { useEffect } from 'react';


//Camera SetUp
let camera = new THREE.PerspectiveCamera(60)
let [x, y, z] = [10, 10, 0]
camera.position.set(x, y, z)

//Check if the user is on mobile
let annotationsFile
if(window.innerWidth < 470){
  camera.fov = 70
 }
function Arena({ controls, lerping, setLerping }) {
  

  useEffect(() =>{
    function handleResize() {
      

       console.log(window.innerWidth)
}

window.addEventListener('resize', handleResize)
  })


  const [to, setTo] = useState(new Vector3(0, 50, 10))
  const [target, setTarget] = useState(new Vector3(0, 1, 0))

  useControls('📍 Choose Position', () => {

    //Check if the user is on mobile
    let annotationsFile
    if(window.innerWidth < 470){
      annotationsFile = annotations2
     } else{
       annotationsFile = annotations
     }   
    
    const _buttons = annotationsFile.reduce(
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
    // { position: [10, 10, 0], fov: 60 }
    <Canvas 
    camera={camera}
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

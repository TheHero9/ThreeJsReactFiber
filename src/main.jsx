import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Canvas} from '@react-three/fiber'
import {Physics} from '@react-three/cannon'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  {/* <Canvas> */}
    <App />
  {/* </Canvas> */}
  </>
)

// ReactDOM.render(<App/>, document.getElementById("root"))
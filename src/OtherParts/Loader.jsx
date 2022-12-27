import { Html, useProgress } from '@react-three/drei'

//Loader scene
export default function Loader(){
  const {progress} = useProgress()
  return <Html center>
    <div id="divid">
      <h1 className="loader-text">{Math.round(progress)} % Loaded. Please wait!</h1>
      {/* <img class="loader-image" src="/src/Photos/backgroundImage2.png" alt="loading image"></img> */}
      {/* <h3>Hello </h3> */}
    </div>
    
    </Html>
}

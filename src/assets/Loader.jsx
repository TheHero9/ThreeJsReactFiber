import { Html, useProgress } from '@react-three/drei'


export default function Loader(){
  const {progress} = useProgress()
  return <Html center>
    {Math.round(progress)} % Loaded. Please wait!
    <h6>Hello</h6>
    </Html>
}

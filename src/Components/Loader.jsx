import { Html, useProgress } from '@react-three/drei'
import ReactLoading from 'react-loading'

//Loader scene
export default function Loader(){
  const {progress} = useProgress()
  return (
  <Html className='testwe' center>
      <div className={"divText"}>
        <h1 className="loader-text">{Math.round(progress)}% Loaded. Please wait!</h1>
      </div>

      <div className='divLoader'>
        <ReactLoading className='loader' type={"spin"} color={"blue"} width={175} height={175} />
      </div>

      <div className={'divTip'}>
          <h3> Tip: 1. Use landscape mode on mobile devices for the best experience. </h3> <br></br>
          <h3>2. Don't switch sections too fast, it may cause lag.</h3>
      </div>
    </Html>
  )
}

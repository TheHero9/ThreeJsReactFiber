import * as THREE from "three"
import {Text} from '@react-three/drei';


function TextMaker(props){
    return(
      <Text fontSize={props.fontSize} 
            position={[props.coords.x,props.coords.y,props.coords.z]}
            color={props.color} characters="abcdefghijklmnopqrstuvwxyz0123456789!">
                {props.message}
      </Text>
    )
  }

 function Texts(){
    return(
        <>
         <TextMaker color={"red"} fontSize={1} coords={{x:0, y:4.5, z:-4.9}} message={"HELLO"}/>
        </>
    )
}

function TextProjectsSection(){
  return(
      <>
       <TextMaker color={"white"} fontSize={0.1} coords={{x:-5.35, y:0.85, z:-7}} message={"Projects Section"}/>
      </>
  )
}


export {Texts, TextProjectsSection}
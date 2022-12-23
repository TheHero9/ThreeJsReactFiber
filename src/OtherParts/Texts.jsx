import * as THREE from "three"
import {Text} from '@react-three/drei';
import '../App.css'

function TextMaker(props){
    return(
      <Text 
            scale={props.scale}
            fontSize={props.fontSize}
            fillOpacity={props.fillOpacity}
            rotation={props.rotation}
            position={[props.coords.x,props.coords.y,props.coords.z]}
            color={props.color} 
            characters="abcdefghijklmnopqrstuvwxyz0123456789!">
                {props.message}
      </Text>
    )
  }

 function Texts(){
    return(
        <>
         {/* <TextMaker color={"red"} fontSize={1} coords={{x:0, y:4.5, z:-4.9}} message={"HELLO"}/> */}
        </>
    )
}

function TextProjectsSection(){
  return(
      <>
       <TextMaker  color={"red"}  fontSize={0.2} rotation={[0,0.4,0]} coords={{x:-5.0, y:2.29, z:-1.95}} message={"Projects Section"}/>
      </>
  )
}

function TextEducationSection(){
  return(
      <>
       <TextMaker color={"white"} fontSize={0.2} rotation={[0,0,0]} coords={{x:5.35, y:3.81, z:-2.6}} message={"Projects Section"}/>
      </>
  )
}


export {TextMaker, Texts, TextProjectsSection, TextEducationSection}
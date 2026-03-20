import { OrbitControls, PositionalAudio, useGLTF } from "@react-three/drei"
import { useState } from "react";


function Peace() {

    const [play, setPlay] = useState(false);

    
    // Loading the model GLB
    const { scene } = useGLTF("/models/greenhouse_park.glb");




    const clickHandler = () => {
        setPlay(!play);
    }
  return (
    <>
    <OrbitControls  />

    {/* Grupo que contém modelo + áudio*/}
    <group onClick={clickHandler} position={[0, 0, 0]} >
    {/** Modelo GLB */}
    <primitive 
    object={scene}
    
    />


    {play && <PositionalAudio
    url="./sound/peace.mp3"
    autoplay 
    loop
    distance={5}
    />}
    </group>


    

      
    
    </>
  )
}

export default Peace;

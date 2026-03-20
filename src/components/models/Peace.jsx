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
    
     <ambientLight intensity={0.5} />

    <directionalLight 
        position={[5, 10, 5]} 
        intensity={1}
        castShadow // Se quiser sombras
    />

    <pointLight position={[0, 5, 0]} intensity={0.5} />


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

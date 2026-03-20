import { OrbitControls, PositionalAudio } from "@react-three/drei"
import { useState } from "react";


function Peace() {

    const [play, setPlay] = useState(false);
    const clickHandler = () => {
        setPlay(!play);
    }
  return (
    <>
    <OrbitControls  />

    {play && <PositionalAudio
    url="./sound/peace.mp3"
    autoplay 
    loop
    distance={5}
    />}

      
    <mesh onClick={clickHandler}>
        <boxGeometry  args={[2, 2, 2]}  />
        <meshBasicMaterial color="purple" />
    </mesh>
      
    </>
  )
}

export default Peace

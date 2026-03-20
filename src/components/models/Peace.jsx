import { OrbitControls } from "@react-three/drei"
import { useState } from "react";


function Peace() {

    const [play, setPlay] = useState(false);
    const clickHandler = () => {
        setPlay(!play);
    }
  return (
    <>
    <OrbitControls  />

      
    <mesh onClick={clickHandler}>
        <boxGeometry  args={[2, 2, 2]}  />
        <meshBasicMaterial color="purple" />
    </mesh>
      
    </>
  )
}

export default Peace

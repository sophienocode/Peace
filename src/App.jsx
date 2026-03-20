import { Canvas } from "@react-three/fiber"
import Peace from "./components/models/Peace"



function App() {


  return (
    <>
   <div style={{ width: '100vw', height: '100vh'}} >
    <Canvas camera={{ position: [ 6, 5, 5], fov: 55 }} >
      
    
     <Peace /> 
   </Canvas>
   </div>
    
    </>
  )
}

export default App

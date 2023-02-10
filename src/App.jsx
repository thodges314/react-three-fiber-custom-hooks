import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import { Stats, OrbitControls } from "@react-three/drei";

const App = () => (
  <Canvas camera={{ position: [1, 2, 3] }}>
    <Box position={[0, 0.5, 0]} />
    <OrbitControls />
    <axesHelper args={[5]} />
    <gridHelper />
    <Stats />
  </Canvas>
);

export default App;

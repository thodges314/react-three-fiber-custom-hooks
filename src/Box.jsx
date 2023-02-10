import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import useKeyboard from "./useKeyboard";

const Box = (props) => {
  const ref = useRef();
  const keyMap = useKeyboard();
  // const [selected, setSelected] = useState(false);

  useFrame((_, delta) => {
    keyMap["KeyA"] && (ref.current.position.x -= 1 * delta);
    keyMap["KeyD"] && (ref.current.position.x += 1 * delta);
    keyMap["KeyW"] && (ref.current.position.z -= 1 * delta);
    keyMap["KeyS"] && (ref.current.position.z += 1 * delta);
  });

  return (
    <mesh ref={ref} {...props} onPointerDown={() => setSelected(!selected)}>
      <boxGeometry />
      <meshBasicMaterial color={0x00ff00} wireframe />
    </mesh>
  );
};

export default Box;

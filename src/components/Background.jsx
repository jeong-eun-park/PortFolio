import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { BackgroundColor } from "./BackgroundColor";
import { Cloud } from "./Cloud";

const Background = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 8], fov: 30 }}>
        {/* <color attach="background" args={["#ececec"]} /> */}
        <BackgroundColor />
        <Float speed={1}>
        <Cloud opacity={0.7} scale={[0.3, 0.3, 0.3]} position={[3, 1.5, -2]} />
        <Cloud opacity={0.9} scale={[0.3, 0.3, 0.4]} position={[2, -1, 1]} />

        <Cloud opacity={0.7} scale={[0.3, 0.3, 0.4]} position={[-4, -2, -2]} />
        <Cloud opacity={0.7} scale={[0.3, 0.3, 0.4]} position={[-7, -3, -15]} />
        <Cloud
          opacity={0.7}
          scale={[0.4, 0.4, 0.4]}
          position={[4, -0.2, -12]}
        />
        <Cloud opacity={0.7} scale={[0.5, 0.5, 0.5]} position={[4, 1, -53]} />
        </Float>
        <Cloud opacity={0.3} scale={[0.8, 0.8, 0.8]} position={[4, 1, -100]} />
      </Canvas>
    </>
  );
};

export default Background;
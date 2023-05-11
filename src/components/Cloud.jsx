import { useGLTF } from "@react-three/drei";

export function Cloud({opacity, ...props }) {
  const { nodes, materials } = useGLTF("/model/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        <meshStandardMaterial
          {...materials["lambert25G.001"]}
          opacity={opacity}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/model/model.glb");
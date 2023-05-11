import * as THREE from "three";
import { useMemo } from "react";
import { Text } from "@react-three/drei";

const TagCloud = ({ count = 4, radius = 20 }) => {

    const words = useMemo(() => {
    const coordinate = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;

    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++) {
        const vector = new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * j)
        );

        coordinate.push(vector);
      }

    const temp = Texts.map((text, index) => [coordinate[index], text]);
    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => (
    <Text
      key={index}
      position={pos}
      fontSize={1.8}
      color="#FFF"
    >{word}</Text>
  ));
};

export default TagCloud;

const Texts = [
  "",
  "trello",
  "HTML",
  "CSS",
  "Redux",
  "React-query",
  "JAVASCRIPT",
  "zustand",
  "SASS",
  "tailwind",
  "React",
  "styled-component",
  "git",
  "trello",
  "jest",
  "three.js",
  "typescript",
  "",
];

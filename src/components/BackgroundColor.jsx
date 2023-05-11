import * as THREE from "three";
import { Environment, Sphere} from "@react-three/drei";
import { Gradient, LayerMaterial } from "lamina";
// import { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useLayoutEffect } from "react";

const start = 0;
const end = -0.5;

export const BackgroundColor = () => {
  // const scroll = useScroll();
  // const tl = useRef();
  // const backgroundColors = useRef();
  // const gradientRef = useRef();
  // const gradientEnvRef = useRef();

  // useFrame(() => {
  //   if (scroll && scroll.offset) {
  //     tl.current.seek(scroll.offset * tl.current.duration());

  //     gradientRef.current.colorA = new THREE.Color(
  //       backgroundColors.current.colorA
  //     );
  //     gradientRef.current.colorB = new THREE.Color(
  //       backgroundColors.current.colorB
  //     );
  //     gradientEnvRef.current.colorA = new THREE.Color(
  //       backgroundColors.current.colorA
  //     );
  //     gradientEnvRef.current.colorB = new THREE.Color(
  //       backgroundColors.current.colorB
  //     );
  //   }
  // });

  // useLayoutEffect(() => {
  //   if (scroll) {
  //     tl.current = gsap.timeline();

  //     tl.current.to(backgroundColors.current, {
  //       duration: 1,
  //       colorA: "#6f35cc",
  //       colorB: "#FFF",
  //     });
  //     tl.current.to(backgroundColors.current, {
  //       duration: 1,
  //       colorA: "#424242",
  //       colorB: "#FFF",
  //     });
  //     tl.current.to(backgroundColors.current, {
  //       duration: 1,
  //       colorA: "#A2B0FF",
  //       colorB: "#ffad30",
  //     });
  //     tl.current.pause();
  //   }
  // }, []);

  return (
    <>
      <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#FFF"} side={THREE.BackSide}>
          <Gradient
            // ref={gradientRef}
            colorA="#A2B0FF"
            colorB="#FDE2E4"
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
      <Environment preset="sunset" />
      <Sphere
        scale={[100, 100, 100]}
        rotation-y={Math.PI / 2}
        //rotation-x={Math.PI}
      >
        <LayerMaterial
          color={"#FFF"}
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient
            //ref={gradientEnvRef}
            colorA="#A2B0FF"
            colorB="#FFF"
            axes={"y"}
            start={start}
            end={end}
          />
        </LayerMaterial>
      </Sphere>
    </>
  );
};

//<Gradient axes={"y"} colorA="#A2B0FF" colorB="#FFF" start={start} end={end} />
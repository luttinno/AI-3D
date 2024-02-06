import React, { useRef } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        // intensity={0.75}
        // ambient={0.35}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        // intensity={0.35}
        // ambient={0.75}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;

// Hero.jsx
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import Loader from "../components/Loader";
import { Astronaut } from "../components/Astronaut"; // This file must exist

// Simple spinning cube to verify scene loads
function TestCube() {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

// Optional camera rig to make it follow the mouse
function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 2, 1 + state.mouse.y / 2, 3],
      0.2,
      delta
    );
  });
}

const Hero = () => {
  return (
    <section style={{ width: "100vw", height: "100vh", backgroundColor: "black" }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <Suspense fallback={<Loader />}>
          {/* Start with this for testing */}
          {/* <TestCube /> */}

          {/* Then test your model */}
          <Astronaut scale={0.3} position={[0, -1.5, 0]} />

          <Rig />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Hero;


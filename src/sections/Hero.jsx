import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense } from "react";
import Loader from "../components/Loader";
import { Astronaut } from "../components/Astronaut";
import { easing } from "maath";

// For testing first
function TestCube() {
  const ref = React.useRef();
  useFrame((_, d) => (ref.current.rotation.y += d));
  return (
    <mesh ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

const Hero = () => (
  <section style={{ width: "100vw", height: "100vh", backgroundColor: "#000" }}>
    <Canvas camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<Loader />}>
        <TestCube />      {/* Step A: Should show cube */}
        {/* <Astronaut scale={0.3} position={[0, -1.5, 0]} />  Step B: after cube works */}
      </Suspense>
    </Canvas>
  </section>
);

export default Hero;

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Html, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function AstronautWrapper(props) {
  const { scene } = useGLTF("/models/tenhun_falling_spaceman_fanart.glb");
  return <primitive object={scene} {...props} />;
}

function Rig() {
  return useFrame((state) => {
    state.camera.position.lerp([0, 1, 3], 0.1);
    state.camera.lookAt(0, 0, 0);
  });
}

const Hero = () => {
  return (
    <section style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }} style={{ background: "#222" }}>
        {/* Add lights */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Show loading text until model is ready */}
        <Suspense fallback={<Html center>Loading...</Html>}>
          <Float>
            <AstronautWrapper scale={0.3} position={[0, 0, 0]} />
          </Float>
          <Rig />
        </Suspense>

        {/* Helpers to see orientation */}
        <axesHelper args={[5]} />
        <gridHelper args={[10, 10]} />

        {/* Mouse controls to move around */}
        <OrbitControls />
      </Canvas>
    </section>
  );
};

export default Hero;

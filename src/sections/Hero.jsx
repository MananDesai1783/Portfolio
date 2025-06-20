import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, useGLTF } from "@react-three/drei";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Suspense, useRef } from "react";
import Loader from "../components/Loader";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { easing } from "maath";

function RotatingBox(props) {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function AstronautWrapper(props) {
  // Make sure your model file is at /public/models/tenhun_falling_spaceman_fanart.glb
  const { scene } = useGLTF("/models/tenhun_falling_spaceman_fanart.glb");
  return <primitive object={scene} {...props} />;
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
    >
      <HeroText />
      <ParallaxBackground />

      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas camera={{ position: [0, 1, 3] }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={2} />
          <pointLight position={[0, 0, 2]} intensity={1} />

          <Suspense fallback={<Loader />}>
            {/* Uncomment below to test simple cube first */}
            {/* <RotatingBox position={[0, 0, 0]} /> */}

            {/* When your model file is ready, comment above and uncomment below */}
            <Float>
              <AstronautWrapper scale={0.35} position={[0, -1.5, 0]} />
            </Float>

            <Rig />
          </Suspense>
        </Canvas>
      </figure>

      {/* Social Icons with label */}
      <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-4 z-50 text-white">
        <p className="font-semibold text-lg">Connect with me</p>
        <div className="flex flex-row space-x-6">
          <a
            href="https://www.linkedin.com/in/mananpdesai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-blue-600 hover:text-blue-800 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/MananDesai1783"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-300 hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="/Manan_Desai_DA_Resume.pdf"
            download
            className="text-3xl text-green-500 hover:text-green-700 transition"
            aria-label="Download Resume"
          >
            <HiOutlineDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

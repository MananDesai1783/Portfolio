import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

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
          <ambientLight intensity={0.6} />
          <directionalLight position={[2, 2, 5]} intensity={1} />
          <Suspense fallback={<Loader />}>
            <Float>
              {/* Slightly adjusted position for visibility */}
              <Astronaut scale={0.35} position={[0.8, -1.5, 0]} />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>

      {/* Social Icons - Bottom Right */}
      <div className="fixed bottom-8 right-8 z-50 text-right">
        <h2 className="text-white text-lg font-semibold mb-3">
          Connect with Me
        </h2>
        <div className="flex justify-end items-center space-x-6">
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
            aria-label="GitHub"
            className="relative group text-3xl"
          >
            <div className="absolute inset-0 rounded-full bg-gray-800 opacity-90 group-hover:opacity-100 transition"></div>
            <FaGithub className="relative text-gray-200 group-hover:text-white transition" />
          </a>

          <a
            href="/Manan_Desai_DA_Resume.pdf"
            download
            className="text-3xl text-green-600 hover:text-green-800 transition"
            aria-label="Download Resume"
          >
            <HiOutlineDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

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

export default Hero;

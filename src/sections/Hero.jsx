import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

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
          <Suspense fallback={<Loader />}>
            <Float>
              <Astronaut
                scale={isMobile && 0.23}
                position={isMobile && [0, -1.5, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>

      {/* Social Icons & Resume Button - Bottom Right */}
      <div className="fixed bottom-8 right-8 flex flex-col items-center space-y-6 z-50">
        <a
          href="https://www.linkedin.com/in/mananpdesai/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-blue-600 hover:text-blue-800 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MananDesai1783" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-900 hover:text-gray-700 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="/Manan_Desai_DA_Resume.pdf" // Replace with your resume file path
          download
          className="text-4xl text-green-600 hover:text-green-800 transition"
          aria-label="Download Resume"
        >
          <HiOutlineDownload />
        </a>
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



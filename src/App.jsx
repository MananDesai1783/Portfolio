import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experiences from "./sections/Experiences";  // Experience first
import Projects from "./sections/Projects";        // then Projects
import Education from "./sections/Education";      // then Education
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <About />
      <Experiences />     {/* Experience first */}
      <Projects />        {/* Projects next */}
      <Education />       {/* Education added here */}
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;


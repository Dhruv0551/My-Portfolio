import React from "react";
import Theme from "./theme";
import { Contact, Stars } from "lucide-react";
import Starsbg from "./Starsbg";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import ContactMe from "./ContactMe";

function Main() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme */}
      <Theme />
      {/* Background */}
      <Starsbg />

      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactMe />

      {/* footer */}
    </div>
  );
}

export default Main;

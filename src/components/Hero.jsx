import { ArrowDown } from "lucide-react";
import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px=4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight cursor-pointer">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Dhruv
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {""}
              Kapure
            </span>
          </h1>
          <p className="text-lg md-text:xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            A passionate software engineer with a love for building innovative
            solutions. I specialize in creating efficient and scalable
            applications that make a difference.
          </p>

          <div>
            <a
              href="#projects"
              className="mt-4 cosmic-button opacity-0 animate-fade-in-delay-4"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  );
}

export default Hero;

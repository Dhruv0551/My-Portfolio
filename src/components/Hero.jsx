import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px=4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <span>Hi, I'm</span>
          <span> Dhruv</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

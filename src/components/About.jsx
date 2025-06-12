import React from "react";

function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 ">
            <h3 className="text-2xl font-semibold">
              Passsionate Web Developer & ml enthusiast
            </h3>
            <p className="text-muted-foreground">
              Seeking an opportunity to put my Skills to some use & Solve real
              world problems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

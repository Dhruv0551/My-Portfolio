import { Bot, Building, Building2, Code, School, User } from "lucide-react";
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
            <h3 className="text-3xl font-semibold">
              Passionate Web Developer & ml enthusiast
            </h3>
            <p className="text-muted-foreground text-xl">
              I'm seeking opportunities to apply my technical and creative
              skills to solve real-world problems. With a solid development
              foundation and a passion for meaningful solutions, I aim to grow
              as a developer by contributing to impactful and innovative
              projects.
            </p>

            <div>
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 ">
            <div className="gradient-border p-6 card-hover bg-purple-400/10 backdrop-blur-3xl">
              <div className="flex flex-row items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Code className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col justify-start text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites with modern frameworks
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-purple-400/10 backdrop-blur-3xl">
              <div className="flex flex-row items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bot className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col justify-start text-left">
                  <h4 className="font-semibold text-lg">Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Machine learning enthusiast eager to build intelligent
                    solutions and solve real-world problems.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover bg-purple-400/10 backdrop-blur-3xl">
              <div className="flex flex-row items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <School className="text-primary h-6 w-6" />
                </div>
                <div className="flex flex-col justify-start text-left">
                  <h4 className="font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    I'm currently a Computer Science Student at GLS University
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

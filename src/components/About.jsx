import { Building, Building2, Code, School, User } from "lucide-react";
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
              Passionate Web Developer & ml enthusiast
            </h3>
            <p className="text-muted-foreground">
              I’m actively seeking an opportunity where I can apply my technical
              and creative skills to solve real-world problems. With a strong
              foundation in development and a passion for building meaningful
              solutions, I’m eager to work on impactful projects that not only
              challenge me but also contribute to something greater. My goal is
              to grow as a developer while delivering value through thoughtful,
              practical, and innovative problem-solving.
            </p>

            <div>
              <a href="#contact" className="cosmic-button">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 ">
            <div className="gradient-border p-6 card-hover bg-purple-400/10 backdrop-blur-3xl">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="text-primary h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover backdrop-blur-3xl bg-purple-400/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="text-primary h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover backdrop-blur-3xl bg-purple-400/10">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <School className="text-primary h-6 w-6" />
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

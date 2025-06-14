import React from "react";
import n from "../assets/projects/netflix.png";
import {
  ChevronRight,
  ExternalLink,
  Github,
  Link,
  Sparkle,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Netflix-Clone",
    description:
      "Developed a fully responsive Netflix clone with React and Tailwind.",
    image: "../assets/projects/netflix.png",
    tags: ["React", "Tailwind"],
    github: "https://github.com/Dhruv0551/Netfix-clone",
    DemoUrl: "https://netfix-clone-phi.vercel.app",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl mb-4 text-center font-bold">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-xl">
          Here are some of My Projects that I've worked on :-)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={n}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border-2 border-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.DemoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Link size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      target="_blank"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Dhruv0551"
            target="_blank"
            className="cosmic-button w-fit flex items-center justify-center mx-auto gap-1"
          >
            Checkout My GitHub
            <ChevronRight />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

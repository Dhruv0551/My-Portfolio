import React from "react";
import { redirect } from "react-router-dom";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Javascript", category: "frontend" },
  { name: "JQuery", category: "frontend" },
  { name: "XML", category: "frontend" },
  { name: "React JS", category: "frontend" },
  { name: "C++", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Node Js", category: "backend" },
  { name: "Express Js", category: "backend" },
  { name: "Mysql", category: "backend" },
  { name: "Git/GitHub", category: "tools" },
  { name: "Vs Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "Vercel", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

function Skills() {
  const [activeCat, setActiveCat] = React.useState("all");
  const fillteredSkills = skills.filter(
    (skill) => activeCat === "all" || skill.category === activeCat
  );

  return (
    <section id="skills" className="py-24 px-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCat(category);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCat === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fillteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-purple-400/10 backdrop-blur-3xl p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="mb-4 text-left">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50  rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

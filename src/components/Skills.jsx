import React from "react";

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
  { name: "Git/GitHub", category: "tools" },
];

function Skills() {
  return (
    <section id="skills" className="py-24 px-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span>Skills</span>
        </h2>
      </div>
    </section>
  );
}

export default Skills;

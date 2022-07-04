import React from "react";
import Skill from "../skill/Skill";
import Projects from "../projects/Projects";
import "./description.css";
export default function Description() {
  return (
    <div className="description">
      <Skill />
      <Projects />
    </div>
  );
}

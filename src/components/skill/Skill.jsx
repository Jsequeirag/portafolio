import { Fragment, React } from "react";
import "./skill.css";

export default function Skill() {
  return (
    <Fragment>
      <section id="skills" class="skills-landing">
        {" "}
        <div className="blur-bg"></div>
        <div class="intro-text glassmorphism">
          <h2>Skill</h2>
          <p>
            As a full-stack developer, I deliver robust and scalable solutions,
            proficient in both frontend and backend technologies. Discover more
            about my technical stack below.
          </p>
        </div>
        <div class="skills-details">
          <div className="skill glassmorphism">
            <h3>Backend</h3>
            <p>
              I build high-quality backends adhering to best practices and
              design patterns like MVC and RESTful APIs. My expertise includes
              Node.js, Express, and .NET, enabling me to deliver scalable and
              efficient solutions.
            </p>
          </div>

          <div class="skill   glassmorphism">
            <h3>Frontend</h3>
            <p>
               Proficient in frontend development, I utilize React and
              cutting-edge frameworks to create intuitive and responsive user
              experiences. I prioritize building applications that are easy to
              use and simple to maintain
            </p>
          </div>

          <div class="skill  glassmorphism">
            <h3>Design Patterns and Best Practices</h3>
            <p>
              Applying design patterns like the Repository Pattern is crucial
              for crafting clean and efficient code. I also adhere to best
              development practices to ensure every project is scalable and
              easily maintainable.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

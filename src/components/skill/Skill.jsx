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
            Como desarrollador full-stack, soy capaz de crear soluciones
            robustas y escalables con una sólida base en frontend y backend.
            Aquí te cuento un poco más sobre cada tecnología que manejo.
          </p>
        </div>
        <div class="skills-details">
          <div className="skill glassmorphism">
            <h3>Tecnologías de Backend</h3>
            <p>
              Soy capaz de crear backends con estándares de calidad, utilizando
              buenas prácticas y patrones de diseño como MVC y RESTful APIs.
              Trabajo con Node.js, Express y .NET para construir soluciones
              escalables y eficientes.
            </p>
          </div>

          <div class="skill   glassmorphism">
            <h3>Tecnologías de Frontend</h3>
            <p>
              En el frontend, tengo experiencia con React y frameworks modernos
              para construir interfaces interactivas y responsivas. Me aseguro
              de que cada aplicación sea fácil de usar y mantener.
            </p>
          </div>

          <div class="skill  glassmorphism">
            <h3>Patrones de Diseño y Buenas Prácticas</h3>
            <p>
              Aplicar patrones de diseño como el patrón Singleton o Factory es
              fundamental para crear código limpio y eficiente. Además, sigo
              buenas prácticas de desarrollo para asegurarme de que cada
              proyecto sea escalable y fácil de mantener.
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

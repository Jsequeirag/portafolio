import React, { useState, useEffect } from "react";
import "./projects.css"; // Asegúrate de que este archivo CSS contenga los estilos para el video y las tarjetas.
// Importa Font Awesome si aún no lo has hecho globalmente (ej. en index.js o App.js)
// import '@fortawesome/fontawesome-free/css/all.min.css';

const testProjects = [
  {
    _id: "Portal",
    category: "Desarrollos",
    title: "Portal de Personal",
    description:
      "Portal de RRHH: Gestión de solicitudes y vacaciones con aprobación de jefe. Agiliza procesos y mejora la organización.",
    photos: [
      "projects/mantenimientos/portal-personal/portal1.png",
      "projects/mantenimientos/portal-personal/portal2.png",
      "projects/mantenimientos/portal-personal/portal3.png",
    ],
    tags: ["React", ".NET", "MS-SQL"],
    link: null,
    github: null,
  },
  {
    _id: "uber-direct",
    category: "Desarrollos",
    title: "Desarrolo del FE para Integración Uber-direct",
    description:
      "Encargado del desarrollo del FE para la integración de uber-direct con cadenas de supermercados(AMPM y Superxtra)",
    photos: [
      "projects/mantenimientos/uber-direct/uber1.png",
      "projects/mantenimientos/uber-direct/uber2.png",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: null,
    github: null,
  },
  {
    _id: "2",
    category: "Mantenimiento",
    title:
      "Plataforma Integral de Gestión para Empleados de Publicis Resources",
    description:
      "Plataforma de Publicis Resources que gestiona horas extras, beneficios y declaraciones de empleados. Optimiza la administración de personal.",
    photos: [
      "projects/mantenimientos/go-office/go-office-login.png",
      "projects/mantenimientos/go-office/go-office-dashboard.png",
      "projects/mantenimientos/go-office/go-office-benefits.png",
    ],
    tags: [".NET", "MVC", "Razor", "MS-SQL"],
    link: null,
    github: null,
  },
  {
    _id: "nexat",
    category: "Mantenimiento",
    title: "Sistema para el envio de facturas Electronicas",
    description:
      "Sistema de facturación electrónica integrado con Go-Socket. Automatiza y asegura el envío de facturas fiscales.",
    photos: [
      "projects/mantenimientos/nexat/nexat1.png",
      "projects/mantenimientos/nexat/nexat2.png",
    ],
    tags: [".NET", "MVC", "Razor", "MS-SQL"],
    link: null,
    github: null,
  },
  /* {
    _id: "3",
    category: "Proyectos Propios",
    title: "Herramienta de Automatización Python",
    description:
      "Un script de Python para automatizar la organización de archivos y tareas repetitivas usando Tkinter para la interfaz.",
    photos: [
      "https://via.placeholder.com/400x250/9b59b6/ffffff?text=Python+Script+UI",
      "https://via.placeholder.com/400x250/1abc9c/ffffff?text=Código+Python",
    ],
    tags: ["Python", "Tkinter", "Automatización"],
    link: null,
    github: "https://github.com/mi-usuario/auto-script",
    replit: "https://replit.com/@mi-usuario/AutoScript",
  },*/
];

export default function Projects() {
  const [allProjects] = useState(testProjects); // Renombrado para claridad
  const [filteredProjects, setFilteredProjects] = useState(testProjects);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  // Inicializar currentImageIndex para cada proyecto
  useEffect(() => {
    const initialIndexes = {};
    allProjects.forEach((project) => {
      initialIndexes[project._id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  }, [allProjects]);

  const filterProjectsByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "Todos") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(
        allProjects.filter((project) => project.category === category)
      );
    }
    // Resetear índices de imágenes al cambiar categoría para evitar errores
    const initialIndexes = {};
    allProjects.forEach((project) => {
      initialIndexes[project._id] = 0;
    });
    setCurrentImageIndex(initialIndexes);
  };

  const categories = ["Todos", ...new Set(allProjects.map((p) => p.category))]; // Dinámico

  const handleNextImage = (projectId) => {
    const project = allProjects.find((p) => p._id === projectId);
    if (!project || !project.photos || project.photos.length === 0) return;

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % project.photos.length,
    }));
  };

  const handlePrevImage = (projectId) => {
    const project = allProjects.find((p) => p._id === projectId);
    if (!project || !project.photos || project.photos.length === 0) return;

    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]:
        (prev[projectId] - 1 + project.photos.length) % project.photos.length,
    }));
  };

  return (
    <section className="projects-section" id="projects-section">
      {/*<video autoPlay loop muted playsInline id="background-video">
        <source
          src="./freepik__smooth-zoomin-a-central-microchip-surrounded-by-co__90560.mp4" // Asegúrate que esta ruta sea correcta desde tu carpeta public
          type="video/mp4"
        />
        Tu navegador no soporta la etiqueta de video.
      </video>*/}

      <div className="projects-overlay-content">
        <h2>Mis Proyectos</h2>
        <div className="category-filters  glassmorphism-project-static ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterProjectsByCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category === "Todos" ? (
                <>
                  <i class="fa-solid fa-grip-vertical mx-1"></i>
                  {category}
                </>
              ) : category === "Desarrollos" ? (
                <>
                  <i class="fa-solid fa-code mx-1"></i>
                  {category}
                </>
              ) : category === "Mantenimiento" ? (
                <>
                  <i class="fa-solid fa-gear mx-1"></i>
                  {category}
                </>
              ) : (
                <>
                  <i class="fa-solid fa-brain mx-1"></i>

                  {category}
                </>
              )}
            </button>
          ))}
        </div>

        <div className="project-cards-grid">
          {filteredProjects.map((project) => (
            <div className="project-card glassmorphism" key={project._id}>
              {/* Imagen fija en la parte superior */}
              <div className="project-card__image-container">
                {project.photos && project.photos.length > 0 ? (
                  <>
                    <img
                      src={project.photos[currentImageIndex[project._id] || 0]}
                      alt={project.title}
                      className="project-card__image"
                    />
                    {project.photos.length > 1 && (
                      <>
                        <button
                          onClick={() => handlePrevImage(project._id)}
                          className="prev-image"
                        >
                          <i className="fas fa-chevron-left"></i>
                        </button>
                        <button
                          onClick={() => handleNextImage(project._id)}
                          className="next-image"
                        >
                          <i className="fas fa-chevron-right"></i>
                        </button>
                        <div className="image-indicator">
                          {(currentImageIndex[project._id] || 0) + 1} /{" "}
                          {project.photos.length}
                        </div>
                      </>
                    )}
                  </>
                ) : (
                  <div className="project-card__image-placeholder">
                    <i className="fas fa-project-diagram fa-3x"></i>
                  </div>
                )}
              </div>

              {/* Contenido scrolleable */}
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>

                {project.tags && project.tags.length > 0 && (
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="project-card__actions">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button"
                    >
                      Ver Demo <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button github-button"
                    >
                      <i className="fab fa-github"></i> Código
                    </a>
                  )}
                  {project.replit && (
                    <a
                      href={project.replit}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button replit-button"
                    >
                      <i className="fas fa-code"></i> Replit
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";

const createShapes = () => {
  const container = document.querySelector(".info-container");
  const numberOfShapes = 7;

  const shapeClasses = [
    "shape-circle",
    "shape-square",
    "shape-triangle",
    "shape-diamond",
  ];

  for (let i = 0; i < numberOfShapes; i++) {
    const shape = document.createElement("div");
    const randomShape =
      shapeClasses[Math.floor(Math.random() * shapeClasses.length)];
    shape.classList.add("shape", randomShape);

    // Tamaños personalizados para cada forma
    let size = Math.random() * 40 + 10;

    if (randomShape === "shape-triangle") {
      // No se usa width/height normal, los triángulos se hacen con borders
      size = Math.random() * 20 + 10;
      shape.style.borderLeftWidth = `${size}px`;
      shape.style.borderRightWidth = `${size}px`;
      shape.style.borderBottomWidth = `${size * 2}px`;
    } else {
      shape.style.width = `${size}px`;
      shape.style.height = `${size}px`;
    }

    const xStart = Math.random() * container.clientWidth;
    const yStart = Math.random() * container.clientHeight;
    shape.style.left = `${xStart}px`;
    shape.style.top = `${yStart}px`;

    const moveX = (Math.random() - 0.5) * 200 + "px";
    const moveY = (Math.random() - 0.5) * 200 + "px";
    shape.style.setProperty("--x", moveX);
    shape.style.setProperty("--y", moveY);

    const duration = Math.random() * 20 + 20;
    shape.style.animationDuration = `${duration}s, ${Math.random() * 20 + 20}s`;
    shape.style.animationDelay = `${Math.random() * 10}s`;

    container.appendChild(shape);
  }
};

const AnimatedBackground = () => {
  useEffect(() => {
    setTimeout(() => {
      createShapes();
    }, 2000);
  }, []);

  return null;
};

export default AnimatedBackground;

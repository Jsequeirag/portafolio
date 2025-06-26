import TypeIt from "typeit";
export function shrinkNav() {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("Navigator").style = document.getElementById(
        "Navigator"
      ).style =
        "background-color: transparent !important; box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.75)!important;backdrop-filter: blur(0px) !important;color:";
    } else {
      document.getElementById("Navigator").style =
        "box-shadow: 1px -5px 22px 0px rgba(0,0,0,0.75) !important; backdrop-filter: blur(2px) !important;";
    }
  }
}
export function reload() {
  window.onload = function () {
    window.scrollTo(20, 0);
  };
}

export function typeitMyName() {
  new TypeIt("#typeit-name", {
    strings: [" José Luis Sequeira"],
    speed: 55,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
    },
  }).go();
}
export function typeitMyOcupation() {
  new TypeIt("#typeit-ocupation", {
    strings: ["Desarrollador Full Stack"],
    speed: 60,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
    },
  }).go();
}

export function typeitMyOcupationSt() {
  new TypeIt("#typeit-ocupation-st", {
    strings: [
      "Specialized in <i class='fab fa-react' style='color: #61DBFB;'></i> React, <i class='fab fa-node-js' style='color: #68A063;'></i> Node.js y <i class='fas fa-code' style='color: #512BD4;'></i> .NET",
    ],
    speed: 60,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
    },
  }).go();
}

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
    strings: ["Web developer"],
    speed: 60,
    waitUntilVisible: true,
    afterComplete: function (instance) {
      instance.destroy();
    },
  }).go();
}

export function shrinkNav() {
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("headerNav").style = document.getElementById(
        "headerNav"
      ).style =
        "box-shadow: 1px -5px 22px 0px rgba(0,0,0,0.75);   backdrop-filter: blur(2px);!important;";
    } else {
      document.getElementById("headerNav").style =
        "background-color: transparent; !important";
    }
  }
}

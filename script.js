// var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var toggle = document.querySelector("#myCheck");
// var mode = "dark";

toggle.addEventListener("click", function () {
  if (toggle.checked === true) {
    container.classList.remove("dark");
    container.classList.add("light");
  }
  else {

    container.classList.remove("light");
    container.classList.add("dark");
  }
});



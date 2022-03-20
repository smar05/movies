let body = document.querySelector("body");
let h1 = document.querySelector("h1");
let logoDH = document.querySelector(".logoDH");

window.addEventListener("load", () => {
  let activarModoOscuro = confirm("¿Desea modo oscuro?");

  if (activarModoOscuro) {
    modoOscuro();
  }

  logoDH.addEventListener("mouseover", () => {
    modoOscuro();
  });
});

function modoOscuro() {
  body.style.backgroundColor = "#7f7f7f";
  body.classList.toggle("fondoMoviesList");

  h1.innerHTML = "LISTADO DE PELÍCULAS";
  h1.style.color = "white";
  h1.style.backgroundColor = "teal";
  h1.style.margin = "20px";
}

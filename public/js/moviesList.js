let body = document.querySelector("body");
let h1 = document.querySelector("h1");

let activarModoOscuro = confirm("¿Desea modo oscuro?");

if (activarModoOscuro) {
  body.style.backgroundColor = "#7f7f7f";
  body.classList.toggle("fondoMoviesList");

  h1.innerHTML = "LISTADO DE PELÍCULAS";
  h1.style.color = "white";
  h1.style.backgroundColor = "teal";
  h1.style.margin = "20px";
}

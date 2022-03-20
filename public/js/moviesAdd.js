let h1 = document.querySelector("h1");
let formulario = document.querySelector(".formulario");
let article = document.querySelector("article");
let titulo = document.querySelector("#title");
let contadorSecreto = 0;

window.addEventListener("load", () => {
  h1.innerHTML = "AGREGAR PELÍCULAS";
  h1.classList.toggle("titulo");

  article.classList.toggle("fondoTransparente");
  formulario.classList.toggle("fondoCRUD");

  titulo.addEventListener("keypress", (e) => {
    let key = e.key;
    funcionSecreta(key);
  });
});

function funcionSecreta(key) {
  switch (key) {
    case "s":
      if (contadorSecreto == 0) {
        contadorSecreto = 1;
      }
      break;

    case "e":
      if (contadorSecreto == 1) {
        contadorSecreto = 2;
      } else if (contadorSecreto == 4) {
        contadorSecreto = 5;
      }
      break;

    case "c":
      if (contadorSecreto == 2) {
        contadorSecreto = 3;
      }
      break;

    case "r":
      if (contadorSecreto == 3) {
        contadorSecreto = 4;
      }
      break;

    case "t":
      if (contadorSecreto == 5) {
        contadorSecreto = 6;
      }
      break;

    case "o":
      if (contadorSecreto == 6) {
        alert("SECRETO MAGICO");
      }
      break;

    default:
      contadorSecreto = 0;
      break;
  }
}

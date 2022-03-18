let h1 = document.querySelector("h1");
let formulario = document.querySelector(".formulario");
let article = document.querySelector("article");

h1.innerHTML = "AGREGAR PELÍCULAS";
h1.classList.toggle("titulo");

article.classList.toggle("fondoTransparente");
formulario.classList.toggle("fondoCRUD");

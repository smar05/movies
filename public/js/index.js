window.addEventListener("load", () => {
  let body = document.querySelector("body");
  let main = document.querySelector("main");
  let h2Subtitulo = document.querySelector("#subtituloBienvenido");
  let a = document.querySelector("a");
  let listp = document.querySelectorAll("p");
  let logoDH = document.querySelector(".logoDH");
  let menu = document.querySelector("#menu");

  let nombre = prompt("Ingrese su nombre");

  if (nombre) {
    h2Subtitulo.innerHTML += ` ${nombre}`;
  } else {
    h2Subtitulo.innerHTML += ` invitado`;
  }

  h2Subtitulo.style.textTransform = "uppercase";

  a.style.color = "#E51B3E";

  let colocarFondo = confirm("¿Desea colocar un fondo de pantalla?");

  if (colocarFondo) {
    body.classList.toggle("fondo");
  }

  for (let i = 0; i < listp.length; i++) {
    if (i % 2 == 0) {
      listp[i].classList.toggle("destacadoPar");
    } else {
      listp[i].classList.toggle("destacadoImpar");
    }
  }

  main.style.display = "block";

  logoDH.addEventListener("click", () => {
    menu.classList.toggle("mostrar");
  });

  menu.addEventListener("mouseout", () => {
    menu.classList.remove("mostrar");
  });
});

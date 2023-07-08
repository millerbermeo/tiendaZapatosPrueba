window.onload = inicio;

let menos = document.querySelector(".menos");
let mas = document.querySelector(".mas");
let cantidad = document.querySelector(".cantidad");
let presio = document.querySelector(".presio");
document.querySelector('.img-1').onclick=caruselUno;
document.querySelector('.img-2').onclick=caruselDos;
document.querySelector('.img-3').onclick=caruselTres;
document.querySelector('.img-4').onclick=caruselCuatro;


function caruselUno() {
  // document.querySelector(".img-1").classList.toggle("slide-12");
  document.querySelector(".img-cambiar").classList.toggle("img-1");
  caruselUno()
  caruselDos()
  caruselTres()
  caruselCuatro()
}

function caruselDos() {
// document.querySelector(".img-2").classList.toggle("slide-12");
document.querySelector(".img-cambiar").classList.toggle("img-2");

caruselUno()
caruselDos()
caruselTres()
caruselCuatro()
}

function caruselTres() {
// document.querySelector(".img-3").classList.toggle("slide-12");
document.querySelector(".img-cambiar").classList.toggle("img-3");

caruselUno()
caruselDos()
caruselTres()
caruselCuatro()
}

function caruselCuatro() {
document.querySelector(".img-cambiar").classList.toggle("img-4");

caruselUno()
caruselDos()
caruselTres()
caruselCuatro()
}


function inicio() {
  let btn = document.querySelector(".desplegar");
  let btn_2 = document.querySelector(".desplegar-2");
  let menu = document.querySelector(".nav-menu");
  let opacidad = document.querySelector(".section");

  btn.addEventListener("click", () => {
    if (menu.classList.contains("noactive")) {
      menu.classList.add("active");
      menu.classList.remove("noactive");
    }
  });

  btn_2.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menu.classList.add("noactive");
      menu.classList.remove("active");
      opacidad.classList.remove("opacidad");
    }
  });

  let car = document.querySelector("#carrito");

  car.addEventListener("click", () => {
    document.querySelector(".ventana").classList.toggle("mostrarr");
  });
}

window.addEventListener("DOMContentLoaded", (event) => {
  let total;
  presio = 125;

  function aumentar() {
    cantidad.value++;

    total = presio * cantidad.value;

    document.querySelector("#valor").innerHTML = `$${total}.00`;
  }

  function dismunir() {
    if (cantidad.value > 0) {
      cantidad.value--;
      total = total - 125;
      document.querySelector("#valor").innerHTML = `$${total}.00`;
    }
  }

  menos.addEventListener("click", dismunir);
  mas.addEventListener("click", aumentar);
});

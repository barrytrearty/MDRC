"strict mode";

const image = document.getElementsByClassName("img-anim")[0];
const nav1 = document.getElementById("nav1");
const nav2 = document.getElementById("nav2");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");

const displayJumbotron = function () {
  image.style.opacity = 1;
  nav1.style.opacity = 1;
  nav2.style.opacity = 1;
  nav3.style.opacity = 1;
  nav4.style.opacity = 1;
};

displayJumbotron();

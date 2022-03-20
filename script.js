//Testominial
var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");
btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-830px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1650px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

// DARK MODE
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark");
}

// TESTIMONIAL SECTION
var btn = document.getElementsByClassName("btn");
var slide = document.getElementById("slide");
btn[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[1].onclick = function () {
  slide.style.transform = "translateX(-830px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};
btn[2].onclick = function () {
  slide.style.transform = "translateX(-1650px)";
  for (i = 0; i < 3; i++) {
    btn[i].classList.remove("active");
  }
  this.classList.add("active");
};

const navigation_box = document.querySelector("#navigation_box");
const menuToggle = document.querySelector("#menuToggle");
const nav_links = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
  navigation_box.classList.toggle("slidein_active");
  transform_hamburger();
});
nav_links.forEach((el) => {
  el.addEventListener("click", () => {
    navigation_box.classList.toggle("slidein_active");
    transform_hamburger();
  });
});

function transform_hamburger() {
  let first = document.querySelector("#first_span");
  let second = document.querySelector("#second_span");
  let third = document.querySelector("#third_span");

  first.classList.toggle("first_span_active");
  second.classList.toggle("second_span_active");
  third.classList.toggle("third_span_active");
}


const panels = document.querySelectorAll(".panel");

panels.forEach(elem => elem.addEventListener("click", toggleOpen));
panels.forEach(elem =>
  elem.addEventListener("transitionend", toggleOpenActive)
);

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleOpenActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

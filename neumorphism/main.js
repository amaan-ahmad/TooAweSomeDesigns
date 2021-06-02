const switchControllers = document.querySelectorAll(".switch");

function switchToggle() {
  this.classList.toggle("on");
}

switchControllers.forEach((control) => {
  control.addEventListener("click", switchToggle);
});

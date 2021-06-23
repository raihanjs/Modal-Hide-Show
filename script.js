"use strict";
// Selecting Document Elements
const modalOpenBtn = document.querySelectorAll(".show-modal");
const modalCloseBtn = document.querySelector(".close-modal");
const modalbody = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
// Show Modal Function
const showmodal = function () {
  modalbody.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// Hide Modal Function
const hidemodal = function () {
  modalbody.classList.add("hidden");
  overlay.classList.add("hidden");
};
// Selecting modal open button individually
for (let i = 0; i < modalOpenBtn.length; i++)
  modalOpenBtn[i].addEventListener("click", showmodal);
// Remove Modal
modalCloseBtn.addEventListener("click", hidemodal);
overlay.addEventListener("click", hidemodal);
// Remove Modal By keypress
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalbody.classList.contains("hide")) {
    hidemodal();
  }
});

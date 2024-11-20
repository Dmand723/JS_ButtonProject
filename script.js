const clicks = document.getElementById("clicks");
const button = document.querySelector(".largeRedButton");
button.addEventListener("mousedown", btnDown);
button.addEventListener("mouseup", btnUp);
let curclicks = 0;
let intervalId;
function btnPressed() {
  addClick();
  randomHeaderColor();
}
function randomHeaderColor() {
  let randomBGColor = `rgb(${Math.floor(Math.random() * (255 - 0)) + 0},${
    Math.floor(Math.random() * (255 - 0)) + 0
  },${Math.floor(Math.random() * (255 - 0)) + 0})`;
  document.querySelector("header").style.backgroundColor = randomBGColor;
}
function addClick() {
  curclicks++;
  clicks.textContent = `${curclicks}`;
}
function btnDown() {
  intervalId = setInterval(btnPressed, 100);
}
function btnUp() {
  clearInterval(intervalId);
}
const rangeRed = document.getElementById("rangeRed");
const rangeBlue = document.getElementById("rangeBlue");
const rangeGreen = document.getElementById("rangeGreen");

let red = rangeRed.value;
let green = rangeGreen.value;
let blue = rangeBlue.value;
let curRGB = `rgb(${red},${green},${blue})`;
function onChangeRed() {
  red = rangeRed.value;
  updateBGColor();
}
function onChangeGreen() {
  green = rangeGreen.value;
  updateBGColor();
}
function onChangeBlue() {
  blue = rangeBlue.value;
  updateBGColor();
}
function updateBGColor() {
  curRGB = `rgb(${red},${green},${blue})`;
  document.querySelector("body").style.backgroundColor = curRGB;
  document.querySelector("#colorOutput").textContent = curRGB;
}

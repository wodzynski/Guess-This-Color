var rSelectors = document.querySelectorAll(".red");
var gSelectors = document.querySelectorAll(".green");
var bSelectors = document.querySelectorAll(".blue");

var reds = [];
var greens = [];
var blues = [];

getReds();
getBlues();
getGreens();

for (let i = 0; i < 3; i++) {
  rSelectors[i].style.backgroundColor = reds[i];
  gSelectors[i].style.backgroundColor = greens[i];
  bSelectors[i].style.backgroundColor = blues[i];
}

function getReds() {
  for (let i = 0; i < 3; i++) {
    reds[i] = "rgb(" + rgbValue() + ", 0, 0)";
  }
}

function getGreens() {
  for (let i = 0; i < 3; i++) {
    greens[i] = "rgb(0, " + rgbValue() + ", 0)";
  }
}

function getBlues() {
  for (let i = 0; i < 3; i++) {
    blues[i] = "rgb(0, 0, " + rgbValue() + ")";
  }
}

function oneFromThree() {
  return Math.floor(Math.random() * 3);
}

function rgbValue() {
  return Math.floor(Math.random() * 256);
}

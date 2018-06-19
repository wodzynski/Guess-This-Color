var redSelectors = document.querySelectorAll(".red");
var greenSelectors = document.querySelectorAll(".green");
var blueSelectors = document.querySelectorAll(".blue");

var reds = [];
var greens = [];
var blues = [];

getReds();
getBlues();
getGreens();

for (let i = 0; i < redSelectors.length; i++) {
  redSelectors[i].style.backgroundColor = reds[i];
  greenSelectors[i].style.backgroundColor = greens[i];
  blueSelectors[i].style.backgroundColor = blues[i];
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

function rgbValue() {
  return Math.floor(Math.random() * 256);
}

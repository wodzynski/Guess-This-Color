var redCol = document.querySelectorAll(".red");
var greenCol = document.querySelectorAll(".green");
var blueCol = document.querySelectorAll(".blue");
var selectors = [];
selectors.push(redCol, greenCol, blueCol);
var colors = [];
var randReds = [];
var randGreens = [];
var randBlues = [];
var solution = [];
var h1 = document.querySelector("h1");
var optionsNum = 3;

init();

function init() {
  getColors();
  setSquares();
  createGoalColor();
}

function setSquares() {
  for (let i = 0; i < 3; i++) {
    selectors[0][i].style.backgroundColor = colors[0][i];
    selectors[1][i].style.backgroundColor = colors[1][i];
    selectors[2][i].style.backgroundColor = colors[2][i];
  }
}

function createGoalColor() {
  pickSolution(optionsNum);
  h1.style.backgroundColor =
    "rgb(" +
    randReds[solution[0]] +
    ", " +
    randGreens[solution[1]] +
    ", " +
    randReds[solution[2]] +
    ")";
}

function getColors() {
  rgbValues(randReds);
  rgbValues(randGreens);
  rgbValues(randBlues);
  var r = [];
  var g = [];
  var b = [];
  for (let i = 0; i < 3; i++) {
    r.push("rgb(" + randReds[i] + ", 0, 0)");
    g.push("rgb(0, " + randGreens[i] + ", 0)");
    b.push("rgb(0, 0, " + randBlues[i] + ")");
  }
  colors.push(r, g, b);
}

function pickSolution(i) {
  for (let index = 0; index < 3; index++) {
    solution[index] = Math.floor(Math.random() * i);
  }
}

function rgbValues(color) {
  for (let index = 0; index < 3; index++) {
    color[index] = Math.floor(Math.random() * 256);
  }
  return color;
}

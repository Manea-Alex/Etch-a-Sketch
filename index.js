let grid = document.querySelector(".container");
let range = document.querySelector(".range");
let doubleClick = false;
const rangeValue = document.querySelector(".range-value");
let colorInput = document.querySelector("#color");
let color = "black";
let count = 0;

grid.addEventListener("dblclick", function (ev) {
  doubleClick = !doubleClick;
  console.log("double click e ", doubleClick);
});

function theRange() {
  console.log("lungimea este ", range.value);
  rangeValue.innerHTML = `${range.value}x${range.value}`;
  makeGrid(range.value);
}
function changeText(value) {
  rangeValue.innerHTML = `${value} x ${value}`;
}

let rainbowButton = document.querySelector("#rainbow");
let state = false;

rainbowButton.addEventListener("click", () => {
  state = !state;
});

function rainbowMode() {
  let x = Math.floor(Math.random() * 255 + 1);
  let y = Math.floor(Math.random() * 255 + 1);
  let z = Math.floor(Math.random() * 255 + 1);
  console.log("Culorile is ", x, y, z);
  color = "rgb(" + x + "," + y + "," + z + ")";
  return color;
}

function draw() {
  if (doubleClick == true) {
    return;
  } else {
    if (state == true) {
      this.style.backgroundColor = rainbowMode();
    } else {
      this.style.backgroundColor = colorInput.value;
    }
  }
}

colorInput.addEventListener("input", () => {
  color = colorInput.value;
  console.log("culoarea e ", color);
});

function clearCanvas() {
  let elements = document.querySelectorAll(".cell");
  for (let i = 0; i < elements.length; i++) {
    elements[i].remove();
  }
}

function clearAndRefresh() {
  clearCanvas();
  location.reload();
  range.value = 16;
  makeGrid(16);
}

function makeGrid(gridSize) {
  clearCanvas();
  grid.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); 
                          grid-template-rows: repeat(${gridSize}, 1fr);`;
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseover", draw);
    grid.appendChild(cell);
  }
}
makeGrid(16);

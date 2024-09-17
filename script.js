const OPACITY_START = 1;
const OPACITY_INCREMENT = 0.1;
const KH = 10;
const KS = 10;
const KL = 1;

let h = 0;
let s = 50;
let l = 50;

function createGrid(size = 16) {
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("gridRow");
    gridContainer.appendChild(row);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("gridCell");
      cell.style.opacity = OPACITY_START;
      cell.onmouseenter = () => {
        h = h + KH * (2 * Math.random() - 1);
        s = s + KS * (2 * Math.random() - 1);
        l = l + KL * (2 * Math.random() - 1);

        cell.style.backgroundColor = `hsl(${h},${s}%,${l}%)`;
        const opacity = parseFloat(cell.style.opacity);
        cell.style.opacity = opacity + OPACITY_INCREMENT;
      };
      row.appendChild(cell);
    }
  }
}

document.getElementById("reconfigureButton").onclick = () => {
  let size;
  size = parseInt(prompt("ENTER SIZE"));
  if (!size || isNaN(size) || size < 1 || size > 100) {
    alert("INVALID SIZE");
  } else {
    createGrid(size);
  }
};

createGrid();

const OPACITY_START = 0.1;
const OPACITY_INCREMENT = 0.1;

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
        cell.style.backgroundColor = "#f00";
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

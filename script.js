const gridContainer = document.getElementById("gridContainer");

function createGrid(size = 16) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("gridRow");
    gridContainer.appendChild(row);
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("gridCell");
      row.appendChild(cell);
    }
  }
}

createGrid();

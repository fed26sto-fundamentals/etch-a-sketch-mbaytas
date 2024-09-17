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
      cell.onmouseenter = () => {
        cell.classList.add("on");
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

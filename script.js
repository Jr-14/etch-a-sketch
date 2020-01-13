var initialGridSize = 16;
var gridExists;
var gridSize;

const container = document.querySelector("#container");
const setGridArea = document.querySelector("#btn");
const deleteGridArea = document.querySelector("#btn-clear");

//Creates Grid Size
setGridArea.addEventListener('click', () => {
    let gridSize = window.prompt('Please enter grid size');
    createGrid(gridSize);
});

//Create a square grid
function createGrid (gridWidth) {
    deleteGrid();
    
    for (let i = 0; i < (gridWidth*gridWidth); i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        div.textContent = "";
        container.style.display = 'grid';
        container.style.width = '1024px';
        container.style.gridTemplateColumns = 'repeat(' + gridWidth + ', 1fr)';
        container.style.gridAutoRows = (1024/gridWidth)+'px';
        container.appendChild(div);
    }
    createMouseHover();
}


//Mouse Hover State for the grid
function createMouseHover () {
    const row = document.querySelectorAll('.row');
    row.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'lightblue';
        });
    });
}

//Delete Grid Function
function deleteGrid () {
    const row = document.querySelectorAll('.row');
    row.forEach((div) => {
        container.removeChild(div);
    });
}

//Delete Grid Reset Button Click
deleteGridArea.addEventListener('click', () => {
    deleteGrid();
    createGrid(initialGridSize);
});

createGrid(initialGridSize);
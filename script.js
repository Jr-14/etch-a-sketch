var initialGridSize = 32;
var gridExists;
var gridSize;
var enableDraw = false;

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
    
    //Create the number div-cells
    for (let i = 0; i < (gridWidth*gridWidth); i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        div.textContent = "";
        container.appendChild(div);
    }

    container.style.display = 'grid';
    container.style.width = '1024px';
    container.style.gridTemplateColumns = 'repeat(' + gridWidth + ', 1fr)';
    container.style.gridAutoRows = (1024/gridWidth)+'px';
    draw();
}


//Mouse 
function draw () {
    const row = document.querySelectorAll('.row');
    row.forEach((div) => {
        div.addEventListener('mouseover', () => {
            if(enableDraw) {
                div.style.backgroundColor = 'lightblue';
            }
        });
        div.addEventListener('mousedown', () => {
            enableDraw = true;
            if (enableDraw) {
                div.style.backgroundColor = 'lightblue';
            }
        });
        div.addEventListener('mouseup', () => {
            enableDraw = false;
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
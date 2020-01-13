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


function createGrid (gridArea) {
    deleteGrid();
    
    for (let i = 0; i < (gridArea*gridArea); i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        div.textContent = "";
        
        container.style.display = 'grid';
        container.style.width = '960px';
        container.style.gridTemplateColumns = 'repeat(' + gridArea + ', 1fr)';
        container.style.gridAutoRows = (960/gridArea)+'px';
        container.appendChild(div);

        
    }

    createMouseHover();
}


function createMouseHover () {
    const row = document.querySelectorAll('.row');
    row.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'lightblue';
        });
    });
}

function deleteGrid () {
    const row = document.querySelectorAll('.row');
    row.forEach((div) => {
        container.removeChild(div);
    });
}


//Delete Grid
deleteGridArea.addEventListener('click', () => {
    deleteGrid();
});
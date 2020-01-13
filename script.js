const container = document.querySelector("#container");
const setGridArea = document.querySelector("#btn");

var gridSize = 16;

setGridArea.addEventListener('click', () => {
    let gridSize = window.prompt('Please enter grid size');
    createGrid(gridSize);
});


function createGrid (gridArea) {
    for (let i = 0; i < (gridArea*gridArea); i++) {
        const div = document.createElement("div");
        div.classList.add("row");
        div.textContent = "";
        container.appendChild(div);
    }
}

createGrid(16);
//Create square grid rows from the gridSize

container.style.display = 'grid';
container.style.gridTemplateColumns = 'repeat(' + gridSize + ', 1fr)';
container.style.gridAutoRows = '3vmax';

const hover = document.querySelectorAll('.row');

hover.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'lightblue';
    });
        div.addEventListener('mouseleave', () => {
           div.style.backgroundColor = 'transparent';
        });
});


const container = document.querySelector("#container");

function createDiv () {
    let div = document.createElement("div");
    return div;
}


for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("row");
    div.textContent = "Row " + i;
    container.appendChild(div);
}

const rows = document.querySelectorAll(".row");

rows.forEach((div) => {
    for (let i = 0; i < 16; i++) {
        div.appendChild(createDiv());
    }
});
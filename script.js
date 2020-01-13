const container = document.querySelector("#container");


//Create 256 (16 x 16) div rows
for (let i = 0; i < (16*16); i++) {
    const div = document.createElement("div");
    div.classList.add("row");
    div.textContent = i;
    container.appendChild(div);
}

const hover = document.querySelectorAll('.row');

hover.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'red';
    });
        div.addEventListener('mouseleave', () => {
            div.style.backgroundColor = 'transparent';
        });
});


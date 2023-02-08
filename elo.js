const grid = document.querySelector('#grid');

function setupGrid (size) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div')
        gridRow.classList.add('grid-row')
        for (let i = 0; i < size; i++) {
            const gridElement = document.createElement('div')
            gridElement.classList.add('grid-element')
            gridElement.style.height = "50px";
            gridElement.style.width = "50px";
            gridElement.style.backgroundColor = "red";
            gridRow.appendChild(gridElement);
        }
        grid.appendChild(gridRow);
        //gridElement.addEventListener('mouseover', changeColor)
        //gridElement.addEventListener('mousedown', changeColor)
    }
}

setupGrid(8);
/*const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);

const element = document.getElementById("div1");
element.appendChild(para); */
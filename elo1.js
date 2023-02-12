// wniosek musze queryselectorem wszystkie divy i potem je
//#DDC3A5 #201E20 #E0A96D
const grid = document.querySelector('#grid');
const btn_rgb = document.querySelector('#btn_rgb');
const btn_normal = document.querySelector('#btn_normal');
const btn_rubber = document.querySelector('#btn_rubber');
const btn_cleanEverything = document.querySelector('#btn_clean');
const btn_test = document.querySelector('#test');
//let list_of_divs = document.getElementById("myDIV").querySelectorAll("p"); 
function setupGrid (size) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div')
        gridRow.setAttribute('id','grid-row');
        gridRow.style.display = "flex";
        gridRow.style.border = "10px";
        gridRow.style.justifyContent = "center";

        for (let i = 0; i < size; i++) {
            const gridElement = document.createElement('div')
            gridElement.classList.add('grid-element')
            gridElement.style.height = "50px";
            gridElement.style.width = "50px";
            gridElement.style.backgroundColor = "#E0A96D";
            gridRow.appendChild(gridElement);
        }
        grid.appendChild(gridRow);
        //gridElement.addEventListener('mouseover', changeColor)
        //gridElement.addEventListener('mousedown', changeColor)
    }
}
//console.log(document.getElementById("myDIV").querySelectorAll("p"));
setupGrid(8);
selectedSize = document.querySelector('#size');
document.addEventListener('input', function (event) {

	// Only run on our size menu
	if (event.target.id !== 'size') return;
    let allGridRows = document.querySelectorAll('#grid-row');
    allGridRows.forEach((element) => {
        element.remove()
});
	let gridSize = parseInt(selectedSize.value);
    setupGrid(gridSize);
    gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach((element) => {

        element.addEventListener('mouseover', function handleMouseOver() {
      
        element.style.backgroundColor = "black";
        });
      });

}, false);
/*var e = document.getElementById("elementId");


var value = e.options[e.selectedIndex].value;
var text = e.options[e.selectedIndex].text;
*/
let  row = grid.querySelectorAll("div");

let gridElements = document.querySelectorAll('.grid-element');
gridElements.forEach((element) => {

  element.addEventListener('mouseover', function handleMouseOver() {

  element.style.backgroundColor = "black";
  });
});
/*
btn_test.addEventListener('click', function changeToNormalF() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function handleMouseOverNormal() {
            element.style.backgroundColor = "black";
        });
      });
    });
*/

// Change to normal

btn_normal.addEventListener('click', function changeToNormal() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function handleMouseOverNormal() {
            element.style.backgroundColor = "black";
        });
      });
    });

// change to RGB
btn_rgb.addEventListener('click', function changeToRgb() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function handleMouseOverRgb() {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            element.style.backgroundColor = "#" + randomColor;
        });
      });
    });

// change to rubber

btn_rubber.addEventListener('click', function RubberClick() {
    gridElements.forEach((element) => {
        element.addEventListener('mouseover', function Rubber() {
            element.style.backgroundColor = "#E0A96D";
        });
    });
});

// clean everything

btn_cleanEverything.addEventListener('click', function CleanEverything () {
    gridElements.forEach ((element) => {
        element.style.backgroundColor = "#E0A96D";
    })
})
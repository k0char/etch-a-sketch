// wniosek musze queryselectorem wszystkie divy i potem je
const grid = document.querySelector('#grid');
//let list_of_divs = document.getElementById("myDIV").querySelectorAll("p"); 
function setupGrid (size) {
    for (let i = 0; i < size; i++) {
        const gridRow = document.createElement('div')
        gridRow.setAttribute('id','grid-row');
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
//console.log(document.getElementById("myDIV").querySelectorAll("p"));
setupGrid(8);
let  row = grid.querySelectorAll("div");
//row.addEventListener('mouseover', function () =>  { row.style.backgroundColor = "red";
//});
console.log(row);
/*


var x = document.getElementById("myDIV").querySelectorAll("p"); 

// Set the background color of the first <p> element (index 0) in div
x[0].style.backgroundColor = "red";

const box = document.getElementById('box');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});

*/

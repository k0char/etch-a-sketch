// wniosek musze queryselectorem wszystkie divy i potem je
const grid = document.querySelector('#grid');
//let list_of_divs = document.getElementById("myDIV").querySelectorAll("p"); 
function setupGrid (size) {
    for (let i = 0; i < size*size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.style.height = "50px";
      gridElement.style.width = "50px";
      gridElement.style.backgroundColor = "red";
      grid.appendChild(gridElement);
    }
}
setupGrid(8);


const gridElements = document.querySelectorAll('.grid-element');
gridElements.forEach((element) => {
  element.addEventListener('mouseover', function handleMouseOver() {
  element.style.backgroundColor = "black";
  });
});


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

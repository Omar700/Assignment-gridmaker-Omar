// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

function gridIsEmpty() {
    return numRows === 0 || numCols === 0;
}

function createCell() {
    const cell = document.createElement('td');
    cell.addEventListener('click', function() {
        if (colorSelected) {
            this.style.backgroundColor = colorSelected;
        }
    });
    return cell;
}

function addR() {
    const grid = document.getElementById('grid');
    const row = document.createElement('tr');
    for (let i = 0; i < (numCols === 0 ? 1 : numCols); i++) {
        row.appendChild(createCell());
    }
    grid.appendChild(row);
    numRows++;
    if (numCols === 0) numCols++; 
}

function addC() {
    const grid = document.getElementById('grid');
    if (gridIsEmpty()) {
        addR(); 
    } else {
        Array.from(grid.children).forEach(row => {
            row.appendChild(createCell());
        });
        numCols++;
    }
}
// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
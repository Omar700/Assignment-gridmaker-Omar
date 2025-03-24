// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// check if grid is empty 
function gridIsEmpty() {
    return numRows === 0 || numCols === 0;
}
// create cell 
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
//remove row 
function removeR() {
    if (numRows > 0) {
        const grid = document.getElementById('grid');
        grid.removeChild(grid.lastChild);
        numRows--;
        if (numRows === 0) numCols = 0; 
    }
}

// Remove a column
function removeC() {
    if (numCols > 0) {
        const grid = document.getElementById('grid');
        Array.from(grid.children).forEach(row => {
            row.removeChild(row.lastChild);
        });
        numCols--;
        if (numCols === 0) {
            while (numRows > 0) removeR(); 
        }
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    const grid = document.getElementById('grid');
    Array.from(grid.querySelectorAll('td')).forEach(cell => {
        if (!cell.style.backgroundColor) {
            cell.style.backgroundColor = colorSelected;
        }
    });
}

// Fill all cells
function fillAll() {
    const grid = document.getElementById('grid');
    Array.from(grid.querySelectorAll('td')).forEach(cell => {
        cell.style.backgroundColor = colorSelected;
    });
}

// Clear all cells
function clearAll() {
    const grid = document.getElementById('grid');
    Array.from(grid.querySelectorAll('td')).forEach(cell => {
        cell.style.backgroundColor = '';
    });
}
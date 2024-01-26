// DOM
const gridElement = document.getElementById('grid');

// Variables globales
let height = 10;
let width = 10;
let nbBombs = 10;
let grid;

// fonctions
const init = () => {
    grid = [];
    for(let i=0;i<height;i++) {
        const row = [];
        grid.push(row);
        for(let j=0;j<width;j++) {
            row.push(0);
        }
    }
    addBombs();
    displayGrid();
}

const addBombs = () => {
    let addedBombs = 0;
    while(addedBombs < nbBombs) {
        const x = Math.floor(Math.random() * width);
        const y = Math.floor(Math.random() * height);
        if(grid[y][x] !== '*') {
            grid[y][x] = '*';
            addedBombs++;
        } 
    }
}

const displayGrid = () => {
    gridElement.append(...grid.map(createHtmlRow));
}

const createHtmlRow = (row) => {
    const div = document.createElement('div');
    div.classList.add('row');
    div.append(...row.map(createHtmlCell));
    return div;
}

const createHtmlCell = (cell) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.innerText = cell;
    return div;
}

init();

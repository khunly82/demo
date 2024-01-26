// DOM
const gridElement = document.getElementById('grid');

// Variables globales
let height = 10;
let width = 10;
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
    displayGrid();
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

// DOM
const gridElement = document.getElementById('grid');
const changeButton = document.getElementById('changeOptions');



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
            
            for(let dy = -1; dy <= 1; dy++) {
                for(let dx = -1; dx <= 1; dx++) {
                    if(y+dy<0 || y+dy>=height || x+dx<0 || x+dx>=width) {
                        continue;
                    }
                    if(grid[y+dy][x+dx] === '*') {
                        continue;
                    }
                    grid[y+dy][x+dx]++;
                }
            }

            addedBombs++;
        } 
    }
}

const displayGrid = () => {
    gridElement.innerHTML = '';
    gridElement.append(...grid.map(createHtmlRow));
}

const createHtmlRow = (row, y) => {
    const div = document.createElement('div');
    div.classList.add('row');
    div.append(...row.map(createHtmlCell(y)));
    return div;
}

const createHtmlCell = y => (cell, x) => {
    const div = document.createElement('div');
    div.classList.add('cell');
    const displayCell = (x,y) => {
        console.log(x, y)
        const selected = document.querySelector(
            `.row:nth-child(${y+1})>.cell:nth-child(${x+1})`
        );
        if(selected.innerText !== '') {
            return;
        }
        selected.innerText = grid[y][x];
        if(grid[y][x] === 0) {
            for(let dy = -1; dy <= 1; dy++) {
                for(let dx = -1; dx <= 1; dx++) {
                    if(y+dy<0 || y+dy>=height || x+dx<0 || x+dx>=width) {
                        continue;
                    }
                    if(grid[y+dy][x+dx] === '*') {
                        continue;
                    }
                    displayCell(x+dx, y+dy);
                }
            }
        }
    }
    div.addEventListener('click',() => displayCell(x, y))
    return div;
}


const changeOptions = () => {
    const h = prompt('Entrez la hauteur');
    const w = prompt('Entrez la largeur');
    const b = prompt('Entrez le nombre de bombes');

    height = parseInt(h);
    width = parseInt(w);
    nbBombs = parseInt(b);
    init();
}

changeButton.addEventListener('click', changeOptions);

init();













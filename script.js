const juego = document.querySelector('#juego');
const btn = document.querySelector('button');

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function hoverSquares(squares) {
    squares.addEventListener("mouseover", () => {
        squares.style.backgroundColor = getRandomRGB();
    });
}

function generateSquare() {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    hoverSquares(squares);
    juego.appendChild(squares);
}

function createGrid(dimension) {
    for (let i = 0; i < dimension * dimension; i++) {
        generateSquare();
    }
}

btn.addEventListener('click', () => {
    let gridSize = parseInt(prompt('numero'));
    while (juego.firstChild) {
        juego.removeChild(juego.firstChild);
    }
    if (gridSize > 100) {
        gridSize = 100;
    }
    createGrid(gridSize);
});

createGrid(16);


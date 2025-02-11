const juego = document.querySelector('#juego');
const btn = document.querySelector('button');

function hoverSquares(squares) {
    squares.addEventListener("mouseover", () => {
        squares.classList.remove("squares");
        squares.classList.add("hovered");
    })
    squares.addEventListener("mouseout", () => {
        squares.classList.remove("hovered");
        squares.classList.add("squares");
    })
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
})

createGrid(16);


const juego = document.querySelector('#juego');

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
    for (let i = 0; i < dimension; i++) {
        generateSquare();
    }
}

createGrid(256);

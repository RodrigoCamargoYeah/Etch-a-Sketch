const juego = document.querySelector('#juego');
const hover = document.querySelector(".hovered");

function color() {
    return Math.floor(Math.random() * 256);
};
for (let i = 1; i <= 16*16; i++) {
    const squares = document.createElement("div");
    squares.classList.add("squares");
    squares.addEventListener('mouseover', () => {
        squares.classList.remove("squares");
        squares.classList.add("hovered");
    });
    squares.addEventListener('mouseout', () => {
        squares.classList.remove("hovered");
        squares.classList.add("squares");
    });
    squares.innerHTML = i;
    juego.appendChild(squares);
};

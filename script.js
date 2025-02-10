const juego = document.querySelector('#juego')

for (let i = 0; i <= 16; i++) {
    const squares = document.createElement("div");
    squares.id = "squares";
    juego.appendChild(squares);
    console.log(i)
}

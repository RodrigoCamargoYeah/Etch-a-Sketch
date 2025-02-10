const juego = document.querySelector('#juego')

for (let i = 1; i <= 16*16; i++) {
    const squares = document.createElement("div");
    squares.id = "squares";
    squares.innerHTML = i;
    juego.appendChild(squares);
    console.log(i)
}

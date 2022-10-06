document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
    square.addEventListener("click", handleClick);
    });
});

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        setTimeout(() => {
            alert("O jogo acabou - O vencedor foi " + playerTime);

        }, 10);

    };
    updateSquare(position);
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    if(symbol != '')
        {
            square.innerHTML = `<div class ='${symbol}'></div>`
        }
}

// window.onbeforeunload = confirmExit;
// function confirmExit()
// {
//     if(document.getElementById("comentario").value != ""){
//         return "Deseja realmente sair desta página?";
//     }
// }
document.addEventListener("DOMContentLoaded", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
    square.addEventListener("click", handleClick);
    });
});

let player1score = document.getElementById('playerO');
let player2score = document.getElementById('playerX');

function handleClick(event){

    let square = event.target;
    let position = square.id;

    if(handleMove(position)){
        let winner = symbols[playerTime].toString();
        setTimeout(() => {
            alert("O jogo acabou - O vencedor foi o jogador " + winner.toUpperCase());
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

function updateScore(){

    player1score.innerHTML = `${player1Wins}`;
    player2score.innerHTML = `${player2Wins}`;

}

function playAgain() {
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    resetSquares();
}

function resetScore(){
    player1Wins = 0;
    player2Wins = 0;
    updateScore();
    playAgain();
}

function resetSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach ((square) => {

        let position = square.id;
        board[position] = square.innerHTML = ``
    })
}

// window.onbeforeunload = confirmExit;

// function confirmExit()
// {
//     return "Se você fechar o navegador, os dados serão perdidos. Deseja Realmente sair?";
// }
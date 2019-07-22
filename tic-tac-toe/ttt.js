//   TIC TAC TOE Part

let turn = "Blue";

// set the header to the initial value
document.querySelector('#turnOrder').innerHTML = "Turn: " + turn;
// board for code
var board = [];

function play(id, index) {

  if (turn == "Blue" && id.style.backgroundColor != "blue" && id.style.backgroundColor != "gray") {
    id.style.backgroundColor = "blue";
    board[index] = "blue";
    turn = "Gray";
    id.innerHTML = "board["+ index +  "] " + board[index];
    document.querySelector('#turnOrder').innerHTML = "Turn: " + turn;
  }  
  else if (turn == "Gray" && id.style.backgroundColor != "gray" && id.style.backgroundColor != "blue" ){
    id.style.backgroundColor = "gray";
    board[index] = "gray";
    turn = "Blue";
    document.querySelector('#turnOrder').innerHTML = "Turn: " + turn;
  }
  console.log(board);
  checkwin();
}
function checkwin() {
  if (board[0] == board[1] && board[1] == board[2] ) {
    console.log("you win");
  }
}
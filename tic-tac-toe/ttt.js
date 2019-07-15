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
    document.querySelector('#turnOrder').innerHTML = "Turn: " + turn;
  }  
  else if (turn == "Gray" && id.style.backgroundColor != "gray" && id.style.backgroundColor != "blue" ){
    id.style.backgroundColor = "gray";
    board[index] = "gray";
    turn = "Blue";
    document.querySelector('#turnOrder').innerHTML = "Turn: " + turn;
  }
  console.log(board);
}
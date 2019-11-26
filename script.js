const cells = {
    one: document.body.querySelector("#one"),
    two: document.body.querySelector("#two"),
    three: document.body.querySelector("#three"),
    four: document.body.querySelector("#four"),
    five: document.body.querySelector("#five"),
    six: document.body.querySelector("#six"),
    seven: document.body.querySelector("#seven"),
    eight: document.body.querySelector("#eight"),
    nine: document.body.querySelector("#nine"),
};
document.body.addEventListener("click", click = event => {
if (event.target.nodeName == "BUTTON") {
  window.location.reload(true);
}
});

let result = 0;

let turn = 0;
  document.body.addEventListener("click", click = event => {
    if (event.target.nodeName == "DIV") {

    if (event.target.textContent != "X" && event.target.textContent != "O"){
      turn = turn + 1;
    }

    if (turn == 0 || turn % 2 == 0 && (event.target.textContent != "O" && event.target.textContent != "X")){

        event.target.textContent = "X";
        console.log(turn);

    }

    if (turn == 1 || turn % 2 != 0 && (event.target.textContent != "X" && event.target.textContent != "O")){

        event.target.textContent = "O";
        console.log(turn)

    }
  }

  if (cells.one.textContent == "X"){
    if ((cells.seven.textContent == "X" && cells.four.textContent == "X") || (cells.three.textContent == "X" && cells.two.textContent == "X")){
      result++;
      }
    }

  if (cells.nine.textContent == "X"){

    if ((cells.three.textContent == "X" && cells.six.textContent == "X") || (cells.seven.textContent == "X" && cells.eight.textContent == "X")){
      result++;
      }
    }

  if (cells.five.textContent == "X"){

    if (((cells.one.textContent == "X" && cells.nine.textContent == "X") || (cells.three.textContent == "X" && cells.seven.textContent == "X")) ||
       ((cells.two.textContent == "X" && cells.eight.textContent == "X") || (cells.four.textContent == "X" && cells.six.textContent == "X"))) {
      result++;
  }
}

if (cells.one.textContent == "O"){
  if ((cells.seven.textContent == "O" && cells.four.textContent == "O") || (cells.three.textContent == "O" && cells.two.textContent == "O")){
    result--;
    }
  }

if (cells.nine.textContent == "O"){

  if ((cells.three.textContent == "O" && cells.six.textContent == "O") || (cells.seven.textContent == "O" && cells.eight.textContent == "O")){
    result--;
    }
  }

if (cells.five.textContent == "O"){

  if (((cells.one.textContent == "O" && cells.nine.textContent == "O") || (cells.three.textContent == "O" && cells.seven.textContent == "O")) ||
     ((cells.two.textContent == "O" && cells.eight.textContent == "O") || (cells.four.textContent == "O" && cells.six.textContent == "O"))) {
    result--;
  }
}
if (result == 1 || result == -1){
  document.body.removeEventListener("click", click);
    if (result == 1){
    let x = document.body.querySelector("#won");
    x.textContent = "X Won!";
    }
    if (result == -1){
    let o = document.body.querySelector("#won");
    o.textContent = "O Won!"
    }
}
  });

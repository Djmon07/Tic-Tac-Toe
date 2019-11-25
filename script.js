//let one = document.body.querySelector(#one);
//let two = document.body.querySelector(#two);
//let three = document.body.querySelector(#three);
//let four = document.body.querySelector(#four);
//let five = document.body.querySelector(#five);
//let six = document.body.querySelector(#six);
//let seven = document.body.querySelector(#seven);
//let eight = document.body.querySelector(#eight);
//let nine = document.body.querySelector(#nine);

let turn = 0;
  document.body.addEventListener("click", event => {

    if (event.target.nodeName == "DIV") {

    if (event.target.textContent != "X" && event.target.textContent != "O")
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
});

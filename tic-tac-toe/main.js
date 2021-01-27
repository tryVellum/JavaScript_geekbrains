const equals3 = (a, b, c) => {
  return (a == b && b == c && a != '');
}

const checkWinner = (model) => {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(model[i][0], model[i][1], model[i][2])) {
      winner = model[i][0];
    }
  }  

  // vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(model[0][i], model[1][i], model[2][i])) {
      winner = model[0][i];
    }
  }

  // diagonal
  if (equals3(model[0][0], model[1][1], model[2][2])) {
    winner = model[0][0];
  }
  if (equals3(model[0][2], model[1][1], model[2][0])) {
    winner = model[0][2];
  }

  return winner;
}
// !!! обновляет игру, при завершении
const removeGame = () =>{
  let remove_game = document.getElementById('table');
  remove_game.parentNode.removeChild(remove_game);
}

const game = () => {
  const model = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  const playerX = 'X';
  const playerO = 'O';
  let currentPlayer = playerX;

  const $game = document.querySelector('#game');
  const $table = document.createElement('table');
  $table.id = 'table'

  for (let i = 0; i < 3; i++) {
    const $tr = document.createElement('tr');
    $tr.dataset.index = i;

    for (let j = 0; j < 3; j++) {
      const $td = document.createElement('td');
      $td.dataset.index = j;
      $tr.appendChild($td);
    }

    $table.appendChild($tr);
  }

  $game.appendChild($table);
  // !!! счетчик ходов
  let move_counter = 1;

  $table.addEventListener('click', (e) => {
    const row = e.target.parentNode.dataset.index;
    const column = e.target.dataset.index;

    // 2. check if td assigned
    // !!! условие на пустое значение, что бы небыло перезаписи
    if (model[row][column] === ''){
      model[row][column] = currentPlayer;
      e.target.innerHTML = currentPlayer;
      move_counter += 1;
    }

    const winner = checkWinner(model);
    if (winner) {
      alert(`Winner: ${winner}`);
      removeGame();
      game()
    };
    // сама проверка на ничью
    if (move_counter === 10){
      alert('Draw');
      removeGame();
      game()
    }
    // 1. tie

    currentPlayer = currentPlayer === playerX ? playerO : playerX;
  });
}

window.onload = () => {
  game();
};

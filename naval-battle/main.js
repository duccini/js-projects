const flipButton = document.querySelector("#flip-button");
const optionContainer = document.querySelector(".option-container");
const gamesboardContainer = document.querySelector("#gamesboard-container");

// Option choosing
let angle = 0;

function flip() {
  // children => HTML Collection
  const optionShips = Array.from(optionContainer.children);

  angle = angle === 0 ? 90 : 0;

  optionShips.forEach((ship) => (ship.style.transform = `rotate(${angle}deg)`));
}

// Creating Boards
const width = 10;

function createBoard(color, user) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.classList.add("game-board");
  gameBoardContainer.style.backgroundColor = color;
  gameBoardContainer.id = user;

  for (let i = 0; i < width * width; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = i;

    gameBoardContainer.append(block);
  }

  gamesboardContainer.append(gameBoardContainer);
}

createBoard("SkyBlue", "player");
createBoard("DodgerBlue", "computer");

flipButton.addEventListener("click", flip);

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

flipButton.addEventListener("click", flip);

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

// Create Ships
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}

const destroyer = new Ship("destroyer", 2);
const submarine = new Ship("submarine", 3);
const cruiser = new Ship("cruiser", 3);
const blattleship = new Ship("blattleship", 4);
const carrier = new Ship("carrier", 5);

const ships = [destroyer, submarine, cruiser, blattleship, carrier];

function addComputerShips(ship) {
  const allBoardBlocks = document.querySelectorAll("#computer div");

  // Random Boolean
  let isHorizontal = Math.random() < 0.5;

  let randomStartIndex = Math.floor(Math.random() * width * width);

  let shipBlocks = [];

  for (let i = 0; i < ship.length; i++) {
    if (isHorizontal) {
      shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i]);
    } else {
      shipBlocks.push(allBoardBlocks[Number(randomStartIndex) + i * width]);
    }
  }

  shipBlocks.forEach((shipBlock) => {
    shipBlock.classList.add(ship.name);
    shipBlock.classList.add("taken");
  });
}

ships.forEach((ship) => addComputerShips(ship));

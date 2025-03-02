const flipButton = document.querySelector("#flip-button");
const optionContainer = document.querySelector(".option-container");

let angle = 0;

function flip() {
  // children => HTML Collection
  const optionShips = Array.from(optionContainer.children);

  angle = angle === 0 ? 90 : 0;

  optionShips.forEach((ship) => (ship.style.transform = `rotate(${angle}deg)`));
}

flipButton.addEventListener("click", flip);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
 if (amount >= 1 && amount <= 100) {
    let squares = '';
    const numOfBoxes = document.querySelectorAll(".square").length;
    for (let i = 0; i < amount; i++) {
      let size = numOfBoxes === 0
        ? 30 + i * 10
        : 30 + (numOfBoxes + i) * 10;
      squares += `<div class="square" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    }
    boxes.insertAdjacentHTML("beforeend", squares);
  }
  input.value = "";
}

buttonCreate.addEventListener('click', handleCreate);
function handleCreate(event) {
  let amount = Number(input.value);
  createBoxes(amount);
}

buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  boxes.innerHTML = "";
}

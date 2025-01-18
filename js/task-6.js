function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
let size = 30;

let number = 0;
input.addEventListener('change', (event) => number = event.currentTarget.value);

function createBoxes(amount) {
 if (amount >= 1 || amount <= 100) {
    let squares = '';
   for (let i = 0; i < amount; i++) {
    squares += `<div class="square" style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;

  }
  boxes.insertAdjacentHTML("beforeend", squares);
}
  input.value = "";
}

buttonCreate.addEventListener('click', handleCreate);
function handleCreate(event) {
  createBoxes(number);
}

buttonDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes(event) {
  boxes.innerHTML = "";
  size = 30;
}

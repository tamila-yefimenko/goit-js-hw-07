const input = document.querySelector('#name-input');
const title = document.querySelector('h1');
const span = document.querySelector('#name-output');

const textField = document.createElement('div');
input.parentNode.insertBefore(textField, input);
textField.appendChild(input);
textField.appendChild(title);
textField.classList.add("text-field");

input.addEventListener('input', function () {
    const name = input.value.trim();
    if (name !== '') {
        span.textContent = name;
        console.log(span.textContent)
    } else {
        span.textContent = 'Anonymous';
    }
});
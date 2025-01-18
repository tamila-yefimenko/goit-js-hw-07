const labels = document.querySelectorAll('label');
labels.forEach(label => label.classList.add('label-form'));

const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email;
    const password = form.elements.password;
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
    } else {
        const formData = {};
        formData[`${email.getAttribute('name')}`] = emailValue;
        formData[`${password.getAttribute('name')}`] = passwordValue;
        console.log(formData);
    }
    form.reset();
}

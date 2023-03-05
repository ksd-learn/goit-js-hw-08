var throttle = require('lodash.throttle');
const emailInp = document.querySelector('[name="email"]');
const messageInp = document.querySelector('[name="message"]');
const formInp = document.querySelector('.feedback-form');
let objForm = {
    email: '',
    message: ''
};

try {
    const objInp = JSON.parse(localStorage.getItem('feedback-form-state'));
    objForm.email = objInp.email;
    objForm.message = objInp.message;
    emailInp.value = objInp.email;
    messageInp.value = objInp.message;
} catch (error) {
    console.log('error, хранилища нет')
}

formInp.addEventListener('input',
    throttle(event => {
        let key = event.target.name;
        objForm[key] = event.target.value.trim();
        localStorage.setItem('feedback-form-state', JSON.stringify(objForm));
    }, 500));

formInp.addEventListener('submit', event => {
    event.preventDefault();
    if (objForm.message!=='' && objForm.email!=='') {
        console.log(objForm);
        event.target.reset();
        objForm.email = '';
        objForm.message = '';
        localStorage.removeItem('feedback-form-state');
    } else {
        alert('Заполните поля формы')
    }
})


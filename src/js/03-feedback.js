
import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');

const date = {
    email: '',
    message: ''
}

date.email = localStorage.getItem('feedback-form-state') ? JSON.parse(localStorage.getItem('feedback-form-state')).email : '';
date.message = localStorage.getItem('feedback-form-state') ? JSON.parse(localStorage.getItem('feedback-form-state')).message : '';


form.email.value = date.email;
form.message.value = date.message;


const addInputValue = () => {
    date.email = form.email.value;
    date.message = form.message.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(date));
    console.log(date)
}

form.addEventListener('input', throttle(addInputValue, 500));


form.addEventListener('submit', (event) => {
    if (form.email.value && form.message.value) {
        event.preventDefault();
        localStorage.removeItem('feedback-form-state');
        console.log(`
    {
        email : ${date.email},
        message: ${date.message}
    }`)
        form.email.value = '';
        form.message.value = '';
    }
    else alert('Please, complete all fields')
})



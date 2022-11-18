let errors = [];
let btn = document.querySelector('button');
btn = addEventListener('click', checkValidity);
//btn = addEventListener('click', checkAll);

let regName = /[A-Za-zA-Яа-яЁё]/,
regPass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

let user = document.querySelectorAll('.name');
let pass = document.querySelectorAll('.password');

// function checkValidity(input) {
// let validity = input.validity;
// if (validity.valueMissing) {
//     errors.push('Поле ' + input.placeholder + ' не заполнено');}
// if (validity.patternMismatch) {
//         errors.push('Поле ' + input.placeholder + ' заполненно неправильно');}  
// if (validity.typeMismatch) {
//             errors.push('Поле ' + input.placeholder + ' заполненно неправильно');}  
// }
 
// function checkAll() {
//     errors = [];
//     let inputs = document.querySelectorAll('input');
//     for (input of inputs) {
//         checkValidity(input);
//     }
//     document.querySelector('#errorsInfo').innerHTML = errors.join('. <br>');
// }

function checkValidity (input) {
    input.preventDefault();
    if (!regName.test(user.value)) {
        console.log('error');
    } else {
        console.log('ok');
    }
};
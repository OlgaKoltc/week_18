let errors = [];
let btn = document.querySelector('button');
btn = addEventListener('click', checkValidity);

function checkValidity(input) {
let validity = input.validity;
// и выдает ошибку Cannot read properties of undefined (reading 'valueMissing'), не понимаю почему
if (validity.valueMissing) {
    errors.push('Поле ' + input.placeholder + ' не заполнено');}
if (validity.patternMismatch) {
        errors.push('Поле ' + input.placeholder + ' заполненно неправильно');}  
if (validity.typeMismatch) {
            errors.push('Поле ' + input.placeholder + ' заполненно неправильно');}  
            
checkAll()
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll('input');
    for (input of inputs) {
        checkValidity(input);
    }
    document.querySelector('#errorsInfo').innerHTML = errors.join('. <br>');
}

//btn = addEventListener('click', checkAll);

// let regName = /[A-Za-zA-Яа-яЁё]/,
// regPass = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;


// function checkValidity (input) {
//     input.preventDefault();
//     if (!regName.test(user.value)) {
//         console.log('error');
//     } else {
//         console.log('ok');
//     }
// }

// function checkImput() {
//     inputs.forEach(function(input) {
// if (input.value == '') {
//     input.classList.add('error');
// } else { input.classList.remove('error');}
// });
// btn = addEventListener('click',checkPassword)}
// function checkPassword() {
//     let password1 = document.querySelector('#password1').value
//     let password2 = document.querySelector('#password2').value
//     let passwords = [password1, password2]
//     passwords.forEach(function(){
//         if (length.value > 8 && password1 === password2) {
//            return true
//         } else {console.log('error'); }
//     });
// }

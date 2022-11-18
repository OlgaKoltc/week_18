// document.addEventListener('DOMContentLoaded', function(event) {
//     let area = localStorage.getItem('area') 
//     if(localStorage.getItem('area') != null){
//     area.value = localStorage.getItem('area')};
// });

let btn = document.querySelector('#btn');
const clear = document.querySelector('#btn_clear');

btn = addEventListener('click',addNote);

function addNote() {
    let note = document.querySelector('#note').value;
let newnote = localStorage.setItem('note', note);
console.log(newnote);
}

    
// area = addEventListener('input', function() {
//     localStorage.setItem('area', area.value);
//     });
//     document.querySelector('btn_clear').addEventListener('click', function() {
//     localStorage.removeItem('area');
//     area.value = '';
//     });

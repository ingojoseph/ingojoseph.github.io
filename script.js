var button = document.querySelector('.button');
var output = document.querySelector('.output');

var counter = 0;

button.addEventListener('click', myFunction);

function myFunction() {
    counter = counter + 1;
    output.innerHTML = 'Button clicked ' + counter + ' times';
}
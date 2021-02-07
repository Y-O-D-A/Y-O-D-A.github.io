if (!localStorage.getItem('x')){
    localStorage.setItem('x', 0)
}

let x = localStorage.getItem('x');

document.addEventListener('DOMContentLoaded', function (){

    document.querySelector('h1').innerHTML = x

    document.getElementById('add').onclick = add;

    document.getElementById('reset').onclick = reset;

    document.getElementById('subtract').onclick = subtract;

})

function add() {

    x++

    document.querySelector('h1').innerHTML = x

    if (x === 100){
        alert('Good Job! You got to 100')
    }

    if (x === 1000){
        alert('AMAZING! YOU GOT TO 1000!')
    }

    if (x > 10000) {
        alert('You did a very good job of hacking this')
    }

    localStorage.setItem('x', x)

}

function subtract() {

    x--

    document.querySelector('h1').innerHTML = x

    if (x === 100){
        alert('Good Job! You got to 100')
    }

    if (x === 1000){
        alert('AMAZING! YOU GOT TO 1000!')
    }

    if (x >= 10000) {
        alert('You did a very good job of hacking this')
    }

    localStorage.setItem('x', x)

}

function reset() {

    x = 0

    document.querySelector('h1').innerHTML = x

    localStorage.setItem('x', x)

}

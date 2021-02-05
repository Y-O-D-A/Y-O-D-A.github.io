let x = 0

function add() {

    x++

    document.querySelector('h1').innerHTML = x

}

function subtract() {

    x--

    document.querySelector('h1').innerHTML = x

}

function reset() {

    x = 0

    document.querySelector('h1').innerHTML = 'HELLO'

}
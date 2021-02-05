let x = 0

function add() {

    x++

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

}

function reset() {

    x = 0

    document.querySelector('h1').innerHTML = 'HELLO'

}

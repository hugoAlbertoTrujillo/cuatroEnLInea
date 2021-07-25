let test = document.querySelector('.test');
test.addEventListener('click', ocultaEtiqueta);

let test2 = document.querySelector('.test2');
test2.addEventListener('click', ocultaEtiqueta2);

function colorRosa(){
    tableroNegro = document.querySelector('.grid');
    tableroNegro.classList.remove('grid-marron');
    tableroNegro.classList.add('grid-rosa');
}

function colorMarron(){
    tableroNegro = document.querySelector('.grid');
    tableroNegro.classList.remove('grid-rosa');
    tableroNegro.classList.add('class', 'grid-marron');
}

function colorDefault(){
    tableroNegro = document.querySelector('.grid');
    tableroNegro.classList.remove('grid-rosa');
    tableroNegro.classList.remove('grid-marron');
}

let verde;
let amarillo;
let violeta;
let negro;
let chocolate;
let gris;

const displayPlayer1 = document.querySelector('.player1');
const displayPlayer2 = document.querySelector('.player2');

function colorVerde(){
    verde = true;
    displayPlayer1.style.background = 'green'
}

function colorAmarillo(){
    amarillo = true;
    displayPlayer1.style.background = 'yellow'
}

function colorVioleta(){
    violeta = true;
    displayPlayer1.style.background = 'blueviolet'
}

function colorNegro(){
    negro = true;
    displayPlayer2.style.background = 'black';
    displayPlayer2.style.color = 'white';
}

function colorChocolate(){
    chocolate = true;
    displayPlayer2.style.background = 'chocolate'
}

function colorGris(){
    gris = true;
    displayPlayer2.style.background = 'grey'
}

function ocultaEtiqueta(){
    test.remove();
}

function ocultaEtiqueta2(){
    test2.remove();
}

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div');
    const result = document.querySelector('#result');
    const displayCurrent1 = document.querySelector('#c-1');
    const displayCurrent2 = document.querySelector('#c-2');
    const displayPlayer1 = document.querySelector('.player1');
    const displayPlayer2 = document.querySelector('.player2');

    let currentPlayer = 1;
    let score1 = 0;
    let score2 = 0;
    let stopGame = true;
    let board;

    let initBoard = () => {
        board = new Array(6);
        for(let i = 0; i < 6; i++) {
            board[i] = new Array(7);
        }
        for(let i = 0; i < 6; i++){
            for(let j = 0; j < 7; j++){
                board[i][j] = 0;
            }
        }
    }
    initBoard();

    for(let i = 0, assingClass = 0; i < squares.length; i++){
        squares[i].setAttribute('id', assingClass);
        assingClass++;
        if(assingClass >= 7){
            assingClass = 0;
        }
    }

    for(let i = 0; i < squares.length; i++){
        (function(index){
            squares[i].onclick = function(){
                let array = [];
                squares.forEach(element => {
                    if (element.getAttribute('id') === squares[index].getAttribute('id')){
                        array.push(element);
                        y = element.getAttribute('id');
                    }
                })

                if( stopGame){
                    for(let rec = array.length - 1; rec > -1; rec-- ){
                        if (array[rec].classList.contains('taken') ){
                            continue;
                        } else {
                            if (currentPlayer === 1){
                                array[rec].classList.add('taken');
                                if(verde){
                                    array[rec].classList.add('player-one-verde');
                                    result.style.color = 'green';
                                }
                                else if(amarillo){
                                    array[rec].classList.add('player-one-amarillo');
                                    result.style.color = 'yellow';
                                }
                                else if(violeta){
                                    array[rec].classList.add('player-one-violeta');
                                    result.style.color = 'blueviolet';
                                }
                                else {
                                    array[rec].classList.add('player-one');
                                    result.style.color = 'red';
                                }
                                currentPlayer = 2;
                                displayCurrent2.classList.add('current-2') ;
                                displayCurrent1.classList.remove('current-1');

                                board[rec][y] = 1;

                            } else if(currentPlayer === 2){
                                array[rec].classList.add('taken');

                                if(negro){
                                    array[rec].classList.add('player-two-negro');
                                    result.style.color = 'black';
                                }
                                else if(chocolate){
                                    array[rec].classList.add('player-two-chocolate');
                                    result.style.color = 'chocolate';
                                }
                                else if(gris){
                                    array[rec].classList.add('player-two-gris');
                                    result.style.color = 'grey';
                                }
                                else{
                                    array[rec].classList.add('player-two');
                                    result.style.color = 'blue';
                                }

                                displayCurrent1.classList.add('current-1');
                                displayCurrent2.classList.remove('current-2');
                                currentPlayer = 1;
                                
                                board[rec][y] = 2;

                            }
                            break;
                        }
                    }
                }
            }
        })(i)
    }

    function checkBoard() {
        let win = 0
        const m = board
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {

                if (i + 3 < 6) {
                    if (m[i][j] == 1 && m[i + 1][j] == 1 && m[i + 2][j] == 1 && m[i + 3][j] == 1) {
                        win = 1;
                    }
                }
                if (j + 3 < 7) {
                    if (m[i][j] == 1 && m[i][j + 1] == 1 && m[i][j + 2] == 1 && m[i][j + 3] == 1) {
                        win = 1;
                    }
                }

                if (i + 3 < 6 && j + 3 < 7) {
                    if (m[i][j] == 1 && m[i + 1][j + 1] == 1 && m[i + 2][j + 2] == 1 && m[i + 3][j + 3] == 1) {
                        win = 1;
                    }
                }
                if (j - 3 > -1 && i + 3 < 6) {
                    if (m[i][j] == 1 && m[i + 1][j - 1] == 1 && m[i + 2][j - 2] == 1 && m[i + 3][j - 3] == 1) {
                        win = 1;
                    }
                }
                if (j + 3 < 7 && i - 3 > -1) {
                    if (m[i][j] == 1 && m[i - 1][j + 1] == 1 && m[i - 2][j + 2] == 1 && m[i - 3][j + 3] == 1) {
                        win = 1;
                    }
                }

                if (i + 3 < 6) {
                    if (m[i][j] == 2 && m[i + 1][j] == 2 && m[i + 2][j] == 2 && m[i + 3][j] == 2) {
                        win = 2;
                    }
                }
                if (j + 3 < 7) {
                    if (m[i][j] == 2 && m[i][j + 1] == 2 && m[i][j + 2] == 2 && m[i][j + 3] == 2) {
                        win = 2;
                    }
                }

                if (i + 3 < 6 && j + 3 < 7) {
                    if (m[i][j] == 2 && m[i + 1][j + 1] == 2 && m[i + 2][j + 2] == 2 && m[i + 3][j + 3] == 2) {
                        win = 2;
                    }
                }
                if (j - 3 > -1 && i + 3 < 6) {
                    if (m[i][j] == 2 && m[i + 1][j - 1] == 2 && m[i + 2][j - 2] == 2 && m[i + 3][j - 3] == 2) {
                        win = 2;
                    }
                }
                if (j + 3 < 7 && i - 3 > -1) {
                    if (m[i][j] == 2 && m[i - 1][j + 1] == 2 && m[i - 2][j + 2] == 2 && m[i - 3][j + 3] == 2) {
                        win = 2;
                    }
                }
            }

        }
        
        if(stopGame) {
            if(win === 1){
                // result.style.color = 'red';
                result.innerHTML = 'Jugador uno Gana!';
                score1++;
                displayPlayer1.innerHTML = 'Jugador 1: ' + "(^.^)";
                stopGame = false;
                
            } else if(win === 2) {
                score2++;
                displayPlayer2.innerHTML = 'Jugador 2: ' + "(^.^)";
                // result.style.color = 'blue';
                result.innerHTML = 'Jugador dos Gana!';
                stopGame = false;
            }
        }
        ocultaEtiqueta();
        ocultaEtiqueta2();
        contador = 0;
        squares.forEach(square => {
            if(square.classList.contains('taken')){
                contador++;
            }
        })
        if (contador === 49){
            result.style.color = 'green';
            result.innerHTML = 'Empate, nadie Gana (O.O)';
        }
    }


    squares.forEach(square => square.addEventListener('click', checkBoard));

    resetGame = () => {
        board = new Array(6);
        //Bucle para meter en cada posición otros array de 10
        for (var i = 0; i < 6; i++) {
            board[i] = new Array(7);
        }
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                board[i][j] = 0
            }
        }
        stopGame = true;
        for (var i = 0; i < squares.length - 7; i++) {
            squares[i].classList.remove('taken')
            squares[i].classList.remove('player-one')
            squares[i].classList.remove('player-one-verde')
            squares[i].classList.remove('player-two')

        }
        result.innerHTML = ""
        location.reload();

    }

})

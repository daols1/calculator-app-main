// // DOM Selections;
// // const one = document.querySelector('#one');
// // const two = document.querySelector('#two');
// // const three = document.querySelector('#three');
// // const four = document.querySelector('#four');
// // const five = document.querySelector('#five');
// // const six = document.querySelector('#six');
// // const seven = document.querySelector('#seven');
// // const eight = document.querySelector('#eight');
// // const nine = document.querySelector('#nine');
// // const plus = document.querySelector('#plus');
// // const zero = document.querySelector('#zeron');
// // const multiply = document.querySelector('#multiplyn');
// // const divide = document.querySelector('#divie');
// // const equal = document.querySelector('#equal');
// // const reset = document.querySelector('#reset');
// // const point = document.querySelector('#point');
// // const del = document.querySelector('#del');
// const btn = document.querySelectorAll('.items');
// const displayFig = document.querySelector('.disp_numbers');

// // Event listeners and functions for the buttons
// let btns = btn.forEach(i => {
//     i.addEventListener('click', (e) => {
//         console.log(e.target.value)
//         displayFig += e.target.innerText;
//         //displayFig = displayFig.target.value + e
        
//     })
// } )
// //btn.addEventListener('click', (e) => {
//     //console.log(e.target.value);
//     // displayFig+= btn
// //})
// displayFig


// DOM Selections

class Calculator{
    constructor(curentOperandTextElement){
        this.curentOperandTextElement = curentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = '';
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        this.currentOperandTextElement = this.currentOperand.toString() + number.toString()
    }

    chooseOpertaion(operation){

    }

    compute(){

    }

    updateDisplay(){
        this.curentOperandTextElement.innerText = this.curentOperand
    }
}

const numBtns = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.operate');
const del = document.querySelector('.del');
const reset = document.querySelector('.reset');
const equal = document.querySelector('.equal');
const curentOperandTextElement = document.querySelector('.disp_numbers')
const calculator = new Calculator(curentOperandTextElement)

numBtns.forEach(e => {
    e.addEventListener('click', () => {
        console.log(calculator.appendNumber(e.innerText));
        calculator.updateDisplay();
    })
})

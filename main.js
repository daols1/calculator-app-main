// // Theme changers 

// const t1 = document.querySelector('#t1');
// const t2 = document.querySelector('#t2');
// const t3 = document.querySelector('#t3');

// t1.addEventListener('click', () => {
//     document.querySelector('.styles').href = 'style.css';
// })

// t2.addEventListener('click', () => {
//     document.querySelector('.styles').href = 'stylet2.css';
// })

// t3.addEventListener('click', () => {
//     document.querySelector('.styles').href = 'stylet3.css';
// })


// // // DOM Selections;
// // // const one = document.querySelector('#one');
// // // const two = document.querySelector('#two');
// // // const three = document.querySelector('#three');
// // // const four = document.querySelector('#four');
// // // const five = document.querySelector('#five');
// // // const six = document.querySelector('#six');
// // // const seven = document.querySelector('#seven');
// // // const eight = document.querySelector('#eight');
// // // const nine = document.querySelector('#nine');
// // // const plus = document.querySelector('#plus');
// // // const zero = document.querySelector('#zeron');
// // // const multiply = document.querySelector('#multiplyn');
// // // const divide = document.querySelector('#divie');
// // // const equal = document.querySelector('#equal');
// // // const reset = document.querySelector('#reset');
// // // const point = document.querySelector('#point');
// // // const del = document.querySelector('#del');
// // const btn = document.querySelectorAll('.items');
// // const displayFig = document.querySelector('.disp_numbers');

// // // Event listeners and functions for the buttons
// // let btns = btn.forEach(i => {
// //     i.addEventListener('click', (e) => {
// //         console.log(e.target.value)
// //         displayFig += e.target.innerText;
// //         //displayFig = displayFig.target.value + e
        
// //     })
// // } )
// // //btn.addEventListener('click', (e) => {
// //     //console.log(e.target.value);
// //     // displayFig+= btn
// // //})
// // displayFig


// // DOM Selections

// const one = document.querySelector('#one');
// const numBtns = document.querySelectorAll('.num');
// const operators = document.querySelectorAll('.operate');
// const del = document.querySelector('.del');
// const reset = document.querySelector('.reset');
// const equal = document.querySelector('.equal');
// const currentOperandTextElement = document.querySelector('.disp_numbers2');
// const previousOperandTextElement = document.querySelector('.disp_numbers');

// class Calculator{
//     constructor(currentOperandTextElement, previousOperandTextElemnt){
//         this.previousOperandTextElemnt = previousOperandTextElemnt
//         this.currentOperandTextElement = currentOperandTextElement
//         this.clear()
//     }

//     clear(){
//         this.currentOperand = '';
//         this.previousOperand = '';
//         this.operation = undefined
//     }

//     delete(){

//     }

//     appendNumber(number){
//         this.currentOperandTextElement = this.currentOperand.toString() + number.toString()
//     }

//     chooseOpertaion(operation){

//     }

//     compute(){

//     }

//     updateDisplay(){
//         this.curentOperandTextElement.innerText = this.curentOperand
//     }
// }

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numBtns.forEach(e => {
//     e.addEventListener('click', () => {
//         calculator.appendNumber(button.innerHTML)
//         calculator.updateDisplay()
//     })
// })


// one.addEventListener('click', () => {
//     display.innerHTML += one.textContent
// })
// //     })
// // });




// Copied and pasted


class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.updateDisplay()
})







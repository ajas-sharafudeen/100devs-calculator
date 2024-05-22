//accept user inputs of number, operator, and number - done
//should accept decimel numbers - done
//store inputs - done
//recognize inputs and perform calculations - done
//result

//additional features
//accept longer arithmetic operations - done
//display all input as it is being entered - done
//store previous total as start of next operation - done
//clear button should clear all entries - done
//should prevent invalid inputs (like operators next to each other, two decimal points)

const keys = document.querySelector('.calculator-buttons')

keys.addEventListener('click', event => {
  const { target } = event
  const { value } = target
  if (!target.matches('button')) {
    return
  } else {
    calculator.parseInput(value)
    // console.log(value)
  }
})

const calculator = {
  displayText: '0',
  prevTotal: null,

  parseInput(value) {
    //have any of the "special buttons" been clicked
    switch (value) {
      case '=':
        this.calcAnswer(this.displayText)
        break;
      case 'AC':
        this.clearAll()
        break;
      case '.':
        if (this.displayText === 0) {
          this.addText('0.')
        } else {
          this.addText(value)
        }
        break;
      default:
        this.addText(value)
        break;
    }
  },
  addText(value) {
    if (this.displayText === '0') {
      this.displayText = ''
    } else if (this.prevTotal !== null) {
      this.displayText = this.prevTotal
      this.prevTotal = null
    }
    if (isNaN(+(value)) && isNaN(+(this.displayText))) {
      if (isNaN(this.displayText.slice(-1))) {
        return
      }
    }
    this.displayText += value
    this.outputText(this.displayText)
  },

  outputText(text) {
    document.querySelector('.calculator-screen').value = text
  },

  calcAnswer(equation) {
    let result = Function('return ' + equation)()
    this.outputText(result)
  },

  clearAll() {
    this.displayText = '0'
    this.prevTotal = null
    this.outputText(this.displayText)
  }
}
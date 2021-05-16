const DOM = {
    virtualKeybord: document.getElementById('virtualKeybord'),
    finder: document.getElementById('finder')
}

const forkCaracteres = {
    verifyCaracter(event) {
        let clickedElement = String(event.srcElement.localName) != 'td'

        if (clickedElement) {
            return
        } else {
            forkCaracteres.fork(event.toElement.outerText)
        }
    },

    fork(key) {
        const display = DOM.finder

        clear.removeZero(display)

        function addText() {
            display.textContent += key
        }

        switch (key) {
            case 'C':
                clear.clearAll(display)
                break
            case '=':
                calc.result(display)
                break
            case '': // backspace
                clear.clearLastNumber(display)
                break
            default:
                addText()
        }
    },
}

const calc = {
    mainCalc(simbols, calcValues) {
        let index = 0

        let result

        simbols.forEach((simbol) => {

            const firstNumber = Number(calcValues[index])
            const secondNumber = Number(calcValues[index + 1])

            switch (simbol) {
                case '÷':
                    result = firstNumber / secondNumber
                    break
                case '+':
                    result = firstNumber + secondNumber
                    break
                case '–':
                    result = firstNumber - secondNumber
                    break
                case 'x':
                    result = firstNumber * secondNumber
                    break
            }

            calcValues.splice(index, 1)
            calcValues[index] = result
        })

        return result
    },

    result(display) {
        const displayText = display.textContent

        const simbols = calc.simbols(displayText)

        const arrayValues = displayText.split(/[÷\+–x]/)

        let calcValues = []

        for (let i = 0; i < arrayValues.length; i++) {
            if (arrayValues[i] != '') {
                calcValues.push(arrayValues[i])
            }
        }

        display.textContent = calc.mainCalc(simbols, calcValues)
    },

    simbols(displayText) {
        const arraySimbols = displayText.split('')

        let simbols = []

        for (let i = 0; i < arraySimbols.length; i++) {
            if (arraySimbols[i] == '÷' || arraySimbols[i] == '+' || arraySimbols[i] == '–' || arraySimbols[i] == 'x') {
                if (arraySimbols[i] != arraySimbols[i + 1]) simbols.push(arraySimbols[i])
            }
        }

        return simbols
    }
}

const clear = {
    removeZero(display) {
        if (display.textContent.indexOf('0') == 0) {
            display.textContent = ''
        } else {
            return
        }
    },

    clearAll(display) {
        display.textContent = '0'
    },

    clearLastNumber(display) {
        const textDisplay = display.textContent
        const amountNumbers = textDisplay.length - 1

        if (textDisplay == '' || amountNumbers < 1) {
            clear.clearAll(display)
        } else {
            display.textContent = textDisplay.substring(0, amountNumbers)
        }
    }
}

DOM.virtualKeybord.addEventListener('click', forkCaracteres.verifyCaracter)
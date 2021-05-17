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
    }
}

const calc = {
    mainCalc(simbols, calcValues, displayText) {
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

        if (result == undefined || isNaN(result)) {
            new Error(
                alert('Erro: o cálculo não faz sentido\nTente novamente')
            )
            return displayText.replace('.',',')
        } else {
            return String(result.toLocaleString('pt-BR', {
                minimunFractionDigits: 2,
                maximumFractionDigits: 2
            }))
        }
    },

    fixSubtraction(displayText) {
        let simbol
        displayText = displayText.split('')

        if (displayText[0] == '–' || displayText[0] == '+') {
            simbol = displayText.splice(0, 1)
        }
        
        return {
            newText: displayText.join(''),
            auxSimbol: simbol
        }
    },

    result(display) {
        let displayText = display.textContent.replace(/,/g, '.')

        let {newText, auxSimbol} = calc.fixSubtraction(displayText)

        const simbols = calc.simbols(newText)

        const arrayValues = newText.split(/[÷\+–x]/)

        let calcValues = []
        
        for (let i = 0; i < arrayValues.length; i++) {
            if (arrayValues[i] != '') {
                calcValues.push(arrayValues[i])
            }
        }

        if (auxSimbol) {
            if (auxSimbol == '–') auxSimbol = '-'
            calcValues[0] = `${auxSimbol}${calcValues[0]}`
        }

        display.textContent = calc.mainCalc(simbols, calcValues, displayText)
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
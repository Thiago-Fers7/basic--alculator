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
        
        display.textContent += key
    },
}

const clear = {
    removeZero(display) {
        if (display.textContent.indexOf('0') == 0) {
            display.textContent = ''
        } else {
            return
        }
    }
}

DOM.virtualKeybord.addEventListener('click', forkCaracteres.verifyCaracter)
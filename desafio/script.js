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

        display.textContent += key
    },
}

DOM.virtualKeybord.addEventListener('click', forkCaracteres.verifyCaracter)
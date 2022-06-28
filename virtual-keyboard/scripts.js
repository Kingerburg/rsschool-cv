const body = document.querySelector('body');
let textArea = document.createElement('textarea');
textArea.classList.add('textArea');
body.append(textArea);
textArea.focus();

let engNameKey = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫', '↹', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', '⇪', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', '↵', '⇧', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '↑', '⇧', 'ctrl', '⊞', 'alt', '|—|', 'alt', 'ctrl', '←', '↓', '→'];

let engNameKeyButton = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '', '', '', '', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '', '', '', '', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '', '', '', '', '', '', '', '', '', '', '', '', '', ''];

let engNameKeySup = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '', '    ', '', '', '', '', '', '', '', '', '', '', '{', '}', '|', '', '', '', '', '', '', '', '', '', '', ':', '"', '', '', '', '', '', '', '', '', '', '<', '>', '?', '', '', '', '', '', '', '', '', '', '', ''];

let rusNameKey = ['Ё', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '', '', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '', '', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '', '', '', '', '', '', '', '', '', '', ''];

let rusNameKeyButton = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '⌫', '↹', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', '⇪', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '↵', '⇧', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '↑', '⇧', 'ctrl', '⊞', 'alt', '|—|', 'alt', 'ctrl', '←', '↓', '→'];

let rusNameKeySup = ['', '!', '"', '№', ';', '', ':', '?', '*', '', '', '', '', '', '    ', '', '', '', '', '', '', '', '', '', '', '', '', '/', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ',', '', '', '', '', '', '', '', '', '', '', ''];

let nameAttributes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];

let language = 'eng';
let locallanguage = localStorage.getItem('Language')


let getLanguage = () => {
    locallanguage = localStorage.getItem('Language')
}

getLanguage();

if (locallanguage == null || locallanguage == 'eng') {
    language = 'eng'
    localStorage.setItem('Language', language)
    getLanguage();
} else if (locallanguage == 'rus') {
    language = 'rus'
    localStorage.setItem('Language', language)
    getLanguage();
}

let createKeyButton = () => {

    let container = document.createElement('div');
    container.classList.add('container');
    body.append(container);
    if (locallanguage == 'eng') {
        for (let i = 0; i < 63; i++) {

            let button = document.createElement('div');
            button.classList.add('button');
            container.append(button);
            
            let engNameKeySupBtn = document.createElement('span');
            engNameKeySupBtn.classList.add('engNameKeySup');
            button.append(engNameKeySupBtn);
                engNameKeySupBtn = document.querySelectorAll('.engNameKeySup');
                    engNameKeySupBtn[i].textContent = engNameKeySup[i];
    
            let rusNameKeySupBtn = document.createElement('span');
            rusNameKeySupBtn.classList.add('rusNameKeySup');
            button.append(rusNameKeySupBtn);
                rusNameKeySupBtn = document.querySelectorAll('.rusNameKeySup');
                    rusNameKeySupBtn[i].textContent = rusNameKeySup[i];
    
            let engNameKeyBtn = document.createElement('span');
            engNameKeyBtn.classList.add('engNameKey');
            button.append(engNameKeyBtn);
                engNameKeyBtn = document.querySelectorAll('.engNameKey');
                    engNameKeyBtn[i].textContent = engNameKey[i];
    
            let rusNameKeyBtn = document.createElement('span');
            rusNameKeyBtn.classList.add('rusNameKey');
            button.append(rusNameKeyBtn);
                rusNameKeyBtn = document.querySelectorAll('.rusNameKey');
                    rusNameKeyBtn[i].textContent = rusNameKey[i];
    
            button.setAttribute('value', nameAttributes[i])
        }
    } else {
        for (let i = 0; i < 63; i++) {

            let button = document.createElement('div');
            button.classList.add('button');
            container.append(button);
            
            let engNameKeySupBtn = document.createElement('span');
            engNameKeySupBtn.classList.add('engNameKeySup');
            button.append(engNameKeySupBtn);
                engNameKeySupBtn = document.querySelectorAll('.engNameKeySup');
                    engNameKeySupBtn[i].textContent = engNameKeySup[i];
    
            let rusNameKeySupBtn = document.createElement('span');
            rusNameKeySupBtn.classList.add('rusNameKeySup');
            button.append(rusNameKeySupBtn);
                rusNameKeySupBtn = document.querySelectorAll('.rusNameKeySup');
                    rusNameKeySupBtn[i].textContent = rusNameKeySup[i];
    
            let engNameKeyBtn = document.createElement('span');
            engNameKeyBtn.classList.add('engNameKey');
            button.append(engNameKeyBtn);
                engNameKeyBtn = document.querySelectorAll('.engNameKey');
                    engNameKeyBtn[i].textContent = rusNameKeyButton[i];
    
            let rusNameKeyBtn = document.createElement('span');
            rusNameKeyBtn.classList.add('rusNameKey');
            button.append(rusNameKeyBtn);
                rusNameKeyBtn = document.querySelectorAll('.rusNameKey');
                    rusNameKeyBtn[i].textContent = engNameKeyButton[i];
    
            button.setAttribute('value', nameAttributes[i])
        }

    }
    

    let logoRS = document.createElement('div');
    logoRS.classList.add('button');
    container.append(logoRS);

    logoRS.innerHTML = `<a href="https://rs.school/" target="_blank" style="color: antiquewhite;">RS</a>${locallanguage}`;
    logoRS.style.display = 'flex';
    logoRS.style.flexFlow = 'wrap';
    logoRS.style.alignItems = 'center';
    logoRS.style.justifyContent = 'center';
    logoRS.style.fontSize = '16px';
    logoRS.style.color = 'antiquewhite'

}

createKeyButton();

let description = document.createElement('div')
description.classList.add('description')
body.appendChild(description)
description.style.textAlign = 'center'
description.innerHTML = `Клавиатура сделана на ОС Window <br> <br> Переключение языка на виртуальной клавиатуре L shift + L Alt`



let shift = false;
let capslock = false;
let key = {
    eng: {
        0: ['`', '~'],
        1: ['1','!'],
        2: ['2','@'],
        3: ['3','#'],
        4: ['4','$'],
        5: ['5','%'],
        6: ['6','^'],
        7: ['7','&'],
        8: ['8','*'],
        9: ['9','('],
        10: ['0',')'],
        11: ['-','_'],
        12: ['=','+'],
        13: ['',''],
        14: ['    ','    '],
        15: ['q','Q'],
        16: ['w','W'],
        17: ['e','E'],
        18: ['r','R'],
        19: ['t','T'],
        20: ['y','Y'],
        21: ['u','U'],
        22: ['i','I'],
        23: ['o','O'],
        24: ['p','P'],
        25: ['[','{'],
        26: [']','}'],
        27: ['\\','|'],
        28: ['',''],
        29: ['a','A'],
        30: ['s','S'],
        31: ['d','D'],
        32: ['f','F'],
        33: ['g','G'],
        34: ['h','H'],
        35: ['j','J'],
        36: ['k','K'],
        37: ['l','L'],
        38: [';',':'],
        39: [`'`,'"'],
        40: ['',''],
        41: ['',''],
        42: ['z','Z'],
        43: ['x','X'],
        44: ['c','C'],
        45: ['v','V'],
        46: ['b','B'],
        47: ['n','N'],
        48: ['m','M'],
        49: [',','<'],
        50: ['.','>'],
        51: ['/','?'],
        52: ['',''],
        53: ['',''],
        54: ['',''],
        55: ['',''],
        56: ['',''],
        57: [' ',' '],
        58: ['',''],
        59: ['',''],
        60: ['',''],
        61: ['',''],
        62: ['',''],
        63: ['',''],
    },
    rus: {
        0: ['ё', 'Ё'],
        1: ['1','!'],
        2: ['2','"'],
        3: ['3','№'],
        4: ['4',';'],
        5: ['5','%'],
        6: ['6',':'],
        7: ['7','?'],
        8: ['8','*'],
        9: ['9','('],
        10: ['0',')'],
        11: ['-','_'],
        12: ['=','+'],
        13: ['',''],
        14: ['    ','    '],
        15: ['й','Й'],
        16: ['ц','Ц'],
        17: ['у','У'],
        18: ['к','К'],
        19: ['е','Е'],
        20: ['н','Н'],
        21: ['г','Г'],
        22: ['ш','Ш'],
        23: ['щ','Щ'],
        24: ['з','З'],
        25: ['х','Х'],
        26: ['ъ','Ъ'],
        27: ['\\','/'],
        28: ['',''],
        29: ['ф','Ф'],
        30: ['ы','Ы'],
        31: ['в','В'],
        32: ['а','А'],
        33: ['п','П'],
        34: ['р','Р'],
        35: ['о','О'],
        36: ['л','Л'],
        37: ['д','Д'],
        38: ['ж','Ж'],
        39: ['э','Э'],
        40: ['',''],
        41: ['',''],
        42: ['я','Я'],
        43: ['ч','Ч'],
        44: ['с','С'],
        45: ['м','М'],
        46: ['и','И'],
        47: ['т','Т'],
        48: ['ь','Ь'],
        49: ['б','Б'],
        50: ['ю','Ю'],
        51: ['.',','],
        52: ['',''],
        53: ['',''],
        54: ['',''],
        55: ['',''],
        56: ['',''],
        57: [' ',' '],
        58: ['',''],
        59: ['',''],
        60: ['',''],
        61: ['',''],
        62: ['',''],
        63: ['',''],
    }
}

const button = document.querySelectorAll('.button')
let start = textArea.selectionStart
let end = textArea.selectionEnd
textArea.addEventListener('click', () =>{
    start = textArea.selectionStart
    end = textArea.selectionEnd
})
button.forEach((item, index) => {
    var txtBsk = ''
    var txtReplace = ''

    item.addEventListener('click', (e) => {
        language
        textArea.focus();
        start = textArea.selectionStart
        end = textArea.selectionEnd
        if (window.getSelection) {
            txtBsk = window.getSelection().toString();
            textArea.value = textArea.value.replace(txtBsk, txtReplace);
        }

        if (language === 'eng' && !shift && !capslock) {
            textArea.value += key[locallanguage][index][0];
        }
        if (language === 'rus' && !shift && !capslock) {
            textArea.value += key[locallanguage][index][0];
        }

        if (index && index != 41 && index != 53 && index != 28) {
            item.classList.add('button-active')
            setTimeout(() => {
                item.classList.remove('button-active');
            }, 200);
        } 

        if (index == 41 || index == 53 || index == 28) {
            item.classList.toggle('button-active')
        }
        if (index == 28) {
            button[41].classList.remove('button-active')
            button[53].classList.remove('button-active')

        } else if (index == 41) {
            button[28].classList.remove('button-active')
            button[53].classList.remove('button-active')
        } else if (index == 53) {
            button[28].classList.remove('button-active')
            button[41].classList.remove('button-active')
        }

        if (index == 13) {
            textArea.value = textArea.value.slice(0, -1);
        }

        if (index == 40) {
            textArea.value += String.fromCharCode(13);
        }

        if (index == 28) {
            capslock = true
        } else if (capslock) {
            textArea.value += key[locallanguage][index][0].toUpperCase();
        }

        if (!button[28].classList.contains('button-active')){
            capslock = false
        }

        if (index == 41) {
            shift = true
        } else if (shift) {
            textArea.value += key[locallanguage][index][1];
            button[41].classList.remove('button-active')
            button[53].classList.remove('button-active')
        }

        if (!button[41].classList.contains('button-active') || !button[41].classList.contains('button-active')) {
            shift = false
        }

        if (index == 53) {
            shift = true
        }
        if (locallanguage == 'eng' && button[41].classList.contains('button-active') + index == 56) {
            language = 'rus'
            localStorage.setItem('Language', language)
            button[63].innerHTML = `<a href="https://rs.school/" target="_blank" style="color: antiquewhite;">RS</a>${language}`
            getLanguage();
            
            for (let i = 0; i < 63; i++) {
                var engNameKeyBtn = document.querySelectorAll('.engNameKey');
                engNameKeyBtn[i].textContent = rusNameKeyButton[i];
                var rusNameKeyBtn = document.querySelectorAll('.rusNameKey');
                rusNameKeyBtn[i].textContent = engNameKeyButton[i];
            }

        } else if (locallanguage == 'rus' && button[41].classList.contains('button-active') + index == 56) {
            language = 'eng'
            localStorage.setItem('Language', language)
            button[63].innerHTML = `<a href="https://rs.school/" target="_blank" style="color: antiquewhite;">RS</a>${language}`

            getLanguage();
            for (let i = 0; i < 63; i++) {
                var rusNameKeyBtn = document.querySelectorAll('.rusNameKey');
                rusNameKeyBtn[i].textContent = rusNameKey[i];
                var engNameKeyBtn = document.querySelectorAll('.engNameKey');
                engNameKeyBtn[i].textContent = engNameKey[i];
            }
        }

        if (index == 60) {
            start--
            end--
            textArea.focus()
            textArea.setSelectionRange(start, end)

        }
        if (index == 62) {
            start++
            end++
            textArea.focus()
            textArea.setSelectionRange(start, end)

        }
    });
})

textArea.addEventListener('keydown', (e) => {
    textArea.focus();
    var txtBsk = ''
    var txtReplace = ''

    button.forEach((item, index) => {
        if (e.code == 'AltLeft'  || e.code == 'AltRight' || e.code == 'CapsLock' || e.code == 'ShiftLeft') {
            e.preventDefault()
        }
        if (e.code == item.getAttribute('value')) {
            item.classList.toggle('button-active');
        }

        if (e.code == 'Tab' && e.code == item.getAttribute('value')) {
            e.preventDefault()
            textArea.value += key[locallanguage][index][0];
        }
    })
})

textArea.addEventListener('keyup', (e) => {
    textArea.focus();
    if (locallanguage == 'rus' && e.shiftKey + e.altKey) {
        language = 'eng'
        localStorage.setItem('Language', language)
        button[63].innerHTML = `<a href="https://rs.school/" target="_blank" style="color: antiquewhite;">RS</a>${language}`
        for (let i = 0; i < 63; i++) {
            engNameKeyBtn = document.querySelectorAll('.engNameKey');
            engNameKeyBtn[i].textContent = engNameKey[i];
            rusNameKey = document.querySelectorAll('.rusNameKey')
            rusNameKey[i].textContent = rusNameKeyButton[i]
        }
        getLanguage();

    } else if (locallanguage == 'eng' && e.shiftKey + e.altKey) {
        language = 'rus'
        localStorage.setItem('Language', language)
        button[63].innerHTML = `<a href="https://rs.school/" target="_blank" style="color: antiquewhite;">RS</a>${language}`
        for (let i = 0; i < 63; i++) {
            engNameKeyBtn = document.querySelectorAll('.engNameKey')
            engNameKeyBtn[i].textContent = rusNameKeyButton[i]
            rusNameKey = document.querySelectorAll('.rusNameKey')
            rusNameKey[i].textContent = engNameKeyButton[i]
        }
        getLanguage();
    }
    button.forEach((item, index) => {

        if (e.code == item.getAttribute('value') && e.code != 'CapsLock') {
            setTimeout(() => {
                item.classList.remove('button-active');
                }, 100);
        }


    })
})

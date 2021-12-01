let numberOne = '';
let numberTwo = ''; 
let operandFunction = ''; 
let finish = false;
import {digit, action, out, divideNobe, myltiplyNobe, minusNobe, plusNobe} from './view.js';

function clearAll () {
    numberOne = ''; 
    numberTwo = ''; 
    operandFunction = ''; 
    finish = false;
    out.textContent = 0;
}

document.querySelector('.C').addEventListener ('click', clearAll);

document.querySelector('.buttons').addEventListener ('click', keyBoardUse);

function keyBoardUse (event) {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('C')) return;
    out.textContent = '';
    const key = event.target.textContent;
    if (digit.includes(key)) {
        if (numberTwo === '' && operandFunction === '') 
        {
        numberOne += key;
        out.textContent = numberOne;
        }
        else if (numberOne !== '' && numberTwo !== '' && finish) {
            numberTwo = key;
            finish = false;
            out.textContent = numberTwo;
        }
        else {
            numberTwo += key;
            out.textContent = numberTwo;    
        }
    }
    if (action.includes(key)) {
        operandFunction = key;
        out.textContent = operandFunction;
        return;
    }
    if (key === '=') {
        if (numberTwo === '') numberTwo = numberOne;
        switch (operandFunction) {
            case divideNobe.textContent:
                if (numberTwo === '0') {
                    out.textContent = 'Err';
                    return;
                }
                numberOne = numberOne / numberTwo;
            break;
            case myltiplyNobe.textContent:
                numberOne = numberOne * numberTwo;
            break;
            case minusNobe.textContent:
                numberOne = numberOne - numberTwo;
            break;
            case plusNobe.textContent:
                numberOne = (+numberOne) + (+numberTwo);
            break;
        }
        finish = true;
        out.textContent = numberOne;
    }
    return;
}

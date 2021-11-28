let numberOne = '';
let numberTwo = ''; 
let operandFunction = ''; 
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['/', 'x', '-', '+'];
let out = document.querySelector('.calc-screen p');

function clearAll () {
    numberOne = ''; 
    numberTwo = ''; 
    operandFunction = ''; 
    finish = false;
    out.textContent = 0;
}
document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('ac')) return;
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
            case "/":
                if (numberTwo === '0') {
                    out.textContent = 'Error';
                    return;
                }
                numberOne = numberOne / numberTwo;
            break;
            case "x":
                numberOne = numberOne * numberTwo;
            break;
            case "-":
                numberOne = numberOne - numberTwo;
            break;
            case "+":
                numberOne = (+numberOne) + (+numberTwo);
            break;
        }
        finish = true;
        out.textContent = numberOne;
    }
    return;
}

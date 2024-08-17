
let a=10;
let b=20;
let c=0;

function add(a,b){
    return a+b;
};

function sub(a,b){
    return a-b;
};

function mul(a,b){
    return a*b;
};

function division(a,b){
    return a/b;
};

function modulus(a,b){
    return a%b;
}


document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');
    const numberButtons = document.querySelectorAll('.numbers .button');
    const operatorButtons = document.querySelectorAll('.ops .button2');

    let currentExpression = '';

    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === 'clear') {
                currentExpression = '';
                result.textContent = '';
            } else if (value === 'back') {
                currentExpression = currentExpression.slice(0, -1);
                result.textContent = currentExpression;
            } else {
                currentExpression += value;
                result.textContent = currentExpression;
            }
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === '=') {
                try {
                    currentExpression = currentExpression.replace(/x/g, '*');
                    const evaluatedResult = eval(currentExpression);
                    result.textContent = evaluatedResult;
                    currentExpression = evaluatedResult.toString();
                } catch (error) {
                    result.textContent = 'Error';
                    currentExpression = '';
                }
            } else {
                currentExpression += ` ${value} `;
                result.textContent = currentExpression;
            }
        });
    });
});
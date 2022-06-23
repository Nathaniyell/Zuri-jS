const calculate = (first, second, func)=>{
    switch(func){
        case '%':
            return first % second;
            break;
            case '+':
                return first + second;
                break;
                case '-':
                    return first - second;
                    break;
                    case '/':
                    return first / second;
                    break;
                    case '*':
                        return first * second;
    }
};
const getInput =() => {
    let firstNumber = prompt('Welcome, please enter your first number : ');
    let secondNumber = prompt('Please enter your second number : ');
    let anOperator = prompt('Please select any of the following: [+, -, *, /, %,]');
    const result = calculate(Number(firstNumber), Number(secondNumber), anOperator);
    const finalAnswer = `The result of your calculation is ${result}`
    alert(finalAnswer);
};
getInput();
const prompt = require("prompt-sync")();
let input1 = Number(prompt("Enter the fristNumber = "));
let multiemediya = prompt("Enter = + - * / = any choise = ");
let input2 = Number(prompt("Enter the secundNumber = "));
switch (multiemediya) {
    case '+':
        {
            let sum = input1 + input2;
            console.log(sum);
            break;
        }
    case '-':
        {
            sum = input1 - input2;
            console.log(sum);
            break;
        }
    case '*':
        {
            sum = input1 * input2;
            console.log(sum);
            break;
        }
    case '/':
        {
            sum = input1 / input2;
            console.log(sum);
            break;
        }
    default:
        console.log("error");
        break;
}
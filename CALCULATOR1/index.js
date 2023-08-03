import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation"; //error -1
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000);
    });
};
async function welcome() {
    let rainbow = chalkAnimation.rainbow('lets start calculation');
    await sleep();
    rainbow.stop();
}
console.log(` _____________________
|  _________________  |
| | JO           0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);
await welcome(); // not error but await should be added
async function askquestion() {
    const answers = await inquirer //const answers variable was not assigned
        .prompt([
        {
            type: "list",
            name: "operator",
            message: "which opreation you want to perfom?",
            choices: ["Addition", "Subtraction", "Division", "Multiplication"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter number 1"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter number 2"
        }
    ]); // here was arrow function --- then. answers() it was not needed,also temination brackets wer missing
    if (answers.operator == "Addition") {
        chalk.yellow(console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if (answers.operator == "Subtraction") {
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if (answers.operator == "Multiplication") {
        console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
    else if (answers.operator == "Division") {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
}
async function startagain() {
    do {
        await askquestion(); // function was not added
        var again = await inquirer
            .prompt({
            type: "input",
            name: "restart",
            message: "Do you want to continous? press y or n",
        });
        //while was not added
    } while (again.restart == 'Y' || again.restart == 'y' || again.restart == 'YES' || again.restart == 'Yes' || again.restart == 'yes');
}
startagain(); // this function was not added. 

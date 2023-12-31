

// This portion is used to import prompt function, to get input from user.
import * as promptSync from "prompt-sync" ;  // We are importing all (*) options from 'promt-sync' library and naming it promptSync
const prompt = promptSync ();     // Creating instance and assingin it to prompt constant. 

//This portion will be printed as is.. to guide the user for selection
console.log('Welcome to my Command Line Calculator');
console.log("Please select the operation to perform. ('+' for Addition), ('-' for substraction), ('*' for Multiplication), ('/' for Division), ");

// This portion will take input from user. 1- Operation, 2- First Number, 3- Second Number
let operation = prompt("Enter the operation sign: ");   //This will ask user to select the operation from above. and store in operation var.
let firstNumber = prompt ('Enter first number: ');     //This will ask user to enter first number and will store it in firstNumber.
let secondNumber = prompt ('Enter second number: ');    // This will ask user to enter second number and will store it in second Number.

//We are converting numbers received in 'string' type to 'number' type.
let a = parseInt (firstNumber);  // The input received through prompt is in string type. we've to convert it to number. 
let b = parseInt (secondNumber); // 'parseInt' function is used to convert string into number.

// Now we'll use If-else chain to do the calculator operation. 

if (operation == '+') {
    let addition = a + b;
    console.log(`The addition of ${a} and ${b} is : ${addition}`); // addition
} else if (operation == '-') {
    let subtraction = a - b;
    console.log(`The subtraction of ${a} and ${b} is : ${subtraction}`);
} else if (operation == '*') {
    let multiplication = a*b;
    console.log(`The multiplication of ${a} and ${b} is : ${multiplication}`);
} else if (operation == '/') {
    let division = a/b;
    console.log(`The division of ${a} and ${b} is : ${division}`);
}
 else {
    console.log("Wrong input given, please try again with correct input");
}
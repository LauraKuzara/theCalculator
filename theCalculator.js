let userName = "";

if (userName) {
    console.log(`Hello ${userName}!`);
} else {
    console.log("Hello, guest!");
}

let num1 = 10;
let num2 = 5;

let operation = "add";

if (operation === "add") {
    let result = num1 + num2;
    console.log(`Sum of ${num1} and ${num2} is ${result}.`);
} else if (operation === "subtract") {
    let result = num1 - num2;
    console.log(`Difference of ${num1} and ${num2} is ${result}.`);
} else if (operation === "multiply") {
    let result = num1 * num2;
    console.log(`Product of ${num1} and ${num2} is ${result}.`);
} else if (operation === "divide") {
    // Check if num2 is not zero to avoid division by zero
    if (num2 !== 0) {
        let result = num1 / num2;
        console.log(`Division of ${num1} and ${num2} is ${result}.`);
    } else {
        console.log("Division by zero is undefined.");
    }
} else if (operation === "modulus") {
    // Check if num2 is not zero to avoid modulus by zero
    if (num2 !== 0) {
        let result = num1 % num2;
        console.log(`Modulus of ${num1} and ${num2} is ${result}.`);
    } else {
        console.log("Modulus by zero is undefined.");
    }
} else {
    console.log(`${operation} is an invalid operation.`);
}
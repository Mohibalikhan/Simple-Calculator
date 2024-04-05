#! /usr/bin/env node
//Above line is called SHABANG
import inquirer from "inquirer"; //inquirer sawal pochta ha
//([{message}])//wo message jo hame chahie user se
//await matlab ruko user se sawal ke jawab lene do phir age jana
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "FirstNumber" },
    //real calculator me phela number leke pochta ha ke iske uper konsa operation perform karna ha
    { message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"] },
    //choices:["+","-","/","*"]},// we also use this for better understanding 
    { message: "Enter Second Number", type: "number", name: "SecondNumber" },
]);
//then we use conditional statements
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else {
    console.log("You Enter valid number");
}
console.log("Thank you for using my Calculator!");

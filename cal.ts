#! /user/bin/env node

import inquirer from "inquirer"

const answer = await inquirer.prompt([{

    type: "number",
    name: "Number1",
    message: "write your Number1",
},
 {
    type: "number",
    name: "Number2",
    message: "write your Number2",
},
{
    type: "list",
    name: "operator",
    message: "write your operator",
    choices: ["subtraction" , "addition" , "multiplication" , "division"]
}])

if(answer.operator === "addition"){
    console.log(answer.Number1 + answer.Number2)
}
else if(answer.operator === "subtraction"){

    console.log(answer.Number1 - answer.Number2)
}
else if(answer.operator === "multiplication"){

    console.log(answer.Number1 * answer.Number2)
}
else if(answer.operator === "division"){
    console.log(answer.Number1 / answer.Number2) 
} 
else{
    console.log("please select a valid number")
}

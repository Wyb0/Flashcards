var basicCard = require("./basiccard.js")
var inquirer = require("inquirer")

var basicFlash = [
    new basicCard("What is 2+2?", "4"),
    new basicCard("What is 1+1?", "2"),
    new basicCard("What is 3+3?", "6")
]
//console.log(basicFlash)


var counter = 0;

function runQuiz () {
    for (i=0; i<basicFlash.length; i++) {
        if (counter < basicFlash.length) {
            inquirer.prompt([
                {
                type: "input",
                message: "Question: " + (basicFlash[i].front),
                name: "question"
                }
        ])
    }
}

//run quiz
runQuiz()





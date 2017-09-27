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
    //for (i=0; i<basicFlash.length; i++) {
        if (counter < basicFlash.length) {
            inquirer.prompt([
                {
                type: "input",
                message: "Question: " + (basicFlash[counter].front),
                name: "question"
                } 
        ])
        .then(function (response) {
            //console.log("User Answer: ", response, "Counter: ", counter)
            if (basicFlash[counter].back == response.question) {
            //console.log(response.question)
            //console.log(basicFlash[counter].back)
            console.log("That is correct. The answer is " + basicFlash[counter].back)
            counter++
            runQuiz()
            } else {
                console.log("That is incorrect. The answer is " + basicFlash[counter].back)
                counter++
                runQuiz()
            }
        })
    }
}

//run quiz
runQuiz()





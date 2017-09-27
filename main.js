var basicCard = require("./basiccard.js")
var inquirer = require("inquirer")

var basicFlash = [
    new basicCard("\n Question: What is the the Orlando Magic Masoct's name?", "stuff"),
    new basicCard("\n Question: What year was the Orlando Magic established?", "1989"),
    new basicCard("\n Question: What year was the last time the Orlando Magic appeared in the NBA Finals?", "2010"),
    new basicCard("\n Question: What is the name of the arena the Orlando Magic play in?", "Amway"),
    new basicCard("\n Question: How many past Orlando Magic players are in the NBA Hall of Fame?", "4")
]
//console.log(basicFlash)

var counter = 0;

console.log("\nWelcome to the Orlando Magic quiz!")

function runQuiz () {
    //for (i=0; i<basicFlash.length; i++) {
        if (counter < basicFlash.length) {
            inquirer.prompt([
                {
                type: "input",
                message: (basicFlash[counter].front),
                name: "question"
                } 
        ])
        .then(function (response) {
            //console.log("User Answer: ", response, "Counter: ", counter)
            if (basicFlash[counter].back == response.question) {
            //console.log(response.question)
            //console.log(basicFlash[counter].back)
            console.log("\nThat is correct. The answer is " + basicFlash[counter].back)
            counter++
            runQuiz()
            } else {
                console.log("\nThat is incorrect. The answer is " + basicFlash[counter].back)
                counter++
                runQuiz()
            }
        })
    }
}

//run quiz
runQuiz()





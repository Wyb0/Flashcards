var basicCard = require("./basiccard.js")
var inquirer = require("inquirer")

var basicFlash = [
    new basicCard("What is the the Orlando Magic Masoct's name?", "stuff"),
    new basicCard("What year was the Orlando Magic established?", "1989"),
    new basicCard("What year was the last time the Orlando Magic appeared in the NBA Finals?", "2010")
    new basicCard("What is the name of the arena the Orlando Magic play in?", "Amway")
    new basicCard("How many past Orlando Magic players are in the NBA Hall of Fame?", "4")
]
//console.log(basicFlash)

var counter = 0;

function runQuiz () {
    console.log("Welcome to the Orlando Magic quiz!")
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





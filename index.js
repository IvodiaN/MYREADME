const inquirer = require('inquirer');
const fs = require('fs');
const  generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Provide your Github repo's name",
        name: "Username"
    },
    {
        type: "input",
        message: "Provide your email address",
        name: "Email"
    },
    {
        type: "input",
        message: "Provide title of your project",
        name: "Title"
    },
    {
        type: "input",
        message: "Briefly describe your project please",
        name: "Description"
    },
    {
        type: "input",
        message: "Which dependencies should be installed",
        name: "Installation"
    },
    {
        type: "input",
        message: "Purpose of the app",
        name: "Description"
    },
    {
        type: "input",
        message: "What license is used for this markdown",
        name: "License"
    },
    {
        type: "input",
        message: "Contributors?",
        name: "Contributor"
    },
    {
        type: "input",
        message: "Command used to test the app",
        name: "Test"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./MYREADME/"+fileName, data, function (err, data) {
        if (err) {
            return console.log(err)
        }
        console.log("Successfully wrote: " + fileName)
    })
}



// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("MYREADME.md", generateMarkdown(data))
        })

}

// function call to initialize program
init();
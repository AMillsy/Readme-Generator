// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
const questions = require("./utils/questions");
const genMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdown = genMarkdown(data);

  fs.writeFile(fileName, markdown, (err) =>
    err ? console.error(err) : console.log("Success")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => writeToFile("ReadMe.md", response));
}

// Function call to initialize app
init();

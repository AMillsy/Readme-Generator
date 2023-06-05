const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Can you give me a description of the project?",
  },
  {
    type: "input",
    name: "install",
    message: "How do you install the project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of this project?",
  },
  {
    type: "input",
    name: "contribute",
    message: "What is the contributing gidelines for this project?",
  },
  {
    type: "input",
    name: "test",
    message: "How do you test this project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like for this project?",
    choices: [
      "Apache 2.0",
      "GNU 3.0",
      "MIT",
      "BSD 2-Clause",
      "BSD 3-Clause",
      "Boost software License",
      "Creative Commons Zero",
      "None",
    ],
  },
  {
    type: "input",
    name: "gitUsername",
    message: "What is your github Username?",
  },
  {
    type: "input",
    name: "gitEmail",
    message: "What is your email?",
  },
];

module.exports = questions;

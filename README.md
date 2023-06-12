# Readme Generator

## Table of Content

- [User Story & Acceptence Criteria](#user-story)
- [What I have learnt](#what-i-have-learnt)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)

## Walkthrough Video

[Walkthrough]()

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## What I have learnt

This is the first week that we have been introduced into NodeJS which is the V8 Engine that is used in Chrome and other browser to create an application that
works from the Command Line. We learnt how to install and use packages with Npm (Node package manager) which allows us to use other peoples code in a package format.
To get questions and inputs to work with the Command Line we used Inquirer which is a package that allows you to be able to do this functionality. I don't believe that I learnt a lot about how Javascript itself works this weeks, but learning how to setup the backend and how to make decoupled utils scripts so that the functionality of each section is clear and understandable is a huge point that I am going to take away from this week.

## Installation

Clone the project and then in the terminal do:

```bash
  npm i;
```

## Usage

### Run app

Run the app by using:

```bash
node index.js;
```

### Answer Questions

Answers the questions that are presented on the CLI

![Questions for the Readme Generator](./Readme_Images/Inquirer%20Inputs%20and%20answers.png)
![Second set of questions](./Readme_Images/Inquirer%20Inputs%20and%20answers%202.png)

### Readme gets Generated

Readme will be written to the file system at ReadmeExample.md

![Readme Generated](./Readme_Images/GeneratedReadme1.png)
![Readme Preview](./Readme_Images/GeneratedReadme2.png)

## Test

Able to use app by:

```bash
node index.js
```

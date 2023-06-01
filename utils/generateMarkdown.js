// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
if (license === "None") return "";

return `[![License](https://img.shields.io/badge/${license}-blue.svg)](https://opensource.org/licenses/${license})`;

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") return "";

  return [];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)


  ## Installation

  Clone the project and then in the terminal do:

  ``bash
    ${data.install}
  `` 
  ## Usage

  ${data.usage}

  ## How to Contribute

  ${data.contribute}

  ## Test

  ${data.test}

  ## License

  The license that is being used in this project is ${data.license}
 

`;
}

module.exports = generateMarkdown;

/**
 * ADD LINCENSE BADGE:
 *
 * THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
 *
 * GITHUB USERNAME:
 * LINKS TO PROFILE
 * THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
 *
 * EMAIL:
 * THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
 *
 * MAKE A TABLE OF CONTENTS, THAT LINKS TO EACH PART OF THE README
 */

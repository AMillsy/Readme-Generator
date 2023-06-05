const lincenseFinder = require(`./Lincenses`);

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.name === "None") return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseData = lincenseFinder(data.license);
  return `# ${data.title}

  ## Description ${licenseData.badge}

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)


  ## Installation

  Clone the project and then in the terminal do:

 
    ${data.install}
  
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

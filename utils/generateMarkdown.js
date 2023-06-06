const lincenseFinder = require(`./Lincenses`);

function generateBadge(license) {
  const badge = lincenseFinder.getBadge(license);
  return `[![${badge}](https://img.shields.io/badge/License-${badge}-blue.svg)]`;
}

function generateLink(license) {
  const link = lincenseFinder.getLink(license);
  return `${link}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description ${generateBadge(data.license)}(${generateLink(data.license)})

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Test](#test)
  - [License](#license)
  - [Questions](#questions)

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

  The license that is being used in this project is [${
    data.license
  }](${generateLink(data.license)})
  
  ## Questions

  [${data.gitUsername}](https://github.com/${data.gitUsername})
  
  If you have any questions about this project email me @ [${data.gitEmail}](${
    data.gitEmail
  })

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

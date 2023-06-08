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
  
  If you have any questions about this project email me [${data.gitEmail}](${
    data.gitEmail
  })

`;
}

module.exports = generateMarkdown;

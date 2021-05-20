
const license = require('./license-badge.js');

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${license[data.license][2]}

  # ${data.title}

  ## Description
  ${data.description}


  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  

  ## Installation
  ${data.installation}


  ## Usage
  ${data.usage}

  ![alt text](assets/images/filename)

  ## Credits
  ${data.credits}


  ## Contributing
  ${data.contributing}


  ## Tests
  ${data.tests}


  ## Questions
  If you have any questions, you can find my GitHub page [here](https://github.com/${data.github}). You may also reach me by [email](mailto:${data.email}) with additional questions.
  
`;
}

module.exports = generateMarkdown;


// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

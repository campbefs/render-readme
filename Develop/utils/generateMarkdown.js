
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
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Credits
  ${data.credits}

  ## Questions
  If you have any questions, you can find my GitHub page [here](https://github.com/${data.github}). You may also reach me by [email](mailto:${data.email}) with additional questions.
  

  ## License
  [${license[data.license][1]}](${license[data.license][3]})

  ## Live Application Snapshot
  ![alt text](../Develop/assets/images/${data.screenshot} 'Live Application Screenshot')
`;
}

module.exports = generateMarkdown;


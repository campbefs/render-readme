const inquirer = require('inquirer');
const generateMarkdown = require('../utils/generateMarkdown');
const writeToFile = require('../utils/generate-file');

// TODO: Create an array of questions for user input
const questions = [
  {message: 'What is your project title?', type: 'text', name: 'title',
  validate: title => {
    if (title.length > 0) {
      return true;
    } else {
      console.log('Please enter a title!');
      return false;
    }
  }
},

{message: 'Please enter a description of the project', type: 'input', name: 'description',
    validate: description => {
      if (description.length > 0) {
        return true;
      } else {
        console.log('Please enter a description!');
        return false;
      }
    }
  },

  // 'Please enter Installation instructions',
  {message: 'Please enter Installation instructions', type: 'text', name: 'installation',
    validate: installation => {
      if (installation.length > 0) {
        return true;
      } else {
        console.log('Please enter installation instructions!');
        return false;
      }
    }
  },

  // 'Please enter Usage instructions',
  {message: 'Please enter Usage instructions', type: 'text', name: 'usage',
    validate: installation => {
      if (installation.length > 0) {
        return true;
      } else {
        console.log('Please enter installation instructions!');
        return false;
      }
    }
  },

  // 'Please enter the license',



  // 'Provide a brief description for how users can contribute to your project',
  {message: 'Please provide a brief description of how users may contribute to your project', type: 'text', name: 'contributing',
    validate: github => {
      if (github.length > 0) {
        return true;
      } else {
        console.log('Please enter a valid GitHub username!');
        return false;
      }
    }
  },
  // 'Please explain how to run tests for the application',
  {message: 'Please explain how to run tests for the application', type: 'text', name: 'tests',
    validate: tests => {
      if (tests.length > 0) {
        return true;
      } else {
        console.log('Please enter a description for how to run tests!');
        return false;
      }
    }
  },

  // 'What is your GitHub username?',
  {message: 'What is your GitHub username?', type: 'text', name: 'github',
    validate: github => {
      if (github.length > 0) {
        return true;
      } else {
        console.log('Please enter a valid GitHub username!');
        return false;
      }
    }
  },

  // 'What is your email address?',
  {message: 'What is your email address?', type: 'text', name: 'email',
    validate: email => {
      if (email.includes('@')) {
        return true;
      } else {
        console.log('Please enter a valid email!');
        return false;
      }
    }
  },

  {message: 'Please select a license for your repository', type: 'list', name: 'license',
    choices: ['apache', 'boost', 'BSD', 'creativeCommons', 'GNU', 'IBM', 'ISC',
      'MIT', 'Mozilla', 'ODC', 'ODbL', 'PDDL', 'perl', 'artistic', 'SIL', 'unlicense',
      'WTFPL', 'Zlib', 'none'
  ]
  },

  {message: 'Please enter the filename (including filetype) of your screenshot located in assets/images', type: 'text', name: 'screenshot',
  validate: screenshot => {
    if (screenshot.length > 0) {
      return true;
    } else {
      console.log('Please enter a filename!');
      return false;
    }
  }
  },

];


const addCollab = async (data) => {
  return inquirer.prompt({
    message: 'Would you like to add a collaborator?',
    type: 'list',
    name: 'addPerson',
    choices: ['yes', 'no']
  })
    .then( async answer => {

      if (answer.addPerson === 'yes') {
        
        inquirer.prompt([
          {
            message: `Please enter the collaborator's name`,
            type: 'text',
            name: 'collabName'
          },
          {
            message: `Please enter the collaborator's github username`,
            type: 'text',
            name: 'collabGithub'
          }
        ])
          .then( collabData => {

            data.collaborators.push(`[${collabData.collabName}](https://github.com/${collabData.collabGithub})`);

            return addCollab(data);
          }
          )
      } else if (data.collaborators.length > 0) {
        
        data.credits = data.collaborators.join(',\n  ');
        // console.log(data.credits);
        console.log("Your ReadMe has been generated! Navigate to './dist/README.md' to check it out!")
        let markdown = await generateMarkdown(data);
        return writeToFile(markdown);

      } else {
        console.log("Your ReadMe has been generated! Navigate to './dist/README.md' to check it out!")
        let markdown = await generateMarkdown(data);
        return writeToFile(markdown);
      }
    }

    )
}


const prompter = () => {
  return inquirer.prompt(questions)
    .then(async data => {
      // console.log(data);
      // let markdown = await generateMarkdown(data);
      // writeToFile(markdown);
      data.collaborators = [];
      return addCollab(data);

  });
}

module.exports = prompter;
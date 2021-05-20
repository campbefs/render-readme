// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const writeToFile = require('./utils/generate-file');
// const prompter = require('./utils/prompter');

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
      'WTFPL', 'Zlib'
  ]

  }

  // 'Please provide the full name of the screenshot file (must be located in assets/images folder)'
];

// const output = questionNum => {
//   return prompter(questions[questionNum]);
// }


inquirer.prompt(questions)
  .then(async data => {
    console.log(data);
    let markdown = await generateMarkdown(data);
    writeToFile(markdown);

  })


// output()
//   .then(data => {
//     console.log(data['question']);
//   })

// for (i=0; i < questions.length; i++) {
//   output(i)
// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

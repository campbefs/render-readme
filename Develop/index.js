// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const writeToFile = require('./utils/generate-file');
const generateMarkdown = require('./utils/generateMarkdown');
const prompter = require('./utils/prompter');

// TODO: Create an array of questions for user input
const questions = [
  'What is your project title?',
  'Please enter a description of the project',
  'Please enter a Table of Contents',
  'Please enter Installation instructions',
  'Please enter Usage instructions',
  'Please provide the full name of the screenshot file (must be located in assets/images folder)',
  'Please explain how users can contribute to your project',
  'Please explain how to run tests for the application',
  'What is your GitHub username?',
  'What is your email address?'
];

const output = questionNum => {
  return prompter(questions[questionNum]);
}


// output()
//   .then(data => {
//     console.log(data['question']);
//   })

for (i=0; i < questions.length; i++) {
  output(i)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

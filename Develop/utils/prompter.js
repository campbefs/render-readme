const inquirer = require('inquirer');

const prompter = question => {
  return inquirer
    .prompt({
      type: 'text',
      name: 'question',
      message: question,
      // validate: input => {
      //   if (input.length > 0) {
      //     return true;
      //   } else {
      //     console.log('Please enter a response!');
      //     return false;
      //   }
      // }
    })
}

module.exports = prompter;
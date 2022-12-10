// TODO: Include packages needed for this application
const  fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: "What's your project title?",
      },
      {
        type: 'editor',
        name: 'description',
        message: "What would you like your description to be?",
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
}

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
  var markdown = generateMarkdown(answers)
  console.log(markdown)
  writeToFile("ReadMe.md", markdown)
});
// TODO: Include packages needed for this application
const  fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'fileName',
        message: "What would you like to name your ReadMe file?",
      },
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
      {
        type: 'list',
        name: 'license',
        message: "What license will your project need?",
        choices: [
          {name:'Boost', value:"[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"}, 
          {name: 'Apache 2.0' ,value:"[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)" },
          {name:'CC0' ,value:'[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'},
          {name:'GNU',value:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
          {name:'ISC' ,value:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
          {name:'MIT' ,value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'}
        ]
      },
      {
        type: 'input',
        name: 'githubName',
        message: "Enter your github name here",
      },
      {
        type: 'input',
        name: 'email',
        message: "Enter your email address here",
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
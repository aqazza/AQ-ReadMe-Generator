// TODO: Include packages needed for this application
const  fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// Added the list of questions I want the README generator to take in
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
        ],
        default: "Javascript"
      },
      {
        type: 'checkbox',
        name: 'programType',
        message: "What was the project built with?",
        choices: [
        {name:'Python' , value:'[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)'},
        {name:'Go' , value:'[![made-with-Go](https://img.shields.io/badge/Made%20with-Go-1f425f.svg)](https://go.dev/)'},
        {name:'Rust' , value:'[![made-with-rust](https://img.shields.io/badge/Made%20with-Rust-1f425f.svg)](https://www.rust-lang.org/)'},
        {name:'Markdown', value:'[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)'},
        {name:'Javascript' , value:'[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)'}
    ]
        },
      {
        type: 'input',
        name: 'installation',
        message: "What steps are required to install your project?",
      },
      {
        type: 'input',
        name: 'contributionGuidelines',
        message: "Please add your contribution guidelines",
      },
      {
        type: 'input',
        name: 'usageInformation',
        message: "Please add information on the usage of your project",
      },
      {
        type: 'input',
        name: 'testInstructions',
        message: "Please add your test instructions",
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
// made the writeToFile sync so that it not only creates files, but also overwrite or append to the data on the existing file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, 'utf8');
}

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
  var markdown = generateMarkdown(answers)
  console.log(markdown)
  writeToFile("ReadMe.md", markdown)
});
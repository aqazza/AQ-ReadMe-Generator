// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 // This section adds the filename you want to set for your project as well as the license. The table of contents will always generate the same as well as the layout
 // The template literals will function to the READme file as what they're shown to be in the index.js file
  return `# ${data.fileName}
  
  ## License
 ${data.license}
 ${data.programType}

 ## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Contribution-Guidelines](#contributionGuidelines)
 - [Test-Instructions](#testInstructions)
 - [Contact](#email)
 
 ## Application
${data.projectTitle}

## Description
  ${data.description}

## Installation
${data.installation}


  
## Usage 
${data.usageInformation}

## Contribution Guidelines
${data.contributionGuidelines}

 ## Test Instructions
${data.testInstructions}

## Contact 

${data.githubName}

${data.email} 
`;
}
// Module exports is the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file 
module.exports = generateMarkdown;

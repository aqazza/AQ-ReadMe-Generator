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

module.exports = generateMarkdown;

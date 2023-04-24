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
function generateMarkdown(answers) {
  console.log(answers);
  return `# Title: ${answers.title}
# Table of Contents  
  1. [Description](#Description:)
  2. [Installation](#Installation_Instructions:)
  3. [Usage](#Usage_Information:)
  4. [License](#License:)
  5. [Tests](#Tests:)
  6. [Questions](#Questions:)<br>
## Description: ${answers.description}<br>
## Installation Instructions: ${answers.installation}<br>
## Usage Information: ${answers.usage}<br>
## License: ${answers.license}<br>
## Contribution Guidelines: ${answers.contributions}<br>
## Tests:<br>
## Questions: [${answers.username}](https://www.github.com/${answers.username})<br>
If you have any questions, please reach out to me at ${answers.email}.`
}

module.exports = { generateMarkdown };

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
  return `# ${answers.title}
# Table of Contents  
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license)
  5. [Contributions](#contribution)
  6. [Tests](#tests)
  7. [Questions](#questions)
## Description<br>
${answers.description}<br>
## Installation<br>
${answers.installation}<br>
## Usage<br>
${answers.usage}<br>
## License<br>
This application is covered under the ${answers.license}.<br>
## Contribution<br>
${answers.contributions}<br>
## Tests<br>
## Questions<br>
GitHub Profile: [${answers.username}](https://www.github.com/${answers.username})<br>
If you have any questions, please reach out to me at ${answers.email}.`;
}

module.exports = { generateMarkdown };

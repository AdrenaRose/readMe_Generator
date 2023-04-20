// TODO: Include packages needed for this application
const require = "inquirer";
const fs = require("fs");

// TODO: Create an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    message: "Enter a title.",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description.",
    name: "description",
  },
  {
    type: "input",
    message: "Enter installation instructions.",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines.",
    name: "title",
  },
  {
    type: "rawlist",
    message: "Choose a license type.",
    choices:["None","GNU General Public License v3.0","MIT License", 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" license', "Boost Software License 1.0", "Creative Commons Zero v.1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unilicense"],
    name: "license",
  },
  {
    type: "input",
    message: "Enter a title.",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a title.",
    name: "title",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

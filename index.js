// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
// Description, Installation, Usage, Contributing, and Tests
//  description, installation instructions, usage information, contribution guidelines, and test instructions
// License
const questions = [
    {
        type: 'input',
        message: 'Please enter the project title : ',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please enter the project description : ',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter installation instructions : ',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter usage information : ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines : ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter test instructions : ',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'PLease choose a license from the list',
        name: 'license',
        choices: ['MIT', 'The Unlicense', 'Boost Software License 1.0', 'Apache License 2.0', 'None'],
    },
    {
        type: 'input',
        message: 'Please enter your Github name : ',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Please enter your email address : ',
        name: 'email',
    },

];
const promptUser = () =>
    inquirer.prompt(questions);
const generateReadme = (answers) => generateMarkdown(answers) ;
const fileName = './utils/README.md';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then((answers) => {
        try {
            const readme = generateReadme(answers);
            writeToFile(fileName, readme);
            console.log('Successfully wrote to README.md');
        } catch (error) {
            console.log(error);
        }
    });

}
// Function call to initialize app
init();

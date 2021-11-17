// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'what is the title?',
    name: 'title'

},
{
    type: 'input',
    message: 'what is the description for this application?',
    name: 'description',

},
{
    type: "input",
    message: 'how do you install the application?',
    name: 'installation'
},
{
    type: 'input',
    message: 'what is the usage',
    name: 'usage',
},
{
     type: 'list',
     message: 'choose the following license',
     name: 'license',
     choices: ['MIT', 'IBM', 'GNU', 'Apache', 'Mozilla']
},

   

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => {
        const readMeText = generateMarkdown(data)
        fs.writeFileSync('README.md', readMeText)
    })
}

// Function call to initialize app
init();

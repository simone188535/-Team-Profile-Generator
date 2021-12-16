const fs = require('fs');
const inquirer = require('inquirer');
const generatedMarkup = require('./lib/page-template');

const questions = [
    {
      type: "input",
      message: "What is the team manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "What is the team manager's id?",
      name: "managerId",
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail",
      },
    {
      type: "input",
      message: "What is the team manager's office number?",
      name: "officeNumber",
    },
    {
      type: "list",
      message:
        "Which type of team member would you like to add?",
      pageSize: 3,
      choices: ["Engineer", "Intern", "I don't want to add any more team members"],
      name: "additionalTeamMember",
    },

    // intern
    {
      type: "input",
      message: "What is your intern's name?",
      name: "internName",
    },
    {
      type: "input",
      message: "What is your intern's id?",
      name: "internId",
    },
    {
      type: "input",
      message: "What is your intern's email?",
      name: "internEmail",
    },
    {
      type: "input",
      message: "What is your intern's school?",
      name: "internSchool",
    },

    // engineer
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "engineerName",
    },
    {
      type: "input",
      message: "What is your engineer's id?",
      name: "engineerId",
    },
    {
      type: "input",
      message: "What is your engineer's email?",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "What is your engineer's GitHub username?",
      name: "engineerGithub",
    },
    
];

function init() {
    inquirer.prompt(questions).then((response) => {

        // const team = [];
        // push manager to team arr
        

        // if (response.additionalTeamMember) return inquirer.prompt( intern or engineer question array)
        // push team member to team arr 

        // fs.writeFile('dist/index.html', generatedMarkup(team), (err) => {
        //     if (err) throw console.error('Something went wrong while generating the README');
        //     console.log('The file has been created!');
        // });
    });
}

init();

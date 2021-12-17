const fs = require("fs");
const inquirer = require("inquirer");
const generatedMarkup = require("./lib/page-template");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const ManagerQuestions = [
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
    name: "managerNumber",
  },
];

const internQuestions = [
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
];

const engineerQuestions = [
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

const moreTeamMembers = [
  {
    type: "list",
    message:
      "Which type of team member would you like to add?",
    pageSize: 3,
    choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    name: "additionalTeamMember",
  },
];

async function init() {
  const team = [];
  const {
    managerName,
    managerId,
    managerEmail,
    managerNumber,
  } = await inquirer.prompt(ManagerQuestions);

  const manager = new Manager(
    managerName,
    managerId,
    managerEmail,
    managerNumber
  );

  // push manager to team arr
  team.push(manager);

  
  const addMoreMembers = async () => {
    const { additionalTeamMember } = await inquirer.prompt(moreTeamMembers);

    if (additionalTeamMember === 'Intern') {
      const { internName, internId, internEmail, internSchool } = await inquirer.prompt(internQuestions);

      const newIntern = new Intern(internName, internId, internEmail, internSchool);

      team.push(newIntern);
      await addMoreMembers();
    } else if (additionalTeamMember === 'Engineer') {
      const { engineerName, engineerId, engineerEmail, engineerGithub } = await inquirer.prompt(engineerQuestions);
      
      const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);

      team.push(newEngineer);
      await addMoreMembers();
    } else return;

  }
  await addMoreMembers();


  fs.writeFile('dist/index.html', generatedMarkup(team), (err) => {
      if (err) throw console.error('Something went wrong while generating the README');
      console.log('The file has been created!');
  });
}

init();

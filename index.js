const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

teamArray = [];

function runApp() {
  //strat team creator menu
  function createTeam() {
    inquirer.prompt([{
      type: "list",
      message: "Select team member",
      name: "addEmployeePrompt",
      choices: ["Manager", "Engineer", "Intern", "Finished"]
    }]).then(function (userInput) {
      switch (userInput.addEmployeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          htmlBuilder();
      }
    })
  }

  //start manager prompts
  function addManager() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter team manager name: ',
          name: 'managerName',
        },
        {
          type: 'input',
          message: 'Enter team manager employee ID: ',
          name: 'managerId',
        },
        {
          type: 'input',
          message: 'Enter team manager email: ',
          name: 'managerEmail',
        },
        {
          type: 'input',
          message: 'Enter team manager office number: ',
          name: 'managerOfficeNumber',
        }
      ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
      });
  }
  //start engineer prompts
  function addEngineer() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Enter Engineer name: ',
        name: 'engineerName',
      },
      {
        type: 'input',
        message: 'Enter Engineer employee ID: ',
        name: 'engineerId',
      },
      {
        type: 'input',
        message: 'Enter Engineer email: ',
        name: 'engineerEmail',
      },
      {
        type: 'input',
        message: 'Enter Engineer GitHub username: ',
        name: 'engineerGithub',
      }
    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamArray.push(engineer);
      createTeam();
    });
  }
  //start intern prompts
  function addIntern() {
    inquirer.prompt([
      {
        type: 'input',
        message: 'Enter Intern name: ',
        name: 'internName',
      },
      {
        type: 'input',
        message: 'Enter Intern employee ID: ',
        name: 'internId',
      },
      {
        type: 'input',
        message: 'Enter Intern email: ',
        name: 'internEmail',
      },
      {
        type: 'input',
        message: 'Enter Intern school: ',
        name: 'internSchool',
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArray.push(intern);
      createTeam();
    });
  }
  //end prompts

  function htmlBuilder() {
    console.log("Team created!")

    fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")

  }
  createTeam();
}

runApp();
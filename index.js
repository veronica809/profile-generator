const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
const teamGenerator = require("./src/templates");
const path = require("path");
const fs = require("fs");
const open = require("open");

const team = {
  manager: {},
  engineers: [],
  interns: [],
};

inquirer
  .prompt([
    {
      type: "input",
      message: "Enter team manager's name:",
      name: "manager",
    },
    {
      type: "input",
      message: "Enter employee ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Enter email address:",
      name: "email",
    },
    {
      type: "input",
      message: "Enter office number:",
      name: "officeNumber",
    },
  ])
  .then((answers) => {
    let manager = new Manager(
      answers.manager,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.manager = manager;
    managerAction();
  })
  .catch((error) => {
    console.log(error);
  });

const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter GitHub username:",
        name: "github",
      },
    ])
    .then((answers) => {
      let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.engineers.push(engineer);
      managerAction();
    })
    .catch((error) => {
      console.log(error);
    });
};

const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter name:",
        name: "name",
      },
      {
        type: "input",
        message: "Enter employee ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Enter school",
        name: "school",
      },
    ])
    .then((answers) => {
      let intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.interns.push(intern);
      managerAction();
    })
    .catch((error) => {
      console.log(error);
    });
};

const buildTeam = () => {
  const dist = path.join(path.resolve(__dirname, "dist"), "index.html");
  fs.writeFileSync(dist, teamGenerator(team), "utf-8");
  open(dist);
};

const managerAction = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Choose action:",
        name: "action",
        choices: ["add engineer", "add intern", "build team"],
      },
    ])
    .then((answers) => {
      if (answers.action === "add engineer") {
        addEngineer();
      } else if (answers.action === "add intern") {
        addIntern();
      } else {
        buildTeam();
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

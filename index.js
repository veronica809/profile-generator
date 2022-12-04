const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
const teamGenerator = require("./src/templates");
const path = require("path");
const fs = require("fs");
const open = require("open");

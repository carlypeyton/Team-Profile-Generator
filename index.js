// Require Node modules
const inquirer = require("inquirer");
const fs = require("fs");
const jest = require("jest");
// Require lib modules
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
// Empty array for team members to be added to 
var myTeam = [];
// Function to prompt user for team member role
function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Would you like to add a teammate? Please select role.",
            choices: ["Intern", "Engineer", "Manager", "View My Team"],
        },
    ]).then(function (res) {
        // Use switch/case to call new employee functions based on user response
        switch (res.role) {
            case "Intern":
                addIntern();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Manager":
                addManager();
                break;
            // Once team is complete, generate HTML
            case "View My Team":
                generateHTML();
                break;
        };
    });
};

// Add new Intern
function addIntern() {
    inquirer.prompt([
        {
            name: "name",
            message: "Please provide intern name: ",
            type: "input",
        },
        {
            name: "id",
            message: "Please provide intern id: ",
            type: "input",
        },
        {
            name: "email",
            message: "Please provide intern email: ",
            type: "input",
        },
        {
            name: "school",
            message: "Where does intern go to school?",
            type: "input",
        },
    ]).then(function (res) {
        // Instantiate intern with user responses to prompts
        const newIntern = new Intern(res.name, res.id, res.email, res.school);
        // Log new intern
        console.log(newIntern);
        // Push new intern to myTeam array
        myTeam.push(newIntern);
        // Call addEmployee 
        addEmployee();
    });
};

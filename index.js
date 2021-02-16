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

// Add new Engineer
function addEngineer() {
    inquirer.prompt([
        {
            name: "name",
            message: "Please provide engineer name: ",
            type: "input",
        },
        {
            name: "id",
            message: "Please provide engineer id: ",
            type: "input",
        },
        {
            name: "email",
            message: "Please provide engineer email: ",
            type: "input",
        },
        {
            name: "github",
            message: "Please provide engineer github username: ",
            type: "input",
        },
    ]).then(function (res) {
        //  Add new instance of engineer
        const newEngineer = new Engineer(res.name, res.id, res.email, res.github);
        // Log new engineer
        console.log(newEngineer);
        // Push to myTeam array
        myTeam.push(newEngineer);
        // Call addEmployee 
        addEmployee();
    });
};

// Add new Manager
function addManager() {
    inquirer.prompt([
        {
            name: "name",
            message: "Please provide manager name: ",
            type: "input",
        },
        {
            name: "id",
            message: "Please provide manager id: ",
            type: "input",
        },
        {
            name: "email",
            message: "Please provide manager email: ",
            type: "input",
        },
        {
            name: "office",
            message: "Please provide manager office number: ",
            type: "input",
        },
    ]).then(function (res) {
        // Add new instance of manager
        var newManager = new Manager(res.name, res.id, res.email, res.office);
        // Log new manager
        console.log(newManager);
        // Push to myTeam array
        myTeam.push(newManager);
        // Call addEmployee 
        addEmployee();
    });
};

// Generate HTML - separate into beginning, cards, and end, and push each to array
function generateHTML() {
    console.log('Team Profile Created!');
    // Create empty array for HTML content
    const fullHTML = [];
    // Start of HTML template
    let startHTML =
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <!-- Bootstrap -->
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                <!-- Google Fonts -->
                <link rel="preconnect" href="https://fonts.gstatic.com">
                <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans&display=swap" rel="stylesheet">
            <style>
                body {
                    background-image: url("https://img.pngio.com/hd-image-transparent-background-bottom-graphic-design-png-bottom-png-1885_766.png");
                    background-attachment: fixed;
                    background-position: 20% -200%;
                    background-repeat: no-repeat;
                }
                h1 {
                    margin-top: 2rem;
                    margin-bottom: 5rem;
                    margin-left: 2rem;
                    font-family: 'Merriweather', serif;
                    font-size: 3rem;
                    text-align: left;
                }
                .card {
                    width: 18rem;
                    margin-right: 1rem;
                    margin-bottom: 2rem;
                    margin-left: 1rem;
                    display: inline-block;
                }
                .card-header {
                    background-color: rgb(245, 245, 245);
                }
                h2 {
                    margin-top: .25rem;
                    font-family: 'Merriweather', serif;
                    text-align: center;
                    font-size: 2.25rem;
                }
                h3 {
                    font-family: 'Open Sans', sans-serif;
                    text-align: center;
                    font-size: 1.5rem;
                }
                ul {
                    font-family: 'Open Sans', sans-serif;
                    list-style-type: none;
                }
                .list-group-item {
                    border: none;
                    list-style-type: none;
                    font-size: 1.1rem;
                }
                .card-header {
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container-fluid" id="team">
                <div class="row">
                    <div class="col-12 text-center team-name">
                        <h1>Meet Your Team.</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">`
    // Push start of HTML to full HTML array
    fullHTML.push(startHTML);
    // Close UL and divs
    const closeDivs =
            `</ul>
         </div>
    </div>`
    // Create card for all employees in myTeam array
    for (let i = 0; i < myTeam.length; i++) {
        let card =
            `<div class="card employee-card">
                <div class="card-header">
                     <h2 class="card-title name"> ${myTeam[i].name}</h2>
                    <h3 class="card-title role"> ${myTeam[i].getRole()}</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <strong><li class="list-group-item id">Employee ID:</strong> ${myTeam[i].id}</li>
                        <strong><li class="list-group-item email">Email:</strong> <a href="mailto:${myTeam[i].email}" target="_blank">${myTeam[i].email}</a></li>
                    `
        if (myTeam[i].school) {
            card += (`<strong><li class="list-group-item school">School:</strong> ${myTeam[i].school}</li>` + closeDivs);
        };

        if (myTeam[i].github) {
            card += (`<strong><li class="list-group-item github">GitHub:</strong> <a href="http://github.com/${myTeam[i].github}" target="_blank">${myTeam[i].github}</a></li>` + closeDivs);
        };

        if (myTeam[i].office) {
            card += (`<strong><li class="list-group-item office">Office Number:</strong> ${myTeam[i].office}</li>` + closeDivs);
        };
        // Push employee profile cards to full HTML array
        fullHTML.push(card);
    }
    // End HTML template
    const endHTML =
        `</div>
        </div>
        <!-- jQuery, Popper, Bootstrap -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </body>
    
    </html>`;
    // Push end HTML to full HTML array
    fullHTML.push(endHTML);
    // Write New-HTML file, join content of full HTML array 
    fs.writeFile(`./dist/sample.html`, fullHTML.join(""), function (err) {
        // if any errors throw error
        if (err) throw err;
    })
};

////////////////// RUN TIME /////////////////

// Run addEmployee
addEmployee();


const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const fs = require("fs");
const inquirer = require("inquirer");

let managerHTML = ""
function team(){
    inquirer.prompt([
        {
            type:"list",
            message:"What would you like to do?",
            name: "choices",
            choices: ["add manager", "add intern", "add engineer", "build team"],

        }
    ])
    .then(function (userChoice){
        switch(userChoice.choices){
            case "add manager":
                addManager();
                break;
            case "add intern":
                addIntern();
                break;
            case "add engineer":
                addEngineer();
                break;

            default:
                buildTeam();
                break;
        }
    })
}

function addManager(){
 inquirer.prompt([
     {
        type: "input",
        message: "enter manager name",
        name: "employeename",
     },
     {
        type: "input",
        message: "enter manager id",
        name: "employeeid",
     },
     {

        type: "input",
        message: "enter manager email",
        name: "employeeEmail",
     },
     {
        type: "input",
        message: "enter manager office number",
        name: "officenumber",
     },

 ]).then(function(response){
     const hireManager = new Manager(response.employeename, response.employeeid, response.employeeEmail, response.officenumber) 
     managerHTML += `<div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">${hireManager.name}</div>
    <div class="card-body">
    <h5 class="card-title">${hireManager.email}</h5>
    <h5 class="card-title">${hireManager.id}</h5>
    <h5 class="card-title">${hireManager.officeNumber}</h5>
    </div>
    </div>`
    team()
    buildTeam()
 })
 
}

function addIntern(){
    inquirer.prompt([
        {
           type: "input",
           message: "enter intern name",
           name: "employeename",
        },
        {
           type: "input",
           message: "enter intern id",
           name: "employeeid",
        },
        {
           type: "input",
           message: "enter intern email",
           name: "employeeEmail",
        },
        {
           type: "input",
           message: "enter school",
           name: "school",
        },
    ]).then(function(response){
        const hireIntern = new Intern(response.employeename,response.employeeid, response.employeeEmail, response.school)
        managerHTML+=`<div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${hireIntern.name}</div>
        <div class="card-body">
        <h5 class="card-title">${hireIntern.email}</h5>
        <h5 class="card-title">${hireIntern.id}</h5>
        <h5 class="card-title">${hireIntern.school}</h5>
        </div>
        </div>`
        team()
        buildTeam()
    })
    
   }

   function addEngineer(){
    inquirer.prompt([
        {
           type: "input",
           message: "enter engineer name",
           name: "employeename",
        },
        {
           type: "input",
           message: "enter engineer id",
           name: "employeeid",
        },
        {
           type: "input",
           message: "enter engineer email",
           name: "employeeEmail",
        },
        {
           type: "input",
           message: "enter engineer github",
           name: "github",
        },
    ]).then(function(response){
        const hireEngineer = new Engineer(response.employeename,response.employeeid, response.employeeEmail, response.github)
        managerHTML += `<div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${hireEngineer.name}</div>
        <div class="card-body">
        <h5 class="card-title">${hireEngineer.email}</h5>
        <h5 class="card-title">${hireEngineer.id}</h5>
        <h5 class="card-title">${hireEngineer.github}</h5>
        </div>
        </div>`
        team()
        buildTeam()
    })
    
}
   
function buildTeam() {
    const HTML = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Builder</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
      </head>
      <body>
      <header class="bg-primary text-center text-white">
        <h1>Team Builder</h1>
        </header>
        <main class="container d-flex flex-wrap justify-content-evenly">
        ${managerHTML}
      
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
      </body>
    </html>`
    fs.writeFileSync('src/index.html', HTML, err => {
        if (err) throw err;
        console.log('Page is ready!')
    })
}

team();
   
   
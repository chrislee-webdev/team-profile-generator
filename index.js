const Manager = require("./lib/Manager.js")

const Engineer = require("./lib/Engineer.js")

const Intern = require("./lib/Intern.js")

const inquirer = require("inquirer")

const fs = require("fs")
let managerHTML = ""
function team(){
    inquirer.prompt([
        {
            type:"list",
            message:"What would you like to do?",
            name: "choice",
            choice: ["add manager", "add intern", "add engineer", "exit"],

        }
    ])
    .then(function (userChoice){
        switch(userChoice.choice){
            case "add manager":
                addManager();
                break;
            case "add intern":
                addIntern();
                breakl
            case "add engineer":
                addEngineer();
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
     const hireManager = new Manager(response.employeename,response.employeeid, response.emplyeeEmail, response.officenumber)
managerHTML+=`<div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
<div class="card-header">${hireManager.name}</div>
<div class="card-body">
  <h5 class="card-title">${hireManager.email}</h5>
  <h5 class="card-title">${hireManager.employeeid}</h5>
  <h5 class="card-title">${hireManager.officenumber}</h5>
</div>
</div>`
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
     <h5 class="card-title">${hireIntern.employeeid}</h5>
     <h5 class="card-title">${hireIntern.school}</h5>
   </div>
   </div>`
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
   managerHTML+=`<div class="card text-bg-secondary mb-3" style="max-width: 18rem;">
   <div class="card-header">${hireEngineer.name}</div>
   <div class="card-body">
     <h5 class="card-title">${hireEngineer.email}</h5>
     <h5 class="card-title">${hireEngineer.employeeid}</h5>
     <h5 class="card-title">${hireEngineer.github}</h5>
   </div>
   </div>`
    })
   }
   
   
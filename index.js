const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee")
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var employeeList = [];

var generic = [
    {
        type: "input",
        message:"What is the Employee's name",
        name:"name"
    },
    {
        type: "number",
        message:"What is the Employee's ID",
        name:"id"
    },
    {
        type: "input",
        message:"What is the Employee's email",
        name:"email"
    },
    {
        type: "checkbox",
        message: "Does this employee hava a special role?",
        choices: ["Engineer","Intern","Manager","no special role"],
        name: "role"
    }

]

function getEmployees(total){
    var sofar = 0;
    const askQuestion = () => {
        inquirer.prompt(generic).then((response) => {
          sofar++;
          var currentEmployee;
            //determine job, ask specific question, add to constructorInputs, make constructor
            if(response.role=="Manager"){
                inquirer
                    .prompt({
                        type: "number",
                        message:"What team is this manager on?",
                        name:"team"
                    })
                    .then((answer)=>{
                        currentEmployee = new Manager(response.name,response.id,response.email,answer.team)
                    })
            }
            else if(response.role=="Intern"){
                inquirer
                    .prompt({
                        type: "input",
                        message:"What college is this Intern from?",
                        name:"team"
                    })
                    .then((answer)=>{
                        currentEmployee = new Intern(response.name,response.id,response.email,answer.team)
                    })
            }
            else if(response.role=="Engineer"){
                inquirer
                    .prompt({
                        type: "input",
                        message:"What it the Engineer's github?",
                        name:"team"
                    })
                    .then((answer)=>{
                        currentEmployee = new Engineer(response.name,response.id,response.email,answer.team)
                    })
            }
            else{//employee
                currentEmployee = new Employee(response.name, response.id, response.email)
            }
          employeeList.push(currentEmployee);
          //add employee to list
          if (sofar < total) {
            // Ask the next question
            askQuestion(); 
          }
        })
    };        
    askQuestion();
}

inquirer
    .prompt([
        {
            type:"number",
            message: "How many employees?",
            name: "employees",
        } 
    ])
    .then(function(answer){
        
        getEmployees(answer.employees);
        

        // After the user has input all employees desired, call the `render` function (required
        // above) and pass in an array containing all employee objects; the `render` function will
        // generate and return a block of HTML including templated divs for each employee!
        var outputHTMLs = render(employeeList);

        // After you have your html, you're now ready to create an HTML file using the HTML
        // returned from the `render` function. Now write it to a file named `team.html` in the
        // `output` folder. You can use the variable `outputPath` above target this location.
        // Hint: you may need to check if the `output` folder exists and create it if it
        // does not.
        fs.writeFile('team.html',outputHTMLs, (err) =>
            err ? console.log(err) : console.log('Successfully created team.html!')
        );

    } )



// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

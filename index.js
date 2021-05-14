const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateCards = require('./src/page-template.js');
const fs = require('fs');
const employeeArr = [];


// create array of questions for employees
const questions = [
    {
        type: 'test',
        name: 'name',
        message: "Please enter the employee's name (required)",
        validate: employeeName => {
            if(employeeName) {
                return true;
            } else {
                console.log("Please enter the employee's name");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: 'Please enter id number (required)',
        validate: employeeId => {
            if(employeeId) {
                return true;
            } else {
                console.log('Please enter the employee id number');
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: 'Please enter their email (required)',
        validate: employeeEmail => {
            if(employeeEmail) {
                return true;
            } else {
                console.log("Please enter the employee's email");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'role',
        message: "Please select this employee's role",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number? (required)",
        when: (answers) => answers.role === 'Manager',
        validate: officeNumber => {
            if(officeNumber) {
                return true;
            } else {
                console.log("Please enter the manager's office number.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineers's github username?",
        when: (answers) => answers.role === 'Engineer',
        validate: github => {
            if(github) {
                return true;
            } else {
                console.log("Please enter the Engineer's github");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the name of the school the intern attends? (required)",
        when: (answers) => answers.role === 'Intern',
        validate: school => {
            if (school) {
                return true;
            } else {
                console.log("Please enter the name of the school the intern attends.");
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
    }
    
];
const writeFile = pageHTML => {  
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageHTML, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok:true,
                message: 'File created!'
            });
        });
    });      
    
}


const promptUser = () => {
    
    return inquirer
        .prompt(questions)
        .then(({name, id, email, role, confirmAddEmployee, officeNumber, github, school}) => {
            // setup manager when selected
            if(role === 'Manager') {
                this.employee = new Manager(name, id, email, role);
                this.employee.getRole();
                // add office number to Manager Object
                this.employee.getOfficeNumber(officeNumber);
                // push to employee array
                employeeArr.push(this.employee);
                // check if another employee is needed
                if(confirmAddEmployee) {
                    return promptUser();
                } else {
                    return employeeArr;
                }
            } else if(role === 'Engineer') {
                // setup Engineer when selected
                this.employee = new Engineer(name, id, email, role);
                this.employee.getRole();
                // add Engineer github to Engineer object
                this.employee.getGitHub(github);
                // push to employeeArr
                employeeArr.push(this.employee);                
                // check if another employee is needed
                if(confirmAddEmployee) {
                    return promptUser();
                } else {
                    return employeeArr;
                }
            } else if(role === 'Intern') {
                // set up Intern
                this.employee = new Intern(name, id, email, role);
                this.employee.getRole();
                // add the school to the Intern object
                this.employee.getSchool(school);
                // push employee to the array
                employeeArr.push(this.employee);
                // check if another employee is needed
                if(confirmAddEmployee) {
                    return promptUser();
                } else {
                    return employeeArr;
                }
            }            
        })
        .then(employeeArr => {
            return generateCards(employeeArr);                       
        })
        .then(pageHTML => {
            return writeFile(pageHTML)
        })
}

promptUser()

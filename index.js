const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Choices = require('inquirer/lib/objects/choices');

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
        message: "What is the manager's office number?",
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to enter another employee?',
        default: false
    }
    
];
const addAdditionalEmployees = () => {
    inquirer
        .prompt([
            
        ])
        
    
}


const promptUser = () => {
    
    return inquirer
        .prompt(questions)
        .then(({name, id, email, role, confirmAddEmployee, officeNumber}) => {
            // setup manager when selected
            if(role === 'Manager') {
                this.employee = new Manager(name, id, email, role);
                this.employee.getRole();
                this.employee.getOfficeNumber(officeNumber);
                // push to employee array
                employeeArr.push(this.employee);

                console.log(this.employee);
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
       
    }

promptUser();
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Choices = require('inquirer/lib/objects/choices');

// create array of questions for employees
const questions = [
    {
        type: 'test',
        name: 'name',
        message: "Please enter the employee's name"
    },
    {
        type: 'text',
        name: 'id',
        message: 'Please enter id number'
    },
    {
        type: 'text',
        name: 'email',
        message: 'Please enter their email'
    },
    {
        type: 'list',
        name: 'role',
        message: "Please select this employee's role",
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

const promptUser = () => {
    return inquirer
        .prompt(questions)
        .then(({name, id, email, role}) => {
            if(role === 'Manager') {
                this.employee = new Manager(name, id, email, role);
                this.employee.getRole();
                console.log(this.employee);
            } else if(role === 'Engineer') {
                this.employee = new Engineer(name, id, email, role);
                this.employee.getRole();
                console.log(this.employee);
            } else if(role === 'Intern') {
                this.employee = new Intern(name, id, email, role);
                this.employee.getRole();
                console.log(this.employee);
            }            
        })
}


promptUser();
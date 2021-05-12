const Employee = require('../lib/Employee');


class Engineer extends Employee {
    constructor(name = '') {
        super(name);
    }

    getGitHub(){}


    getRole() {
        if(this.role === '' || this.role === 'Employee'){
            this.role = 'Employee';
            return this.role;
        } else {
            return this.role;
        }
    }
}


module.exports = Engineer;
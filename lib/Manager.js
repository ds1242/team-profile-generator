const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(role = '') {
    super(role);
    }

    getRole() {
        this.role = 'Manager'
        return this.role;
    }

}

module.exports = Manager;
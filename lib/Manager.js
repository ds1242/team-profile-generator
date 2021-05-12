const Employee = require('../lib/Employee.js');


class Manager extends Employee {
    constructor(name = '') {
        super(name);
    }
    getRole() {
        this.role = 'Manager'
        return this.role;
    }
    getOfficeNumber (officeNumber){
        this.officeNumber = officeNumber;
        return this.officeNumber;
    }

}

module.exports = Manager;
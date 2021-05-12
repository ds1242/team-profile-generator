const Employee = require('../lib/Employee.js');


class Manager extends Employee {
    constructor(name = '') {
        super(name);
    }
    getRole() {
        if(this.role === '' || this.role === 'Employee'){
            this.role = 'Employee';
            return this.role;
        } else {
            return this.role;
        }
    }
    getOfficeNumber (officeNumber){
        this.officeNumber = officeNumber;
        return this.officeNumber;
    }

}

module.exports = Manager;
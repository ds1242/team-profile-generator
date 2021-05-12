const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    // constructor(officeNumber) {
    // // super(role);
    // }
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
        console.log(`the office number is ${this.officeNumber}`);
        return this.officeNumber;
    }

}

module.exports = Manager;
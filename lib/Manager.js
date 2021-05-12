const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    // constructor(officeNumber) {
    // // super(role);
    // }

    getOfficeNumber (officeNumber){
        this.officeNumber = officeNumber;
        console.log(`the office number is ${this.officeNumber}`);
        return this.officeNumber;
    }

}

module.exports = Manager;
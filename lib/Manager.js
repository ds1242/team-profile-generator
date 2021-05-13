const Employee = require('../lib/Employee.js');

// extend Manager from Employee object
class Manager extends Employee {
    constructor(name = '', id = '', email = '', role = '') {
        super(name, id, email, role);
    }
    // overrride role to Manager
    getRole() {
        this.role = 'Manager'
        return this.role;
    }
    // get office input for manager and add it object
    getOfficeNumber (officeNumber){
        this.officeNumber = officeNumber;
        return this.officeNumber;
    }

}

module.exports = Manager;
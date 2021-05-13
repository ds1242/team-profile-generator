const Employee = require('../lib/Employee');

// extend Intern from Employee object
class Intern extends Employee {
    constructor(name = '', id = '', email = '', role = '') {
        super(name, id, email, role);
    }
    // overrride role to Intern
    getRole() {
        this.role = 'Intern';
        return this.role;
    }
    // get school input 
    getSchool(school) {
        this.school = school;
        return this.school;
    }
}

module.exports = Intern;
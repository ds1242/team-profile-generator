const Employee = require('../lib/Employee');

// extend Employee object
class Engineer extends Employee {
    constructor(name = '', id = '', email = '', role = '') {
        super(name, id, email, role);
    }
    // get github input and add it to Engineer object
    getGitHub(github) {
        this.github = github
        return this.github;
    }

    // overrride role to Engineer
    getRole() {
        this.role = 'Engineer'
        return this.role;        
    }
}


module.exports = Engineer;
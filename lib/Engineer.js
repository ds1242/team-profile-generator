const Employee = require('../lib/Employee');


class Engineer extends Employee {
    constructor(name = '') {
        super(name);
    }

    getGitHub(github) {
        this.github = github
        return this.github;
    }


    getRole() {
        this.role = 'Engineer'
        return this.role;        
    }
}


module.exports = Engineer;
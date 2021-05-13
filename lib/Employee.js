// start employee object
class Employee {
    constructor(name = '', id, email = '', role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    // return their name
    getName() {
        return this.name;
    }
    // return their ID
    getId() {
        return this.id;
    }
    // return their email
    getEmail() {
        return this.email;
    }
    // get role, defaults to Employee if none provided (may not need)
    getRole() {
        if(this.role === '' || this.role === 'Employee'){
            this.role = 'Employee';
            return this.role;
        }
    }
}
module.exports = Employee;
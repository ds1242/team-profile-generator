const Employee = require('./lib/Employee.js');

test('create Employee object ', () => {
    const employee = new Employee('David', '117', 'email@email.com');

    expect(employee.name).toBe('David');
    expect(employee.id).toBe('117');
    expect(employee.id).toBe('email@email.com');
})
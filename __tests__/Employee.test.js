const Employee = require('../lib/Employee.js');

test('create Employee object ', () => {
    const employee = new Employee('David', 117, 'email@email.com', 'Employee');

    expect(employee.name).toBe('David');
    expect(employee.id).toBe(117);
    expect(employee.email).toBe('email@email.com');
})

test('get employee name', () => {
    const employee = new Employee('David', 117, 'email@email.com', 'Employee');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
    
})

test('get employee id', () => {
    const employee = new Employee('David', 117, 'email@email.com', 'Employee');

    expect(employee.getId()).toEqual(expect.any(Number));
})

test('get employee email', () => {
    const employee = new Employee('David', 117, 'email@email.com', 'Employee');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
})

test("get employee's role", () =>{
    const employee = new Employee('David', 117, 'email@email.com', 'Employee');

    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role));
})
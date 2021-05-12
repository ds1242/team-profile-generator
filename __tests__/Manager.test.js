const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

test('creates manager object', () => {

    const manager = new Employee('David', 117, 'email@email.com', 'Manager')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})
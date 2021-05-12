const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

// mock's the data
jest.mock('../lib/Employee')

test('creates manager object', () => {
    const manager = new Manager()
    expect(manager.name).toBe('David');
    expect(manager.id).toBe(117);
    expect(manager.email).toBe('email@email.com');
});

test("get manager's role", () =>{
    const manager = new Manager();
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});

test("get manager's office number", () => {
    const manager = new Manager();
    expect(manager.getOfficeNumber(1)).toEqual(expect.any(Number));
})
const Employee = require('../lib/Employee.js');
const Manager = require('../lib/Manager.js');

// mock's the data???
jest.mock('../lib/Employee')

test('creates manager object', () => {

    const manager = new Manager()
    expect(manager.name).toBe('David');
    expect(manager.id).toBe(117);
    expect(manager.email).toBe('email@email.com');

    console.log(manager);
    
});

test("get managers's role", () =>{
    const manager = new Manager();
    console.log(`the role is ${manager.role}`);
    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));

    console.log(manager.getRole());
});
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

// mock's the employee data
jest.mock('../lib/Employee');

test('test intern object creation', () => {
    const intern = new Intern();

    expect(intern.name).toBe('David');
    expect(intern.id).toBe(117);
    expect(intern.email).toBe('email@email.com');
})

test('test intern getRole function returns Intern', () => {
    const intern = new Intern();
    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
})

test("get the intern's school and set to object", () => {
    const intern = new Intern();
    expect(intern.getSchool('Harvard')).toEqual(expect.any(String));
})
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// mock's the data
jest.mock('../lib/Employee');

test('tests engineer object creation', () => {
    const engineer = new Engineer()

    expect(engineer.name).toBe('David');
    expect(engineer.id).toBe(117);
    expect(engineer.email).toBe('email@email.com');
})

test("get engineer's role", () => {
    const engineer = new Engineer();
    engineer.getRole()
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("get engineer's github", () => {
    const engineer = new Engineer();

    expect(engineer.getGitHub('github.com/repo-name')).toEqual(expect.any(String));
})
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

// mock's the data
jest.mock('../lib/Engineer')

test('tests engineer object creation', () => {
    const engineer = new Engineer()

    expect(engineer.name).toBe('David');
    expect(engineer.id).toBe(117);
    expect(engineer.email).toBe('email@email.com');

    console.log(engineer);
})

test("get engineer's role", () =>{
    const engineer = new Engineer();
    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});
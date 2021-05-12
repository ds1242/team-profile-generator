const Employee = require('../lib/Employee');

// mock's the data
jest.mock('../lib/Employee')

test('tests engineer object creation', () => {
    const engineer = new Engineer()

    expect(manager.name).toBe('David');
    expect(manager.id).toBe(117);
    expect(manager.email).toBe('email@email.com');
})
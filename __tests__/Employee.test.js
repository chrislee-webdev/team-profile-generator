const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String))
})

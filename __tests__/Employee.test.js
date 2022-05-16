//Test by creating an employee object
const Employee = require('../lib/Employee.js');

test('create an employee object'), () => {
    const employee = new Employee();

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(emplyee.email).toBe(expect.any(String));
};


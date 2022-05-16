//Test by creating an employee object
const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');

    expect(employee.name).toBe(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe(expect.any(String));
});

test('get the employee name', () => {
    const employee = new Employee('Bob', 1 , 'bob@email.com');

    expect(employee.getName()).toBe(expect.any(String));
});

test('get the employee ID', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com')

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get the employee email address', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');

    expect(employee.getEmail()).toBe(expect.any(String));
});


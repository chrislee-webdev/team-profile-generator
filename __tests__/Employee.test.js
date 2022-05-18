const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@email.com');

    expect(employee.name).toBe("Bob")
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("bob@email.com")

    expect(employee.getName()).toBe("Bob")
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe("bob@email.com")
    expect(employee.getRole())
    .toBe("Employee")
   
})

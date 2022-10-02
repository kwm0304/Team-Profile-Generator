const Employee = require('../lib/Employee')

//Creates new employee object
test('creates a new employee object.', () => {
    const employee = new Employee('')

    expect(employee.name).toBe('');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('')
    expect(employee.role).toBe('')
})

test('checks if getName returns correct name.', () => {
    expect(employee.getName()).toBe('Bill');
})

test('checks if getId returns correct id.', () => {
    expect(employee.getid()).toEqual(11);
});

test('checks if getEmail returns correct email.', () => {
    expect(employee.getEmail()).toBe('bill.jones@yahoo.com');
});

test('checks if getRole returns correct employee role.', () => {
    expect(employee.getRole()).toBe('employee');
});
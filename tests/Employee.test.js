const Employee = require("../lib/Employee");
// All employees have Name, ID, Email, Role
// Set Name, ID, Email, Role for testing
test("Should instantiate Employee", () => {
    const testEmployee = new Employee();
    expect(typeof (testEmployee)).toBe("object");
});

test("Should set employee name", () => {
    const name = "Poe";
    const testEmployee = new Employee(name);
    expect(testEmployee.name).toBe(name);
});

test("Should set employee ID", () => {
    const testValue = 13;
    const testEmployee = new Employee("Poe", testValue, "poe@test.com");
    expect(testEmployee.id).toBe(testValue);
});

test("Should set employee email", () => {
    const testValue = "poe@test.com";
    const testEmployee = new Employee("Poe", 13, testValue);
    expect(testEmployee.email).toBe(testValue);
});

// Get test Name, ID, Email, Role to ensure functionaity
test("Should get name via getName() method", () => {
    const testValue = "Poe";
    const testEmployee = new Employee(testValue);
    expect(testEmployee.getName()).toBe(testValue);
});

test("Should get id via getId() method", () => {
    const testValue = 13;
    const testEmployee = new Employee("Poe", testValue, "poe@test.com");
    expect(testEmployee.getId()).toBe(testValue);
});

test("Should get email via getEmail() method", () => {
    const testValue = "poe@test.com";
    const testEmployee = new Employee("Poe", 13, testValue);
    expect(testEmployee.getEmail()).toBe(testValue);
});

test("Should return 'Employee' role via getRole() method", () => {
    const testValue = "Employee";
    const testEmployee = new Employee("Poe", 13, "poe@test.com");
    expect(testEmployee.getRole()).toBe(testValue);
});

const Manager = require('../lib/Manager');
// Managers have office number info displayed
// Set office number for testing
test("Should set office number", () => {
    const testValue = "123";
    const testManager = new Manager("Poe", 13, "poe@test.com", testValue);
    expect(testManager.office).toBe(testValue);
});

test("Should get office number via getOfficeNumber() method", () => {
    const testValue = "123";
    const testManager = new Manager("Poe", 13, "poe@test.com", testValue);
    expect(testManager.getOfficeNumber()).toBe(testValue);
});

test("Should return 'Manager' role via getRole() method", () => {
    const testValue = "Manager";
    const testManager = new Manager("Poe", 13, "poe@test.com", "123");
    expect(testManager.getRole()).toBe(testValue);
});

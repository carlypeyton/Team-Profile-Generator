const Intern = require('../lib/Intern');
// Interns have latest school info displayed
// Set school for testing
test("Should set school", () => {
    const testValue = "Michigan";
    const testIntern = new Intern("Poe", 13, "poe@test.com", testValue);
    expect(testIntern.school).toBe(testValue);
});

test("Should get school via getSchool() method", () => {
    const testValue = "Michigan";
    const testIntern = new Intern("Poe", 13, "poe@test.com", testValue);
    expect(testIntern.getSchool()).toBe(testValue);
});

test("Should return 'Intern' role via getRole() method", () => {
    const testValue = "Intern";
    const testIntern = new Intern("Poe", 13, "poe@test.com", "Michigan");
    expect(testIntern.getRole()).toBe(testValue);
});

const Engineer = require('../lib/Engineer');
// Engineers have GitHub info displayed
// Set GitHub for testing
test("Should set GitHub username", () => {
    const testValue = "GitHubUser";
    const testEngineer = new Engineer("Poe", 13, "poe@test.com", testValue);
    expect(testEngineer.github).toBe(testValue);
});

test("Should get GitHub username via getGithub() method", () => {
    const testValue = "GitHubUser";
    const testEngineer = new Engineer("Poe", 13, "poe@test.com", testValue);
    expect(testEngineer.getGithub()).toBe(testValue);
});

test("Should return 'Engineer' role via getRole() method", () => {
    const testValue = "Engineer";
    const testEngineer = new Engineer("Poe", 13, "poe@test.com", "PoeGithub");
    expect(testEngineer.getRole()).toBe(testValue);
});


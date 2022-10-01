const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "DakMorg";
    const employeeInstance = new Engineer("Dakota", 2, "morgandakota41100@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "DakMorg";
    const employeeInstance = new Engineer("Dakota", 2, "morgandakota41100@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Dakota", 2, "morgandakota41100@gmail.com", "DakMorg");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
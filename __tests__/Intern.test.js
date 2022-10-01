const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "MSU";
    const employeeInstance = new Intern("Dakota", 2, "morgandakota41100@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "MSU";
    const employeeInstance = new Intern("Dakota", 2, "morgandakota41100@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Dakota", 2, "morgandakota41100@gmail.com", "MSU");
    expect(employeeInstance.getRole()).toBe(returnValue);
});
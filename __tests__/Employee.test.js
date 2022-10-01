const Employee = require("../lib/Employee");

test("Can create new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "Dakota";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Dakota", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing email.", () => {
    const email = "morgandakota41100@gmail.com";
    const employeeInstance = new Employee("Dakota", 2, email);
    expect(employeeInstance.email).toBe(email);
})



test("Gets name through getName.", () => {
    const testName = "Dakota";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Can test ID through getID.", () => {
    const testID = 2;
    const employeeInstance = new Employee("Dakota", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Can test email through getEmail.", () => {
    const testEmail = "morgandakota41100@gmail.com";
    const employeeInstance = new Employee("Dakota", 2, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Dakota", 2, "morgandakota41100@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})
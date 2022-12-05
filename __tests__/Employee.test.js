const Employee = require("../lib/Employee");

describe("Employee class", () => {
  test("create employee object", () => {
    const employee = new Employee("testing", 4, "email.com");
    expect(employee).toEqual({ name: "testing", id: 4, email: "email.com" });
  });
});

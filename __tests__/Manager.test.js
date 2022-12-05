const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager class", () => {
  test("create manager object", () => {
    const manager = new Manager("testing", 4, "email.com", 7895485412);
    expect(manager).toEqual({
      name: "testing",
      id: 4,
      email: "email.com",
      officeNumber: 7895485412,
    });
  });
});

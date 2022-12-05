const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
  test("create intern object", () => {
    const intern = new Intern("testing", 4, "email.com", "test school");
    expect(intern).toEqual({
      name: "testing",
      id: 4,
      email: "email.com",
      school: "test school",
    });
  });
});

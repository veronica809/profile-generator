const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");

describe("Engineer class", () => {
  test("create engineer object", () => {
    const engineer = new Engineer("testing", 4, "email.com", "abs@github");
    expect(engineer).toEqual({
      name: "testing",
      id: 4,
      email: "email.com",
      github: "abs@github",
    });
  });
});

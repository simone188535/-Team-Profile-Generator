const Manager = require("./../lib/Manager");

describe("Manager", () => {
  describe("Manager constructor", () => {
    it("should return the an object containing name, id, email, officeNumber and their values", () => {
      const newManager = new Manager("Ben", 4, "Ben@gmail.com", 4443335555);

      expect(newManager).toMatchObject({
        name: "Ben",
        id: 4,
        email: "Ben@gmail.com",
        officeNumber: 4443335555,
      });
    });
  });

  describe("getOfficeNumber", () => {
    it("should return a phone number", () => {
        const newManager = new Manager("Ben", 4, "Ben@gmail.com", 4443335555);


        const newManagerOfficeNum = newManager.getOfficeNumber();

        expect(newManagerOfficeNum).toBe(4443335555);
    });
  });

  describe("getRole", () => {
    it("should return the string 'Manager'", () => {
        const newManager = new Manager("Ben", 4, "Ben@gmail.com", 4443335555);


        const newManagerRole = newManager.getRole();

        expect(newManagerRole).toBe('Manager');
    });
  });
});

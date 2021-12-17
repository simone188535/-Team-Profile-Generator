const Engineer = require("./../lib/Engineer");

describe("Engineer", () => {
  describe("Engineer constructor", () => {
    it("should return the an object containing name, id, email, github and their values", () => {
      const newEngineer = new Engineer(
        "Dan",
        2,
        "dan2@gmail.com",
        "https://github.com/dan2"
      );

      expect(newEngineer).toMatchObject({
        name: "Dan",
        id: 2,
        email: "dan2@gmail.com",
        github: "https://github.com/dan2",
      });
    });
  });

  describe("getGithub", () => {
    it("should return the github URL", () => {
      const newEngineer = new Engineer(
        "Dan",
        2,
        "dan2@gmail.com",
        "https://github.com/dan2"
      );

      const newEngineerGithub = newEngineer.getGithub();

      expect(newEngineerGithub).toBe("https://github.com/dan2");
    });
  });

  describe("getRole", () => {
    it("should return the string 'Engineer'", () => {
      const newEngineer = new Engineer(
        "Dan",
        2,
        "dan2@gmail.com",
        "https://github.com/dan2"
      );

      const newEngineerRole = newEngineer.getRole();

      expect(newEngineerRole).toBe("Engineer");
    });
  });
});

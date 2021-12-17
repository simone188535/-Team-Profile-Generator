const Intern = require('./../lib/Intern');

describe("Intern", () => {
    
    describe("Intern constructor", () => {
        it("should return the an object containing name, id, email, school and their values", () => {
            const newIntern = new Intern(
                "Tim",
                3,
                "Tim3@gmail.com",
                "GSU"
              );
        
              expect(newIntern).toMatchObject({
                name: "Tim",
                id: 3,
                email: "Tim3@gmail.com",
                school: "GSU",
              });
            });
        });

    describe("getSchool", () => {
      it("should return the name of the school", () => {
        const newIntern = new Intern(
            "Tim",
            3,
            "Tim3@gmail.com",
            "GSU"
          );
    
          const newEngineerSchool = newIntern.getSchool();

          expect(newEngineerSchool).toBe("GSU");
      });
    });

    describe("getRole", () => {
        it("should return the string 'Intern'", () => {
            const newIntern = new Intern(
                "Tim",
                3,
                "Tim3@gmail.com",
                "GSU"
              );
        
              const newInternRole = newIntern.getRole();
    
              expect(newInternRole).toBe('Intern');
        });
    });

});

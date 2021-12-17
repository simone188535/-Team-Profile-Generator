const Employee = require('./../lib/Employee');

describe("Employee", () => {
    
    describe("Employee constructor", () => {
        it("should return an object containing name, id, and email and their values", () => {
            const newEmployee = new Employee('testName', 1, 'testName@gmail.com');

            expect(newEmployee).toMatchObject({name: 'testName', id: 1, email: 'testName@gmail.com'});
        });
    });

    describe("getName", () => {
      it("should return the name", () => {
    
        const newEmployee = new Employee('testName', 1, 'testName@gmail.com');

        const newEmployeeName = newEmployee.getName();

            expect(newEmployeeName).toBe('testName');
      });
    });

    describe("getId", () => {
        it("should return the id", () => {

            const newEmployee = new Employee('testName', 1, 'testName@gmail.com');

            const newEmployeeId = newEmployee.getId();

            expect(newEmployeeId).toBe(1);
            
        });
    });

    describe("getEmail", () => {
        it("should return the email", () => {

            const newEmployee = new Employee('testName', 1, 'testName@gmail.com');

            const newEmployeeEmail = newEmployee.getEmail();

            expect(newEmployeeEmail).toBe('testName@gmail.com');
            
        });
    });

    describe("getRole", () => {
        it("should return the string 'Employee'", () => {
            const newEmployee = new Employee('testName', 1, 'testName@gmail.com');

            const newEmployeeRole = newEmployee.getRole();

            expect(newEmployeeRole).toBe('Employee');
        });
    });
});
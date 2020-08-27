// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(id, name, email, school) {
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!email) {
            throw new Error("You are missing the email.");
        }
        if (!school) {
            throw new Error("You are missing the school.");
        }
        super (name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return "Intern"
    }

}

module.exports = Intern;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!email) {
            throw new Error("You are missing the email.");
        }
        if (!officeNumber) {
            throw new Error("You are missing the officeNumber.");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager"
    }

}


// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(id, name, email, github) {
        if (!id) {
            throw new Error("You are missing the id.");
        }
        if (!name) {
            throw new Error("You are missing the name.");
        }
        if (!email) {
            throw new Error("You are missing the email.");
        }
        if (!github) {
            throw new Error("You are missing the github.");
        }
        this.id = id;
        this.name = name;
        this.email = email;
        this.github = github;
    }


getGithub(){

}

getRole() {

}

}


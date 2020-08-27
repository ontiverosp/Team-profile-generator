// TODO: Write code to define and export the Employee class
class Employee {

    constructor(name, id, email) {
        // if (!id) {
        //     throw new Error("You are missing the id.");
        // }
        // if (!name) {
        //     throw new Error("You are missing the name.");
        // }
        // if (!email) {
        //     throw new Error("You are missing the email.");
        // }
        this.id = id;
        this.name = name;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;

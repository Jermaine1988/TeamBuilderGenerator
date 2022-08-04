const Employee = require("./Employee");

class Intern extends Employee {
    constructor (name, email, id, school) {
        super (name, email, id);
        this.school = school
    }

    getRole() {
        return this.school;

    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
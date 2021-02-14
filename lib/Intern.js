const Employee = require("./Employee.js");

class Intern extends Employee {
    constructor(name, id, email, schoolAttended) {
        super(name, id, email);
        this.school = schoolAttended;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern; 
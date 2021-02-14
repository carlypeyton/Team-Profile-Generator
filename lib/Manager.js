const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.office = officeNumber;
    }

    getOfficeNumber() {
        return this.office;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager; 
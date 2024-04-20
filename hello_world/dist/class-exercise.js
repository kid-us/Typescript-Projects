"use strict";
class Logger {
    constructor(name) {
        this.name = name;
    }
    log(message) {
        console.log(message);
    }
}
let log = new Logger("Write this message!");
class PersonName {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + "  " + this.lastName;
    }
}
class Employees extends PersonName {
    constructor(salary, firstName, lastName) {
        super(firstName, lastName);
        this.salary = salary;
    }
}
let employees = {
    name: "John Smith",
    salary: 30000,
    address: {
        street: "Lorem",
        city: "Dolor",
        zipCode: 1000,
    },
};
;
;
//# sourceMappingURL=class-exercise.js.map
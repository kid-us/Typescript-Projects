"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + "  " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Student extends Person {
    constructor(stundentId, firstName, lastName) {
        super(firstName, lastName);
        this.stundentId = stundentId;
    }
    getTest() {
        console.log("Getting a Test");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
let teacher = new Teacher("Lorem", "Ipsum");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map
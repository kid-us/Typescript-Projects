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
let student = new Student(1, "Lorem", "Ipsum");
console.log(student);
console.log(student.fullName);
console.log(student.walk());
console.log(student.getTest());
//# sourceMappingURL=index.js.map
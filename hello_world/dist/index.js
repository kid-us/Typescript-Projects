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
        console.log("Ealking");
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
class Principal extends Person {
    get fullName() {
        return "principal " + super.fullName;
    }
}
printNames([
    new Student(1, "Lorem", "Ipsum"),
    new Teacher("Lorem", "Ipsum"),
    new Principal("Lorem", "Ipsum"),
]);
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
//# sourceMappingURL=index.js.map
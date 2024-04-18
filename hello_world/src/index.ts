// let age: number = 20;
// if (age < 50)
//     age+=10;
// console.log(age);

// Unions Types

// function kgToLbs (weight: number | string):number {
//     // Narrowing 
//     if (typeof weight === "number"){
//         return weight * 2.2;
//     }
//     else{
//         return parseInt(weight) * 2.2;
//     }
// }

// console.log(kgToLbs("10kg"));
// console.log(kgToLbs(10));

class Person {
    constructor (public firstName: string, public lastName: string){}

    get fullName(){
        return this.firstName + "  " + this.lastName;
    }

     walk() {
        console.log("Walking");
    }
}

// Inherting the person class properties which is First Name and Last Name
class Student extends Person {
    constructor (public stundentId: number, firstName: string, lastName: string){
        super(firstName, lastName);
    }

    getTest(){
        console.log("Getting a Test");
    }
}

let student = new Student(1, "Lorem", "Ipsum");
console.log(student);
console.log(student.fullName);





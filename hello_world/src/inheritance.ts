// class Person {
//     constructor (public firstName: string, public lastName: string){}

//     get fullName(){
//         return this.firstName + "  " + this.lastName;
//     }

//      walk() {
//         console.log("Ealking");
//     }
// }

// // Inherting the person class properties which is First Name and Last Name
// class Student extends Person {
//     constructor (public stundentId: number, firstName: string, lastName: string){
//         super(firstName, lastName);
//     }

//     getTest(){
//         console.log("Getting a Test");
//     }
// }

// // Method Overriding

// class Teacher extends Person {
//     override get fullName(){
//         return "Professor " + super.fullName;
//     }
// }
// // let student = new Student(1, "Lorem", "Ipsum");
// let teacher = new Teacher ("Lorem", "Ipsum");
// console.log(teacher.fullName);


// // Polymorphism

// class Principal extends Person {
//     override get fullName(){
//         return "principal " + super.fullName;
//     }
// }

// printNames ([
//     new Student (1, "Lorem", "Ipsum"),
//     new Teacher ("Lorem", "Ipsum"),
//     new Principal ("Lorem", "Ipsum"),
// ])

// // Polymorphism in action
// function printNames (people: Person[]){
//     for ( let person of people) {
//         console.log(person.fullName);
        
//     }
// }




// function Capitalize (target: any, value: string, descriptor: PropertyDescriptor){
//     const originals = descriptor.get;
//     descriptor.get = function () {
//         const result =  originals?.call(this)
//         return (typeof result === "string" ? result.toUpperCase() : result);
//     }
// }


// class Persons { 
//     constructor(public firstName: string, public lastName: string){}

//     @Capitalize
//     get fullName (){
//         return `${this.firstName}  ${this.lastName}`
//     }

// }


// let persons = new Persons("lorem", "ipsum");
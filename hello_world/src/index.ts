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

// class Ride {

//     private static _activeRides:number = 0

//     start() { Ride._activeRides++; }
//     stop() { Ride._activeRides--; }

//     static get activeRide(){
//         return Ride._activeRides;
//     }

// }

// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();

// console.log(Ride.activeRide);
// console.log(Ride.activeRide);


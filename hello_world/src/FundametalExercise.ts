let a: number = 100;
let b: string = "Tea";
let c: boolean[] = [true, false, true];
let d: {age: number} = {age: 1};
let e: number[] = [3];
let f: any;
let g: any[] = [];

// Enums
const enum Gender {Female= "F", Male = "M"};

// Tuples
const info : [number, string] = [2, "Mosh"];

// Objects
let song : {
    title: string,
    releaseYear: number
} = {title: "My song", releaseYear: 2000};

// Numbers Array
let prices: number[] = [100, 200, 300];
prices[0] = 50;

// Function 
function myFunc(a: number, b:number): number{
    return a+b;
}

myFunc(2, 8);
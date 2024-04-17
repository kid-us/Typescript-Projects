type User ={
    name: string,
    age: number,
    occupation?: string
}


let users = [
    {
        name: 'John Smith',
        age: 30,
        occupation : "Software Developer"
    }, 
    {
        name : "KAte Abdo",
        age : 29
    }
]
// Birds fly, Fish swim, A pet can be a Bird or Fish

type Birds = {
    fly: () => void;
}

type Fish ={
    swim: () => void;
}

type Pet = Birds | Fish;

// Define a type for representing the day of the week.
type DaysOfTheWeek = 'Monday' | "Tuesday" | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

// Simplify it
// let user = getUser();
// console.log(user && user.address ? user.address.street : undefined);
// Simplified 
// console.log(user?.address?.street);

// let x = foo !== null && foo !== undefined ? foo : bar();
// simplified
// lex x = foo ?? bar();


// Correct this
// let value: unknown = 'a';
// console.log(value.toUpperCase());
// Corrected one
// if(typeof value === "string"){
//     console.log(value.toUpperCase());
// }


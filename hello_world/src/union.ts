function kgToLbs (weight: number | string):number {
    // Narrowing 
    if (typeof weight === "number"){
        return weight * 2.2;
    }
    else{
        return parseInt(weight) * 2.2;
    }
}

console.log(kgToLbs("10kg"));
console.log(kgToLbs(10));
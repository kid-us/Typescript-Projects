type Customer = {
    birthday: Date
}
function getCustomer (id : number): Customer | null | undefined {
    return id=== 0 ? null : {birthday: new Date () }
}

let customer = getCustomer(0)

// Optional property access operator
console.log(customer?.birthday);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customer?.[0]
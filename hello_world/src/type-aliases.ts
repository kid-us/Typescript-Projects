type Employee = {
    readonly id: number,
    name: string,
    retire: (date:Date)=>void
}

let employee_info: Employee = {
    id: 1,
    name: "Mosh",
    retire: (date:Date) =>
        {
            console.log(date);
        }
}
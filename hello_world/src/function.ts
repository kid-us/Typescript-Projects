
function calculateTax(income: number, taxYear = 2020): number{
    // taxYear is by default 2020 and if another value is send when the function is called new value will replace the 2020.
    if(taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

calculateTax(10_000, 2023)
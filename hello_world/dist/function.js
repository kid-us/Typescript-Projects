"use strict";
function calculateTax(income, taxYear = 2020) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2023);
//# sourceMappingURL=function.js.map
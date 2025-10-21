"use strict";
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
let result = calculateTax(10000, 2022);
console.log(result);
//# sourceMappingURL=Function.js.map
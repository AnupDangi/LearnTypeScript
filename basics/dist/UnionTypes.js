"use strict";
function kgToLbs(weight) {
    if (typeof weight == 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let result1 = kgToLbs(10);
let result2 = kgToLbs('10kg');
console.log(result1, result2);
//# sourceMappingURL=UnionTypes.js.map
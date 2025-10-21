function kgToLbs(weight:number | string):number{
    //Narrowing 
    if(typeof weight=='number'){
        // weight.toFixed(2); // number object methods
     return weight*2.2;
    }
    else{
        return parseInt(weight)*2.2;
    }
}

let result1=kgToLbs(10);
let result2=kgToLbs('10kg')

console.log(result1,result2);


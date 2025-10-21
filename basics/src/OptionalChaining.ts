type Customer={
    birthday:Date
}

function getCustomer(id:number):Customer|null|undefined{
    return id===0?null:{birthday:new Date()};
}

// let customer=getCustomer(0);
let customer=getCustomer(1);


//optional chaining
console.log(customer?.birthday);
console.log(customer?.birthday?.getFullYear());


//optional element access operator 
// customers?[0];


//optional call 
let log:any= null ;
log?.('a');
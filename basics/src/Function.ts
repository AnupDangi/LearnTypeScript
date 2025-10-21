function calculateTax(income:number,taxYear=2022):number{ //annotate
    if(taxYear <2022){
        return income *1.2;
    }

    //always returns undefined
    return income *1.3;
}


let result:number=calculateTax(10000,2022);
console.log(result);






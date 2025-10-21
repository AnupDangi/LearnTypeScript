function greet(name:string |null){
    if(name){
        console.log(name.toUpperCase());
    }
}

//stops us from passing null or undefined file by ts compiler
greet(null);






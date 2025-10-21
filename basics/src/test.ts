// let testval:number;

// testval=10;
// console.log(testval);


// interface Student{
//     Name:string,
//     class:string,
//     usn:string,
//     marks:number
// }


// function students(student:Student[]){

//     for (const s of student){
//         console.log(s.Name);
//         console.log(s.class);
//         console.log(s.usn);
//         console.log(s.marks +"\n");
//     }
//     //calucate sum of marks
//     let sum=0;
//     for ( let s of student){
//         sum+=s.marks;
//     }

//     console.log(sum);
// }



// const student1 :Student={
//     Name:'Anup',
//     class:'7th A',
//     usn:'1CR22AI017',
//     marks:100
// }


// const student2={
//     Name:'Bishal',
//     class:'7th A',
//     usn:'1CR22AI017',
//     marks:100
// }

// students([student1,student2]);


//generic function
// function testName<T>(name:T):T{
//     return name;
// }

// console.log(testName(10));
// console.log(testName("Anup"));


//Generic Interfaces and Classes
// interface ApiResponse<T> {
//   status: number;
//   data: T;
// }

// class Repository<T> {
//   private items: T[] = [];
//   add(item: T) {
//     this.items.push(item);
//   }
//   getAll(): T[] {
//     return this.items;
//   }
// }


// const repo1:Repository<number>=new Repository();
// repo1.add(10);
// console.log(repo1.getAll());




//Generic Constraints
// interface HasId {
//   id: number;
// }

// function getId<T extends HasId>(obj: T): number {
//   return obj.id;
// }

// getId({ id: 1, name: "Anup" }); // ✅
// getId({ name: "Anup" }); // ❌ Error


// intersection types

type Draggable={
    drag:()=>void
};

type Resizable={
    resize:()=>void
};


//make intersection of two types 
type UIWidget=Draggable & Resizable;

// later we can use the methods of these types from one object
let textBox: UIWidget={
    drag:()=>{},
    resize:()=>{}
}
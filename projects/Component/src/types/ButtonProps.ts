export type ButtonProps=
| {
    variant:'text';
    label:string;   
    onclick:()=>void;
}

|{
    variant:"icon";
    icon:React.ReactNode;
    onClick:()=>void;
}


import React from "react";
import {useState} from "react";

type User={
    name:string;
    email:string;
}

export default function TableData() {
  const [data,setData]=useState<User[]>([]);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  
  const addRow=()=>{
    if(!name ||!email){
      return;
    }
    setData([...data,{name,email}]);
    setName("");
    setEmail("");
  }

  const columns:(keyof User)[]=["name","email"];

  return (
    <div>
      <h2>User Table</h2>
      <div style={{marginBottom:"1rem"}}> 
        <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <button onClick={addRow}>Add Row</button>
      </div>
      <table border={1} cellPadding={5}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={String(col)}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={String(col)}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
     
  );
}
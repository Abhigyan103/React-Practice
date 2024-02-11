import { useState } from 'react'

function StateExample() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Name?");
    return (
      <>
        <h1>{count}</h1>
        <button onClick={()=>{setCount((e)=> e+1)}}>Plus Plus</button>
        <button onClick={()=>{setCount((e)=> e-1)}}>Minus Minus</button>
        <h1>{name}</h1>
        <button onClick={()=>{setName((e)=> "Yash")}}>Bada</button>
        <button onClick={()=>{setName((e)=> "Ayush")}}>Chota</button>
        <br/>
        <button onClick={()=>{setName((e)=> {let count1 = count;setCount((e)=>name);return count1});}}>Pagal ?</button>
      </>
    )
}

export default StateExample
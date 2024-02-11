import React, { useState } from 'react'
import './StateExample2.css'

const people=["Alice","Bob","Joe","Black Mamba","Mama Earth"]

function StateExample2() {
  const [names, useNames] = useState(people)
  const deleteName =(index)=> {
    let newNames=names.filter((e, i)=>{
        return i !=index;
    })
    useNames(newNames)
  }
  return (
    <body>
    {names.map((e,i)=>{
        return <div className='nameCard'>
            <p>{e}</p>
            <button onClick={()=>{deleteName(i)}} className='deleteName'>Delete</button>
        </div>
    })}
    <div className="options">
    <button onClick={()=>useNames(people)} style={{color:"red"}}>Reset</button>
    <button onClick={()=>useNames([...names,...people ])} style={{color:"red"}}>Add More</button>
    </div>
    </body>
  )
}

export default StateExample2
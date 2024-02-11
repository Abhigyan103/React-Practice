import React, { useEffect, useState } from "react";
import "./UseEffectExample.css";
const apiLink ='https://api.github.com/users'

function UseEffectExample() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchData=async () =>{
            console.log("Fetching....");
            const response = await fetch(apiLink)
            const data =await response.json()
            console.log("Fetching Done!");
            setUsers(data)
        }
        fetchData()
        console.log('Hey');
    }, []);
  return (
    <div>
      <h1>Github Users API</h1>
      <h4>Example</h4>
      <div className="usersCont">
        {users.map((e) => {
          return (
            <a
              href={e.html_url}
              target="_blank"
              rel="noopener noreferer"
              key={e.login}>
              <div className="profileCard">
                <img src={e.avatar_url} alt="" className="avatar" />
                <h5 className="name">{e.login}</h5>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default UseEffectExample;

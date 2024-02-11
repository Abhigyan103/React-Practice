import React from "react";
import useUser from "./useUser";

function UserContainer(props) {
  const [user, setUser, setLogin] = useUser(null);
  console.log(props);
  return (
    <section>
      <p>Admin is {props.name}</p>
      {user.isLoggedIn ? 
        (<><p>Hey! {user.name}</p> <button onClick={setLogin}>Logout</button></>):
        (<button onClick={(e)=>{setUser('Yash')}}>Login</button>)
      }
    </section>
  );
}

export default UserContainer;

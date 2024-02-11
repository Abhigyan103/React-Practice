import React, { useContext } from "react";
import useUser from "./useUser";
import { NavbarContext } from "./Navbar";

function UserContainer() {
  const [user, setUser, setLogin] = useUser(null);
  const props = useContext(NavbarContext)
  console.log(props);
  return (
    <section>
      {/* <p>Admin is {props.fname}</p> */}
      {user.isLoggedIn ? 
        (<><p>Hey! {user.name}</p> <button onClick={setLogin}>Logout</button></>):
        (<button onClick={()=>{setUser('Yasha')}}>Login</button>)
      }
    </section>
  );
}

export default UserContainer;

import { useState } from "react"

const useToggle = ()=>{
    const [isLoggedIn,setLogin] = useState(false);
    const toggle =()=>{
        setLogin(!isLoggedIn);
    }
    return [isLoggedIn,toggle];
}

const useUser =(n) => {
    const [name,setName] = useState(n ?? 'Joe');
    const [isLoggedIn, setLogin] =useToggle();
    const login =(n)=>{
        setLogin();
        setName(n??'Joe1');
    }
    return [{name,isLoggedIn}, login, setLogin];
}
export default useUser;
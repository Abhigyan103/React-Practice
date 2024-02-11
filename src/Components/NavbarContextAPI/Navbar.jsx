import React, { createContext } from 'react'
import NavbarList from './NavbarList'

export const NavbarContext = createContext();

function NavbarContextAPI() {
  return (

    <div>
<NavbarContext.Provider value={{name:"Yash",fname:"Abhigyan"}}>
        <div>Navbar</div>
        <NavbarList name="yash"/>
    </NavbarContext.Provider>
    <NavbarList name="yash"/>
    </div>
  )
}

export default NavbarContextAPI
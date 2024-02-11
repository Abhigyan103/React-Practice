import React from 'react'
import UserContainer from './UserContainer'

function NavbarList(props) {
  return (
    <div>

        <div>NavbarList</div>
        <UserContainer {...props} />
    </div>
  )
}

export default NavbarList
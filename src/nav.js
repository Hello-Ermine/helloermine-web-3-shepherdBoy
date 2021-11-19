import React from 'react';
import './nav.css'
import NavBarLink from './NavBarLink'

function Navbar() {


  return (
    <div className="navthing">



      <ul>

        <NavBarLink href="#member" > Member </NavBarLink>
        <NavBarLink href="#story" > Story </NavBarLink>
        <NavBarLink href="#moral" > Moral </NavBarLink>

      </ul>

      <div style={{ height: 64, width: "100%" }}></div>

    </div>
  )
}















export default Navbar
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavigationMenu(props){
  const [menus] = useState([
    {name : "Home", link : "/"},
    {name : "About", link : "/about"}
  ])
  return(
    <ul>
      {menus.map((menu,i) => {
        return(<li key={i}> 
          <Link
            to={menu.link}
            className="text-blue-500 border-b block py-3 px-2"
            onClick={props.closeMenu}
          >
            {menu.name}
          </Link>
        </li>
        )
      })}
      
    </ul>
  )
}

export default NavigationMenu;
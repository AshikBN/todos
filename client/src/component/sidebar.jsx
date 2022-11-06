import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
}from "react-icons/fa";
import { IoCardSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import '../css/sidebar.css'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/home",
            name:"Dashboard",
            icon:<FaTh/>
        },
       
        {
            path:"/form",
            name:"Add activity",
            icon:<IoCardSharp/>
          
        }
      
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "0px"}} className="sidebar">
               <div className="top_section">
               <div style={{marginLeft: isOpen ? "0px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                       </div>
                  
                  
                 
               </div>
               {
                   menuItem.map((item, index)=>(
                       <div className='sideitem'  style={{display: isOpen ? "flex" : "none"}}>
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                       </div>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
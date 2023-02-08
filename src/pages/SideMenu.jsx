import React, { useState } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { Link } from 'react-router-dom';
import TopNavBar from "./topBar";
import {
    Flex,
    Text,
    View,
    Icon,
} from "@aws-amplify/ui-react";
// import { CgProfile } from 'react-icons/cg'
import {
    FaScroll,
    FaThList,
    FaBars,
    FaHome,
} from 'react-icons/fa'

  
const SideMenu = ({logout, children}) => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen)

const menuItem = [
    {
        path: "",
        name: "Home",
        icon: <FaHome/>,
    },
    {
        path: "Temps",
        name: "My Templates",
        icon: <FaScroll/>,
    },
];

return (
    <div className="container">
        <div className="sidemenu" style={{width: isOpen ? "250px" : "50px"}}>
            <div className="top_section"  onClick={toggle}>
                <div  className="bars" style={{marginRight: isOpen ? "30px" : "0px"}}>
                    <FaBars/>
                </div>
                {/* <h1  className="logo" style={{display: isOpen ? "block" : "none"}}>logo</h1> */}
            </div>
            {
                menuItem.map((item, index) => (
                    <Link
                        to={item.path}
                        key={`${item.path}_${index}`}
                        className="link"
                        activeClassName="active"
                    >
                        <div className="icon">{item.icon}</div>
                        <div className="link_text" style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                    </Link>
                ))
            }
        </div>
        <div className="page">
            <div className="topBar">
                <TopNavBar logout={logout}/>
            </div>
            <main>{children}</main>
        </div>
    </div>
)};
  

export default SideMenu;
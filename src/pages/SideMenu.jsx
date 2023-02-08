import React, { useState } from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { Link } from 'react-router-dom';
import {
    Flex,
    Text,
    View,
    Icon,
} from "@aws-amplify/ui-react";
// import { CgProfile } from 'react-icons/cg'
import {
    FaTh,
    FaThList,
    FaBars,
} from 'react-icons/fa'

const SideMenuOriginal = () => {
    return (
        <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            alignContent="flex-start"
            gap="1rem"
        >
            <View>
                <Link to="/">
                    <Icon
                        backgroundColor={'gray'}
                    />
                    <Text
                        height="2rem"
                        width="5rem"
                    >Home
                    </Text>
                </Link>
            </View>
            <View>
                <Link to="/Temps">
                    <Icon
                        backgroundColor={'gray'}
                    />
                    <Text
                        variation="info"
                        height="2rem"
                        width="5rem"
                    >My Templates
                    </Text>
                </Link>
            </View>
        </Flex> 
    );
};

const SideMenu1 = () => {
    const [showText, setShowText] = useState(false);
  
    return (
      <Flex
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        alignContent="flex-start"
        gap="1rem"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <View>
          <Link to="/">
            <Icon backgroundColor={"gray"} />
            {showText && (
              <Text height="2rem" width="5rem">
                Home
              </Text>
            )}
          </Link>
        </View>
        <View>
          <Link to="/Temps">
            <Icon backgroundColor={"gray"} />
            {showText && (
              <Text variation="info" height="2rem" width="5rem">
                My Templates
              </Text>
            )}
          </Link>
        </View>
      </Flex>
    );
};

const SideMenu2 = () => {
    const [showText, setShowText] = useState(false);
  
    return (
      <Flex
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
        alignContent="flex-start"
        gap="1rem"
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <Link to="/">
            <Icon backgroundColor={"gray"} />
            {showText && (
              <Text style={{ marginLeft: "0.5rem" }} height="2rem" width="5rem">
                Home
              </Text>
            )}
          </Link>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <Link to="/Temps">
            <Icon backgroundColor={"gray"} />
            {showText && (
              <Text
                style={{ marginLeft: "0.5rem" }}
                variation="info"
                height="2rem"
                width="5rem"
              >
                My Templates
              </Text>
            )}
          </Link>
        </View>
      </Flex>
    );
  };
  
  const SideMenu = ({children}) => {
    // const [showText, setShowText] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    const menuItem = [
        {
            path: "",
            name: "Home",
            icon: <FaTh/>,
        },
        {
            path: "Temps",
            name: "My Templates",
            icon: <FaThList/>,
        },
    ];

    return (
        <div className="container">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidemenu">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
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
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </Link>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    )

    // return (
    //   <>
    //   <Flex
    //     direction="column"
    //     justifyContent="flex-start"
    //     alignItems="stretch"
    //     alignContent="flex-start"
    //     gap="1rem"
    //     onMouseEnter={() => setShowText(true)}
    //     onMouseLeave={() => setShowText(false)}
    //   >
    //     <Flex direction="row" alignItems="center">
    //       <Link to="/">
    //         <Icon backgroundColor={"gray"} />
    //         {showText && (
    //           <Text style={{ marginLeft: "0.5rem" }} height="2rem" width="5rem">
    //             Home
    //           </Text>
    //         )}
    //       </Link>
    //     </Flex>
    //     <Flex direction="row" alignItems="center">
    //       <Link to="/Temps">
    //         <Icon backgroundColor={"gray"} />
    //         {showText && (
    //           <Text
    //             style={{ marginLeft: "0.5rem" }}
    //             variation="info"
    //             height="2rem"
    //             width="5rem"
    //           >
    //             My Templates
    //           </Text>
    //         )}
    //       </Link>
    //     </Flex>
    //   </Flex>
    //   <main>{children}</main>
    //   </>
    // );
  };
  

export default SideMenu;
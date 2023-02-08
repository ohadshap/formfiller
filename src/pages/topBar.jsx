import React from "react";
import { Auth } from 'aws-amplify';
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { Link } from 'react-router-dom';
import {
    Grid,
    Text,
    Menu,
    MenuButton,
    MenuItem,
    Divider,
    View,
} from "@aws-amplify/ui-react";
import { FaBell, FaUser } from 'react-icons/fa'
import { useEffect } from "react";

// TODO - remove log
const TopNavBar = ({logout}) => {

    useEffect(() => {
        logUser()
    },[]);
    
    const logUser = async () => {
        const user = await Auth.currentAuthenticatedUser()
        console.log('user', user.attributes.email);
    }
    return (
        <Grid
            columnGap="0.5rem"
            templateColumns="1fr 15fr 1fr 1fr"
            alignItems="center"
        >
            <View
                columnStart="1"
                columnEnd="2"
            >
                <Link className="link" to='/'>
                    <Text color="#fff" fontSize="20px" className="link_text">FormFiller</Text>
                </Link>
            </View>
            <View
                columnStart="3"
                columnEnd="4"
            >
                <FaBell />
            </View>
            <View
                columnStart="4"
                columnEnd="-1"
            >
                <Menu
                    menuAlign="start"
                    size="small"
                    justifyContent="start"
                    trigger={
                        <MenuButton
                        size="small"
                        color="#fff"
                        >
                            <FaUser />
                        </MenuButton>
                      }
                >
                    <MenuItem onClick={() => alert('Download')}>
                        Download
                    </MenuItem>
                    <MenuItem onClick={() => alert('Create a Copy')}>
                        Create a Copy
                    </MenuItem>
                    <MenuItem onClick={() => alert('Mark as Draft')}>
                        Mark as Draft
                    </MenuItem>
                    <Divider />
                    <MenuItem isDisabled onClick={() => alert('Delete')}>
                        Delete
                    </MenuItem>
                    <MenuItem onClick={() => logout()}>
                        Log Out
                    </MenuItem>
                </Menu>
            </View>
            
        </Grid> 
    );
};

export default TopNavBar;

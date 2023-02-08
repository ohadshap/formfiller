import React from "react";
import "../App.css";
import "@aws-amplify/ui-react/styles.css";
import { Link } from 'react-router-dom';
import {
    Icon,
    Grid,
    Text,
    Menu,
    MenuButton,
    MenuItem,
    Divider,
    View,
} from "@aws-amplify/ui-react";
// import { AiOutlineMenu } from 'react-icons/ai'
// import { IoNotificationsOutline } from 'react-icons/io5'
import { CgProfile } from 'react-icons/cg'


const TopNavBar = () => {
    return (
        <Grid
            columnGap="0.5rem"
            templateColumns="8vw 8vw 68vw 8vw 8vw"
            alignItems="start"
        >
            <Icon
                // as={AiOutlineMenu}
                columnStart="1"
                columnEnd="2"
                backgroundColor={'gray'}
            />
            <Text
                columnStart="2"
                columnEnd="3"
            >
                <Link to='/'>FormFiller</Link>
            </Text>
            <Icon
                backgroundColor={'gray'}
                columnStart="4"
                columnEnd="5"
            />
            <View
                columnStart="5"
                columnEnd="-1"
            >
                <Menu
                    menuAlign="start"
                    size="small"
                    justifyContent="start"
                    trigger={
                        <MenuButton
                        size="small"
                        >
                            <Icon
                                as={CgProfile}
                            />  
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
                    <MenuItem onClick={() => alert('Attend a workshop')}>
                        Attend a workshop
                    </MenuItem>
                </Menu>
            </View>
            
        </Grid> 
    );
};

export default TopNavBar;

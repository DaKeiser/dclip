import React, { useEffect, useState } from "react";
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Link,
    useColorMode
} from '@chakra-ui/react';
import { useMoralis } from "react-moralis";
import { primaryTextColor } from '../styles/darkMode';


const truncateAddress = (address) => {
    return address.length>10 ? address.slice(0, 6) + "..." + address.slice(-4): address;
};

const Login = () => {

    const { authenticate, logout, isAuthenticated, user } = useMoralis();
    const { colorMode } = useColorMode();

    

    if (isAuthenticated) {
        return (
                <Menu>
                    <MenuButton
                        as={Button}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={'white'}
                        bg={'pink.400'}
                        href={'#'}
                        _hover={{
                            bg: 'pink.300',
                        }}
                    >
                        {truncateAddress(user.get("username"))}
                    </MenuButton>
                    <MenuList>
                            <MenuItem
                                as={Link}                            
                                href={"/profile/"  + user.get('username')}
                                isExternal
                                color={primaryTextColor[colorMode]}
                            >
                                Profile
                            </MenuItem>
                            <MenuItem 
                                onClick={() => logout()}
                                color={primaryTextColor[colorMode]}
                            >
                                Logout
                            </MenuItem>
                    </MenuList>
                </Menu>
        )
    }
    else {
        return (
            <Menu>
                <MenuButton
                    as={Button}
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'pink.400'}
                    href={'#'}
                    _hover={{
                        bg: 'pink.300',
                    }}
                    onClick={() => authenticate()}
                >
                    Connect Wallet
                </MenuButton>
            </Menu>
        )
    }

}

export default Login;
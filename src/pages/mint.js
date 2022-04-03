import * as React from 'react';
import Container from '../components/Container'
import { Box, useColorMode, Flex, Heading, HStack, Button, Link } from '@chakra-ui/react'
import { primaryTextColor, secondaryTextColor } from '../styles/darkMode';
import { AddIcon } from '@chakra-ui/icons';
import PreviewContainer from '../components/PreviewContainer';
import { useMoralis, useMoralisQuery } from "react-moralis";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");


require('dotenv').config()

const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
const appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const masterKey = process.env.REACT_APP_masterKey;

const CONTRACT_ABI = require('../Collectible.json');;
const CONTRACT_ADDRESS = "0x73882fe9A937c3C245ecdD2427c51868352D0388";

export default function Mint() {

    const { Moralis, isInitialized, setUserData, user, isAuthenticated } = useMoralis();
    // const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
    // const web3 = createAlchemyWeb3(alchemyKey);

    const mint = async() => {
            await Moralis.start({ serverUrl, appId, masterKey });
            await Moralis.enableWeb3()

            Moralis.User.currentAsync().then(function(user) {
                let wallet = user.get('ethAddress');
                console.log(wallet)
            });


            const sendOptions = {
                contractAddress: CONTRACT_ADDRESS,
                functionName: "claimItem",
                abi: CONTRACT_ABI["abi"],
                params: {
                    "tokenURI": "https://ipfs.livepeer.com/ipfs/QmdzSfDkUUgzozKmzTuENGWANYcnmbCoQcLZNZxLokUuQ2",
                },
            };

            const transaction = await Moralis.executeFunction(sendOptions);
            console.log(transaction);
        }
        // mint()

    return ( <
        Container >

        <
        Button width = "15px"
        onClick = { mint } >
        <
        /Button> < /
        Container >
    );
}
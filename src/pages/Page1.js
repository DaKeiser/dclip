import { Box, Button, Circle, GridItem, HStack, Image, Grid, Square, Text, VStack, Spacer, Avatar } from '@chakra-ui/react'
import Container from '../components/Container'
import { AiOutlineHeart, AiFillHeart, AiFillShopping, AiTwotoneMessage, AiOutlineShareAlt } from "react-icons/ai";


// const { useMoralis } = require('react-moralis');
const Moralis = require('moralis')
    // const { user } = useMoralis();
require('dotenv').config()

const serverUrl = process.env.REACT_APP_MORALIS_SERVER_URL;
const appId = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const masterKey = process.env.REACT_APP_masterKey;

const CONTRACT_ABI = require('../Collectible.json');;
const CONTRACT_ADDRESS = "0x5a596Ced5c9D9290D4733aC73F91c0d1a196C06D";

const web3API = async() => {
    await Moralis.start({ serverUrl, appId, masterKey });
    await Moralis.enableWeb3()

    Moralis.User.currentAsync().then(function(user) {
        let wallet = user.get('ethAddress');
        console.log(wallet)
            // document.getElementById('address').innerHTML = wallet
    });
    // const sendOptions = { chain: "ropsten", block_number_or_hash: "2" };

    // get block content on BSC
    // const transactions = await Moralis.Web3API.native.getBlock(options);
    // console.log(transactions)

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

// web3API()


export default function bla() {
    
    return ( <
        Container >
        <
        Grid templateColumns = 'repeat(12, 1fr)'
        // templateColumns='repeat(5, 1fr)'
        width = "100%" >
        <
        GridItem colSpan = { 3 }
        w = "100%" >
        <
        Box width = "100%" >
        <
        VStack pt = "50%"
        pl = "60%" >
        <
        Button bg = 'lightgreen' >
        <
        AiFillShopping / >
        <
        /Button> <
        Button >
        <
        AiOutlineHeart / >
        <
        /Button> <
        Button >
        <
        AiTwotoneMessage / >
        <
        /Button> <
        Button >
        <
        AiOutlineShareAlt / >
        <
        /Button> <
        /VStack> <
        /Box> <
        /GridItem>

        <
        GridItem colSpan = { 6 }
        w = "100%" >
        <
        Box width = "100%"
        m = { 12 } >
        <
        Text fontSize = '4xl'
        fontWeight = { 800 }
        mb = { 3 } > Magnificient Piece of Shit < /Text>

        <
        Box display = 'flex' >
        <
        Box display = 'flex'
        mb = { 3 } >
        <
        Avatar name = 'Saiakash'
        src = 'https://picsum.photos/50/50' / >
        <
        Box pl = { 2 }
        alignItems = "center" >
        <
        Text fontSize = "sm"
        fontWeight = { 600 }
        mb = {-2 } > Owned by < /Text> <
        Text fontSize = "xl"
        fontWeight = { 200 } > Saiakash < /Text> <
        /Box> <
        /Box> { /* <Spacer /> */ } <
        Box display = 'flex'
        mb = { 3 }
        ml = { 6 } >
        <
        Avatar name = 'Konidena'
        src = 'https://picsum.photos/50/50' / >
        <
        Box pl = { 2 }
        alignItems = "center" >
        <
        Text fontSize = "sm"
        fontWeight = { 600 }
        mb = {-2 } > Created by < /Text> <
        Text fontSize = "xl"
        fontWeight = { 200 } > Konidena < /Text> <
        /Box> <
        /Box> <
        /Box>


        <
        Box width = "100%"
        height = { "100%" } >
        <
        Image src = 'https://picsum.photos/600/600'
        borderRadius = 'lg'
        overflow = 'hidden' > < /Image> <
        /Box> <
        /Box> <
        /GridItem>

        <
        GridItem colSpan = { 3 }
        w = "100%" >
        <
        Box width = "100%" >
        <
        Text fontSize = "3xl" > Recommended < /Text> <
        VStack >
        <
        Box borderRadius = 'lg'
        borderWidth = { 2 }
        w = "100%"
        display = 'flex'
        overflow = 'hidden' >
        <
        Image src = "https://picsum.photos/100/100"
        p = { 3 } > < /Image> <
        Text p = { 3 } > Recommended < /Text> <
        /Box> <
        Box borderRadius = 'lg'
        borderWidth = { 2 }
        w = "100%"
        display = 'flex'
        overflow = 'hidden' >
        <
        Image src = "https://picsum.photos/100/100"
        p = { 3 } > < /Image> <
        Text p = { 3 } > Recommended < /Text> <
        /Box> <
        Box borderRadius = 'lg'
        borderWidth = { 2 }
        w = "100%"
        display = 'flex'
        overflow = 'hidden' >
        <
        Image src = "https://picsum.photos/100/100"
        p = { 3 } > < /Image> <
        Text p = { 3 } > Recommended < /Text> <
        /Box> <
        Box borderRadius = 'lg'
        borderWidth = { 2 }
        w = "100%"
        display = 'flex'
        overflow = 'hidden' >
        <
        Image src = "https://picsum.photos/100/100"
        p = { 3 } > < /Image> <
        Text p = { 3 } > Recommended < /Text> <
        /Box> <
        Box borderRadius = 'lg'
        borderWidth = { 2 }
        w = "100%"
        display = 'flex'
        overflow = 'hidden' >
        <
        Image src = "https://picsum.photos/100/100"
        p = { 3 } > < /Image> <
        Text p = { 3 } > Recommended < /Text> <
        /Box> <
        /VStack> <
        /Box> <
        /GridItem> <
        /Grid> <
        /Container>
    )
}
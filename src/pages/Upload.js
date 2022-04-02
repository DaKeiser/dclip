import { useMoralis, useMoralisQuery } from "react-moralis";
import Container from '../components/Container'
import VodApi from '../utils/LivepeerApi'

import {
    Flex,
    Heading,
    Link as ChakraLink,
    InputGroup,
    InputRightAddon,
    Stack,
    Text,
    Input,
    Box,
    Button,
    useColorMode,
    color,
} from '@chakra-ui/react'

import React, { useState } from 'react'
import {
    secondaryBg,
    primaryTextColor,
    primaryTextColorAlt,
    secondaryTextColor,
    secondaryTextColorAlt,
} from '../styles/darkMode'

import Dropzone from '../components/Dropzone'

const api = new VodApi(process.env.REACT_APP_API_KEY, process.env.REACT_APP_API_ENDPOINT);

const submit = async(files) => {
    // console.log(user)
    let assetName = "testing1234"
    let metadata = `{
        "attributes" : "1 v 4 clutch on Icebox",
        "owner" : "Saksham"
    }`

    console.log('1. Requesting upload URL... ');
    const {
        url: uploadUrl,
        asset: { id: assetId },
        task: importTask
    } = await api.requestUploadUrl(assetName);
    console.log(`Pending asset with id=${assetId}`);

    console.log('2. Uploading file...');
    await api.uploadFile(uploadUrl, files[0]);
    await api.waitTask(importTask);

    let asset = await api.getAsset(assetId || '');

    console.log('3. Starting export... ');
    let { task: exportTask } = await api.exportAsset(
        asset.id || '',
        JSON.parse(metadata)
    );
    console.log(`Created export task with id=${exportTask.id}`);
    exportTask = await api.waitTask(exportTask);

    const result = exportTask.output.export.ipfs
    console.log(
        `4. Export successful! Result: \n${JSON.stringify(result, null, 2)}`
    );

    console.log()
    console.log("Returning NFT MEtadata as ", JSON.parse(JSON.stringify(result))["videoFileCid"])
    return result['videoFileCid']

    // console.log(
    //     `5. Mint your NFT at:\n` +
    //     `https://livepeer.com/mint-nft?tokenUri=${result?.nftMetadataUrl}`
    // );


}

export default function UploadFile() {
    const { colorMode } = useColorMode()
    const [files, setFiles] = useState(null);
    const { Moralis, isInitialized, setUserData, user, isAuthenticated } = useMoralis();
    const { data, error, isLoading } = useMoralisQuery('Posts')

    if (error) {
        throw (error);
    }
    if (!isLoading) {
        console.log(data)
    }

    return ( <
        Container >
        <
        Flex direction = {
            { base: `column`, lg: `row` }
        }
        alignItems = 'center'
        mx = 'auto'
        my = {
            { xl: '16' }
        } >
        <
        Flex direction = {
            { base: `column`, lg: `row` }
        }
        bg = { secondaryBg[colorMode] }
        rounded = { 'xl' } >
        <
        Stack p = {
            { base: 4, sm: 6, md: 8 }
        }
        spacing = {
            { base: 8 }
        } >
        <
        Stack spacing = { 4 } >
        <
        Heading color = { primaryTextColorAlt[colorMode] }
        lineHeight = { 1.1 }
        fontSize = {
            { base: '2xl', sm: '3xl', md: '4xl' }
        } >
        Upload your file!
        <
        /Heading> <
        Text color = { secondaryTextColorAlt[colorMode] }
        fontSize = {
            { base: 'sm', sm: 'md' }
        } >
        Fill in the details below and drop the file beside and you are good to go!
        <
        /Text> < /
        Stack > <
        Box as = { 'form' }
        mt = { 10 } >
        <
        Stack spacing = { 4 } >
        <
        Input isRequired placeholder = "Title"
        bg = { 'gray.100' }
        border = { 0 }
        color = 'gray.900'
        _placeholder = {
            {
                color: secondaryTextColor[colorMode],
            }
        }
        /> <
        Input placeholder = "Description"
        bg = { 'gray.100' }
        border = { 0 }
        color = 'gray.900'
        _placeholder = {
            {
                color: secondaryTextColor[colorMode],
            }
        }
        /> <
        InputGroup >
        <
        Input isRequired placeholder = "Base Price"
        bg = { 'gray.100' }
        border = { 0 }
        color = 'gray.900'
        _placeholder = {
            {
                color: secondaryTextColor[colorMode],
            }
        }
        /> <
        InputRightAddon color = { primaryTextColor[colorMode] }
        bg = { secondaryTextColorAlt[colorMode] }
        children = 'MATIC' /
        >
        <
        /InputGroup> < /
        Stack > <
        Button onClick = {
            async() => {
                var outlink = await submit(files);


                console.log("Before Submission: ", user.get("Uploaded_Videos"))

                const Post = Moralis.Object.extend("Posts");
                const post = new Post();

                post.set("creator", user.get("username"));
                post.set("creatorEth", user.get("ethAddress"));
                post.set("cid", outlink)
                post.set("owner", "");
                post.set("ownerEth", "");


                post.save()
                    .then((post) => {
                        // Execute any logic that should take place after the object is saved.
                        alert('New object created with objectId: ' + post.id);
                        output.push(post.id)

                        setUserData({
                            "Uploaded_Videos": output
                        })

                        console.log("After Submission: ", user.get("Uploaded_Videos"))
                    }, (error) => {
                        // Execute any logic that should take place if the save fails.
                        // error is a Moralis.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    });

                var output = user.get("Uploaded_Videos")


            }
        }
        fontFamily = { 'heading' }
        mt = { 8 }
        w = { 'full' }
        bgGradient = "linear(to-r, red.400,pink.400)"
        color = { 'white' }
        _hover = {
            {
                bgGradient: 'linear(to-r, red.400,pink.400)',
                boxShadow: 'xl',
            }
        } >
        Upload <
        /Button> < /
        Box > <
        /Stack> <
        Box minWidth = { 500 }
        alignSelf = 'center'
        direction = 'column' >
        <
        Flex alignSelf = 'center'
        direction = 'column'
        pl = {
            { base: 0, lg: 10 }
        }
        my = {
            { base: 10, lg: 50 }
        }
        color = { primaryTextColorAlt[colorMode] } >
        <
        Dropzone setFiles = { setFiles }
        /> < /
        Flex > <
        /Box> < /
        Flex > <
        /Flex>

        <
        /Container>
    )
}
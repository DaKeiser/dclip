import * as React from 'react';
import Container from '../components/Container'
import { Box, useColorMode, Flex, Heading, HStack, Button, Link } from '@chakra-ui/react'
import { primaryTextColor, secondaryTextColor } from '../styles/darkMode';
import { AddIcon } from '@chakra-ui/icons';
import PreviewContainer from '../components/PreviewContainer';

export default function Dashboard() {
    const { colorMode } = useColorMode();
    var srces = []
    srces.push('https://ipfs.livepeer.com/ipfs/QmXrJ4gZccpUpUqHdaZ4bh7oeXKLefoEysaP65C97hC1jt')
    srces.push('https://ipfs.livepeer.com/ipfs/QmYADq73YCFJV7p3wt91FfoHT6ZeM3pncepxYc2vkEAq8R')
    srces.push('https://ipfs.livepeer.com/ipfs/QmTsvSchPd5r6LQM9yWiTJjdLG7UV9wrXVq8WCbZDbZsqu')
    srces.push('https://ipfs.livepeer.com/ipfs/QmZBVXtDpPwUxhfxo2t5RcWyW3yNVEvW9E6F3o25tC1hHg')

    return ( <
        Container >
        <
        Flex alignItems = 'center'
        w = {
            { sm: '420px', md: '680px', lg: '1024px' }
        } >
        <
        Box my = { 10 }
        p = { 5 }
        maxW = {
            { sm: '420px', md: '620px', lg: '1024px' }
        }
        shadow = 'md'
        borderWidth = '1px'
        borderRadius = 'lg' >
        <
        Heading fontSize = 'sm'
        bgGradient = 'radial(rgba(113,132,193,1), rgba(255,0,56,1))'
        bgClip = 'text' >
        <
        strong > Explore Categories < /strong> < /
        Heading > <
        Flex overflow = { 'scroll' }
        overflowY = "none"
        css = {
            {
                '&::-webkit-scrollbar': {
                    width: '1px',
                },
                '&::-webkit-scrollbar-track': {
                    width: '2px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: 'gray',
                    borderRadius: '4px',
                },
            }
        } >
        <
        HStack my = { 5 }
        spacing = '15px' >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        Box borderRadius = "sm"
        minW = '100px'
        Box shadow = 'md'
        borderWidth = '1px'
        h = '100px'
        d = "inline-block"
        w = "100px" / >
        <
        /HStack> < /
        Flex > <
        /Box> < /
        Flex > <
        Button as = { Link }
        leftIcon = { < AddIcon / > }
        rounded = { 'lg' }
        size = { 'lg' }
        fontWeight = { 'normal' }
        px = { 6 }
        bgGradient = "linear(to-r, red.400,pink.400)"
        color = { 'white' }
        href = { "/upload" }
        mb = { 5 }
        _hover = {
            {
                bgGradient: 'linear(to-r, red.600,pink.600)',
                boxShadow: 'xl',
                textDecoration: 'none'
            }
        } >
        Create a Post <
        /Button> <
        Box width = "980" >
        <
        Box padding = { 4 }
        pl = { 0 }
        overflow = 'hidden'
        w = "100%"
        maxW = "980px"
        mx = "auto"
        sx = {
            { columnCount: [1, 2, 3], columnGap: "8px" }
        }
        ml = { 1 } > {
            srces.map((src) => ( <
                PreviewContainer src = { src }
                />
            ))
        } <
        /Box> < /
        Box > <
        /Container>
    );
}
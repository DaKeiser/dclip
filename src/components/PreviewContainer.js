import { Box, Link, Skeleton, Text, Image, Stack } from '@chakra-ui/react'
import React, { useState } from 'react'

const PreviewContainer = (props) => {
    const [imageLoad, setImageLoad] = useState(false);
    return ( <
        Box borderRadius = "lg"
        Box shadow = 'md'
        borderWidth = '1px'
        h = "100%"
        w = "100%"
        d = "inline-block"
        mb = { 2 } >
        <
        Skeleton isLoaded = { imageLoad }
        h = { "100%" }
        borderRadius = "lg" >
        <
        iframe alt = { 'test' }
        borderRadius = "lg"
        fit = { 'cover' }
        align = { 'center' }
        h = { "100%" }
        w = { '100%' }
        src = { props.src }
        onLoad = {
            () => setImageLoad(true)
        }
        /> < /
        Skeleton > <
        /Box>   
    )
}

export default PreviewContainer;
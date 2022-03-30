import { Box, Heading } from "@chakra-ui/layout"
import { useColorMode } from "@chakra-ui/react";
import { primaryTextColor } from '../styles/darkMode';

const Logo = () => {
    const { colorMode } = useColorMode()
    return (
        <Box p={8} pb={4}>
            <Heading color={primaryTextColor[colorMode]}>Web3 Tiktok</Heading>
        </Box>
    )
};

export default Logo;
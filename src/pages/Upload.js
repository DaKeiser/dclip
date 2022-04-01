import Container from '../components/Container'
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

import React, {useState} from 'react'
import {
    secondaryBg, 
    primaryTextColor, 
    primaryTextColorAlt, 
    secondaryTextColor,
    secondaryTextColorAlt,
} from '../styles/darkMode'

import Dropzone from '../components/Dropzone'

const submit = (files) => {
    console.log(files)
}

export default function UploadFile() {
    const { colorMode } = useColorMode()
    const [files, setFiles] = useState(null);
    return (
        <Container>
                <Flex
                    alignItems='center'
                    mx='auto'
                >
                    <Flex
                        direction={{ base: `column`, lg: `row` }}
                        bg={secondaryBg[colorMode]}
                        rounded={'xl'}
                    >
                    <Stack                        
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                    >
                        <Stack spacing={4}>
                            <Heading
                                color={primaryTextColorAlt[colorMode]}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                            >
                                Upload your file!
                            </Heading>
                            <Text 
                                color={secondaryTextColorAlt[colorMode]}
                                fontSize={{ base: 'sm', sm: 'md' }}
                            >
                                Fill in the details below and drop the file beside and you are good to go!
                            </Text>
                        </Stack>
                        <Box 
                            as={'form'} 
                            mt={10}
                        >
                            <Stack spacing={4}>
                                <Input
                                    isRequired
                                    placeholder="Title"
                                    bg={'gray.100'}
                                    border={0}
                                    color='gray.900'
                                    _placeholder={{
                                        color: secondaryTextColor[colorMode],
                                    }}
                                />
                                <Input
                                    placeholder="Description"
                                    bg={'gray.100'}
                                    border={0}
                                    color='gray.900'
                                    _placeholder={{
                                        color: secondaryTextColor[colorMode],
                                    }}
                                />
                                <InputGroup>                                
                                    <Input
                                        isRequired
                                        placeholder="Base Price"
                                        bg={'gray.100'}
                                        border={0}
                                        color='gray.900'
                                        _placeholder={{
                                            color: secondaryTextColor[colorMode],
                                        }}
                                    />
                                    <InputRightAddon 
                                        color={primaryTextColor[colorMode]}
                                        bg={secondaryTextColorAlt[colorMode]}
                                        children='MATIC' 
                                    />
                                </InputGroup>
                            </Stack>
                            <Button
                                onClick={() => submit(files)}
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                            }}>
                                Upload
                            </Button>
                        </Box>
                    </Stack>
                    <Box 
                        minWidth={500}
                        alignSelf='center'
                        direction='column'
                    >
                        <Flex
                            direction='column'
                            pl={{ base: 0, lg: 10 }}
                            my={{ base: 10, lg: 50 }}
                            mx='auto'
                            alignItems='center'
                            color={primaryTextColorAlt[colorMode]}
                        >
                            <Dropzone setFiles={setFiles}/>
                        </Flex>
                    </Box>
                    </Flex>
                </Flex>
            
        </Container>
    )
}
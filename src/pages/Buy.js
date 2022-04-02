import {
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    Avatar,
    IconButton,
    Spacer,
    InputGroup,
    InputRightAddon,
    createIcon,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    useColorModeValue,
    FormControl,
    Input,
    Skeleton,
    useColorMode,
    Link,
} from '@chakra-ui/react';

import Container from '../components/Container'
import { iconColor, shadowColor, linkColor, secondaryTextColor, secondaryTextColorAlt, navBgColorAlt, primaryTextColor } from '../styles/darkMode';
import React, {useState} from 'react';

export default function Buy() {
    const {colorMode} = useColorMode()
    
    const [priceInput, setPriceInput] = useState('')
    const handleInputChange = (e) => setPriceInput(e.target.value)
    const handleBuy = (e) => null
    const isError = priceInput < 20

	return (
		<Container>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 16, md: 18, lg: '50px' }}
                direction={{ base: 'column', md: 'row' }}
                maxW={{ base: 80, md: 1000, lg: 1250  }}
            >
                <Flex
                    flex={1}
                    justify={'center'}
                    align={'center'}
                    position={'relative'}
                    w={'initial'}
                    minW={{ base: 80, md: 400, lg: 500  }}
                    maxW={{ base: 100, md: 1000, lg: 1200  }}
                >
                    <Box
                        position={'relative'}
                        height={'300px'}
                        rounded={'2xl'}
                        boxShadow={'2xl'}
                        width={'full'}
                        overflow={'hidden'}
                    >
                        <Skeleton height='100%' />
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={''}
                            />
                        <Skeleton height='20px' />
                    </Box>
                </Flex>
                <Stack 
                    flex={1} 
                    spacing={{ base: 5, md: 7 }}
                    minW={{md:'580', lg:'580'}}
                >
                    <Flex
                        minH={'auto'}
                        align={'center'}
                        justify={'center'}
                    >
                    <Stack
                        spacing={4}
                        w={'full'}
                        maxW={'md'}
                        bg={useColorModeValue('white', 'gray.700')}
                        rounded={'xl'}
                        boxShadow={'lg'}
                        p={6}
                        my={12}
                    >
                        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                            Buy NFT
                        </Heading>
                        <Flex>
                        <Text
                            fontSize={{ base: 'sm', sm: 'md' }}
                            color={useColorModeValue('gray.800', 'gray.400')}
                        >
                            Creator Username: 
                        </Text>
                        <Spacer/>
                        <Text
                            fontSize={{ base: 'sm', sm: 'md' }}
                            color={useColorModeValue('gray.800', 'gray.400')}
                        >
                            Owner Username: 
                        </Text>
                        </Flex>
                        <Text
                            fontSize={{ base: 'sm', sm: 'md' }}
                            color={useColorModeValue('gray.800', 'gray.400')}
                        >
                            Min Bid Price: 
                        </Text>
                        <FormControl id="base price" isRequired isInvalid={isError}>   
                                <FormLabel htmlFor='Bid Price'>Bid Price</FormLabel>        
                                <Input
                                    isRequired
                                    placeholder="20"
                                    bg={'gray.100'}
                                    border={0}
                                    color='gray.900'
                                    _placeholder={{ color: 'gray.500' }}
                                    onChange={handleInputChange}
                                />
                                {!isError ? (
                                    <FormHelperText>
                                    </FormHelperText>
                                ) : (
                                    <FormErrorMessage>Set above min base price</FormErrorMessage>
                                )}
                        </FormControl>
                        <Stack spacing={6}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onSubmit={handleBuy}
                        >
                                Buy the Art
                        </Button>
                        </Stack>
                    </Stack>
                    </Flex>
                </Stack>
            </Stack>            
        </Container>
    )
}
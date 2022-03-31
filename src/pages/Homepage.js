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
    createIcon,
    useColorMode,
    Link,
} from '@chakra-ui/react';

import Container from '../components/Container'
import { iconColor, shadowColor, linkColor, secondaryTextColor, navBgColorAlt, primaryTextColor } from '../styles/darkMode';
import { FaHeart } from 'react-icons/fa';
import React, {useState} from 'react';

export default function Homepage() {
    const {colorMode} = useColorMode()
    const [likes, setLikes] = useState(326);
    const [updated, setUpdate] = useState(false);

    const updateLikes = () => {
        if(!updated) {
            setLikes(likes+1)
            setUpdate(true)
            console.log(likes, updated)
        }
        else {
            setLikes(likes-1)
            setUpdate(false)
            console.log(likes, updated)
        }
    }

    return (
        <Container>
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 16, md: 18, lg: '50px' }}
                direction={{ base: 'column', md: 'row' }}
                maxW={{ base: 80, md: 1000, lg: 1250  }}
            >
                <Stack 
                    flex={1} 
                    spacing={{ base: 5, md: 7 }}
                    minW={{md:'580', lg:'580'}}
                >
                    <Heading
                        lineHeight={1.1}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                    >
                        <Text
                            as={'span'}
                            position={'relative'}
                        >
                            Write once,
                        </Text>
                        <br />
                        <Text as={'span'}
                            bgGradient='linear(to-l, #FF0080, #7928CA)'
                            bgClip='text'
                        >
                            use everywhere!
                        </Text>
                    </Heading>
                    <Text color={secondaryTextColor[colorMode]}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Quisque sit amet est sed turpis commodo varius. Duis in consectetur sem, sed facilisis sem. 
                        Integer pulvinar odio non nisi posuere sagittis. 
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={{ base: 'column', sm: 'row' }}
                    >
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            variant='outline'
                            outlineColor={'gray.500'}
                            px={6}
                            leftIcon={<PlayIcon h={4} w={4} color={iconColor[colorMode]} />}
                        >
                            How It Works
                        </Button>
                        <Button
                            rounded={'full'}
                            size={'lg'}
                            fontWeight={'normal'}
                            px={6}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.600,pink.600)',
                                boxShadow: 'xl'
                        }}>
                            Get started
                        </Button>
                    </Stack>
                </Stack>
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
                        <IconButton
                            aria-label={'Play Button'}
                            variant={'ghost'}
                            _hover={{ bg: 'transparent' }}
                            icon={<PlayIcon w={12} h={12} />}
                            size={'lg'}
                            color={'white'}
                            position={'absolute'}
                            left={'50%'}
                            top={'50%'}
                            transform={'translateX(-50%) translateY(-50%)'}
                        />
                        <Box
                            aria-label={'Featured-tag'}
                            variant={'ghost'}
                            color={'white'}
                            position={'absolute'}
                            left={'4%'}
                            top={'70%'}
                            transform={'translateX(-5%) translateY(-90%)'}
                            bgGradient='linear(to-r, red.500,pink.500)'
                            rounded={5}
                            w='64px'
                            h='19px'
                        >
                            <Text
                                align={'center'}
                                fontSize='xs'
                                position="center"
                                transform={'translateY(10%)'}
                            >
                                <strong>Featured</strong>
                            </Text>
                        </Box>
                        <Link
                            href='https://chakra-ui.com' isExternal
                        >
                            <Text 
                                fontWeight={600} 
                                color={'gray.500'} 
                                mb={4}
                                aria-label={'username'}
                                variant={'ghost'}
                                _hover={{ bg: 'transparent' }}
                                size={'lg'}
                                color={'white'}
                                position={'absolute'}
                                left={'5%'}
                                top={'80%'}
                                transform={'translateX(-3%) translateY(-90%)'}
                                w='40'
                                _hover={{
                                    bgColor: 'gray.300',
                                    bgClip: 'text'
                                }}
                            >
                                <strong>@lindsey_jam3s</strong>
                            </Text>
                        </Link>
                        
                        <Stack spacing={'18px'}>
                            <Text
                                position={'absolute'}
                                left={{sm:'5%', md:'5%'}}
                                top={'90%'}
                                transform={'translateX(-3%) translateY(-90%)'}
                                color={'white'}
                            >
                                Loving the vibes
                            </Text> 
                            <Text
                                position={'absolute'}
                                left={{sm:'5%', md:'5%'}}
                                top={'90%'}
                                transform={'translateX(-3%) translateY(-90%)'}
                                color={'white'}
                            >
                                #vibes, #reels, #happy
                            </Text> 
                        </Stack>                       
                        <Link
                            href='https://chakra-ui.com' isExternal
                        >
                            <Avatar
                                position={'absolute'}
                                left={{sm:'73%', md:'85%'}}
                                top={'62%'}
                                transform={'translateX(10%) translateY(-50%)'}
                                size="md"
                                src={"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
                                css={{
                                    'border': '2px solid white',
                                    // 'border-image-slice': 1,
                                    // 'border-image-source': 'linear(to-r, red.400,pink.400)'
                                }}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)'
                                }}
                            />
                        </Link>

                        <IconButton
                            position={'absolute'}
                            left={{sm:'75%', md:'86%'}}
                            top={'74%'}
                            transform={'translateX(5%) translateY(-5%)'}                            
                            bgGradient={
                                updated?'linear(to-r, red.400,pink.400)':null
                            }
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)'
                            }}
                            onClick={updateLikes}
                        >
                            <FaHeart/>
                        </IconButton>

                        <Text
                            position={'absolute'}
                            left={{sm:'77%', md:'87%'}}
                            top={'87%'}
                            transform={'translateX(3%) translateY(5%)'}
                            color={'white'}
                        >
                            {likes}
                        </Text>

                        <Image
                            alt={'Hero Image'}
                            fit={'cover'}
                            align={'center'}
                            w={'100%'}
                            h={'100%'}
                            src={
                            'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                            }
                        />
                    </Box>
                </Flex>
            </Stack>
        </Container>
    );
}

const PlayIcon = createIcon({
    displayName: 'PlayIcon',
    viewBox: '0 0 58 58',
    d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
});
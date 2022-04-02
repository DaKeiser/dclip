import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Container from '../components/Container';
import { useMoralis } from "react-moralis";
import { useState } from 'react';


export default function Signup() {
    const { authenticate, user } = useMoralis();
    const [uname, setUsername] = useState(null);
    const handleChange = (event) => setUsername(event.target.value)
    const onClickEvent = () => {
        authenticate()
        user.set("username", uname);
    }
    return (
        <Container>
            <Flex
                minH={'auto'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign Up</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                    to get started!
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                    <FormControl id="email">
                        <FormLabel>Username</FormLabel>
                        <Input onChange={handleChange} type="username" />
                    </FormControl>
                    <Stack spacing={10}>
                        <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={() => onClickEvent()}
                        >
                            Connect Wallet
                        </Button>
                    </Stack>
                    </Stack>
                </Box>
                </Stack>
            </Flex>
      </Container>
    );
  }
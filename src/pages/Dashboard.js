import * as React from 'react';
import Container from '../components/Container'
import {Box, useColorMode, Flex, Heading, HStack, Button, Link} from '@chakra-ui/react'
import { primaryTextColor, secondaryTextColor } from '../styles/darkMode';
import { AddIcon } from '@chakra-ui/icons';
import PreviewContainer from '../components/PreviewContainer';
import { useMoralis,useMoralisQuery} from 'react-moralis';
import { useState } from 'react';

export default function Dashboard() {
	const { colorMode } = useColorMode();

	// const {  } = useMoralis();
	const { Moralis, setUserData, authenticate, user } = useMoralis();
	// const [uname, setUsername] = useState(null);
	// const handleChange = (event) => setUsername(event.target.value)
	const onClickEvent = () => {
	// 	authenticate()
		
		// if(uname) {
		// 	user.set("username", uname);
		// }

		const NewUser = Moralis.Object.extend("Users");
		// NewUser
		const _newUser = new NewUser();
		_newUser.set('ethAddress', user.get('ethAddress'))
		_newUser.set('username', "")
		_newUser.set('owned', 0)
		_newUser.set('created', 0)
		_newUser.save()
		console.log("_newUser ", _newUser)
		.then((_newUser) => {
			// Execute any logic that should take place after the object is saved.
			alert('New object created with objectId: ' + _newUser.username);
			// output.push(post.id)

			// setUserData({
			//     "Uploaded_Videos": output
			// })

			// console.log("After Submission: ", user.get("Uploaded_Videos"))
		}, (error) => {
			// Execute any logic that should take place if the save fails.
			// error is a Moralis.Error with an error code and message.
			alert('Failed to create new object, with error code: ' + error.message);
		});
	}
	onClickEvent()

	var srces = []
	for(var i=0;i<20;i++) {
	  	var h = parseInt(Math.random() * 500)
	  	var w = parseInt(Math.random() * 500)
		srces.push(`https://picsum.photos/${w}/${h}`)
	}
	return (
		<Container>
			<Flex alignItems='center' w={{ sm: '420px', md: '680px', lg: '1024px' }}>
				<Box my={10} p={5} maxW={{ sm: '420px', md: '620px', lg: '1024px' }} shadow='md' borderWidth='1px' borderRadius='lg'>
					<Heading fontSize='sm'
						bgGradient='radial(rgba(113,132,193,1), rgba(255,0,56,1))'
						bgClip='text'
					>
						<strong>Explore Categories</strong>
					</Heading>
					<Flex 
					overflow={'scroll'}
					overflowY="none"
					css={{
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
					}}>
					<HStack my={5} spacing='15px' >
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" minW='100px' Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
					</HStack>
					</Flex>
				</Box>
			</Flex>
			<Button
				as={Link}  
				leftIcon={<AddIcon />}                          
				rounded={'lg'}
				size={'lg'}
				fontWeight={'normal'}
				px={6}
				bgGradient="linear(to-r, red.400,pink.400)"
				color={'white'}
				href={"/upload"}
				mb={5}
				_hover={{
					bgGradient: 'linear(to-r, red.600,pink.600)',
					boxShadow: 'xl',
					textDecoration: 'none'
			}}>
				Create a Post
			</Button>
			<Box width="980">
				<Box
					padding={4}
					pl={0}
					overflow='hidden'
					w="100%"
					maxW="980px"
					mx="auto"
					sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
					ml={1}
				>
					{srces.map((src) => (
						<PreviewContainer src={src}/>
					))}
				</Box>
			</Box>
		</Container>
	);
}
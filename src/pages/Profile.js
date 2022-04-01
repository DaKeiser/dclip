import { Box, Button, Circle, GridItem, Heading, Center, HStack, IconButton, ButtonGroup, Stack, Skeleton, Image, Grid, Square, Text, VStack, Spacer, Avatar, Divider, Flex, useColorMode } from '@chakra-ui/react'
import Container from '../components/Container'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { primaryTextColor, secondaryBg, secondaryTextColor } from '../styles/darkMode'
import React, {useState} from 'react';

export default function Profile() {
	const { colorMode } = useColorMode();
	const [imageLoad, setImageLoad] = useState(false);
	var srces = []
	for(var i=0;i<20;i++) {
	  	var h = parseInt(Math.random() * 500)
	  	var w = parseInt(Math.random() * 500)
		srces.push(`https://picsum.photos/${w}/${h}`)
	}
    return (
		<Container>
			<Stack
				direction={{ base: 'column', lg: 'row' }}
				spacing={{ base: '8', lg: '10' }}
			>
				{/* User Profile image flex */}
				<Stack
					direction={{ base: 'column' }}
					rounded={'xl'}
					spacing={4}
				>
					{/* User Image */}
					<Skeleton isLoaded={imageLoad} boxSize='220px' borderRadius='lg'>
						<Image
							borderRadius='lg'
							boxSize='260px'
							src='pp.jpeg'
							objectFit='cover'
							alt='profile-pic'
							onLoad={() => setImageLoad(true)}
						/>
					</Skeleton>						
					{/* Created and Owned Flex */}						
					<Box p={1} shadow='md' borderWidth='1px' borderRadius='lg'>
						<Stack direction={'row'} justify={'center'} spacing={6} height='48px'>
							<Stack spacing={0} align={'center'}>
								<Text fontWeight={600}>29</Text>
								<Text fontSize={'sm'} color={'gray.500'}>
									<strong>Created</strong>
								</Text>
							</Stack>
							<Divider orientation='vertical' borderColor={colorMode=='light'?'gray.400':'gray.500'}/>
							<Stack spacing={0} align={'center'}>
								<Text fontWeight={600}>34</Text>
								<Text fontSize={'sm'} color={'gray.500'}>
									<strong>Owned</strong>
								</Text>
							</Stack>
						</Stack>
					</Box>
					<Stack spacing='1'>
						<ButtonGroup variant="ghost" color="gray.600" justifyContent={'center'}>
							<IconButton borderRadius='10px' as="a" href="https://www.facebook.com/" aria-label="fb" icon={<FaFacebook fontSize="20px" />} />
							<IconButton borderRadius='10px' as="a" href="https://www.twitter.com/" aria-label="twitter" icon={<FaTwitter fontSize="20px" />} />
							<IconButton borderRadius='10px' as="a" href="https://instagram.com/" aria-label="insta" icon={<FaInstagram fontSize="20px" />} />
						</ButtonGroup>
						<Center><strong><Text fontSize='xs'>Follow On</Text></strong></Center>
					</Stack>
				</Stack>
				{/* Username, socials, display flex */}
				<Flex
					alignItems='center'
					direction={{ base: 'row', lg: 'column' }}
				>
					{/* Username, socials flex */}
					<Flex>
						<Box p={5} w={'980px'} shadow='md' borderWidth='1px' borderRadius='lg'>
							<Heading fontSize='3xl'
								bgGradient='radial(rgba(113,132,193,1), rgba(255,0,56,1))'
								bgClip='text'
							>
								@username
							</Heading>
							<Text mt={4}>
								(metamask wallet address)
							</Text>
						</Box>
					</Flex>
					{/* Masonry flex */}
					<Flex>
						<Box width="100%" pt="5%">
							<Box
								padding={4}
								pl={0}
								overflow='hidden'
								w="100%"
								maxW="900px"
								mx="auto"
								sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
								ml={1}
							>
								{srces.map((src) => (
									<Box borderRadius="lg" Box shadow='md' borderWidth='1px' h={parseInt(src.slice(-3))} d="inline-block" w="100%" mb={2}>{src.slice(-3)}</Box>
								))}
							</Box>
						</Box>
					</Flex>
				</Flex>
			</Stack>
		</Container>
	)
}
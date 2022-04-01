import * as React from 'react';
import Container from '../components/Container'
import {Box, useColorMode, Flex, Heading, HStack, Text} from '@chakra-ui/react'

export default function Dashboard() {
	const { colorMode } = useColorMode();
	var srces = []
	for(var i=0;i<20;i++) {
	  	var h = parseInt(Math.random() * 500)
	  	var w = parseInt(Math.random() * 500)
		srces.push(`https://picsum.photos/${w}/${h}`)
	}
	return (
		<Container>
			<Flex>
				<Box my={10} p={5} w={'1280px'} shadow='md' borderWidth='1px' borderRadius='lg'>
					<Heading fontSize='sm'
						bgGradient='radial(rgba(113,132,193,1), rgba(255,0,56,1))'
						bgClip='text'
					>
						<strong>Explore Categories</strong>
					</Heading>
					<HStack my={5} spacing='15px'>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
						<Box borderRadius="sm" Box shadow='md' borderWidth='1px' h='100px' d="inline-block" w="100px"/>
					</HStack>
				</Box>
			</Flex>
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
						<Box borderRadius="lg" Box shadow='md' borderWidth='1px' h={parseInt(src.slice(-3))} d="inline-block" w="100%" mb={2}>{src.slice(-3)}</Box>
					))}
				</Box>
			</Box>
		</Container>
	);
}
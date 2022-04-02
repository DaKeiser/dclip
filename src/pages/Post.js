import { Box, Button, Circle, GridItem, HStack, Image, Grid, Square, Text, VStack, Spacer, Avatar } from '@chakra-ui/react'
import Container from '../components/Container'
import { AiOutlineHeart, AiFillHeart, AiFillShopping, AiTwotoneMessage, AiOutlineShareAlt } from "react-icons/ai";
import { secondaryTextColor } from '../styles/darkMode';
import React, {useColorMode} from '@chakra-ui/react'

export default function Post() {
  const { colorMode } = useColorMode();
  return (
    <Container>
      <Grid
        templateColumns='repeat(12, 1fr)'
        width="100%"
      >
        <GridItem colSpan={[1, 2, 3]} w="100%">
          <Box width="100%">
            <VStack pt="10%">
              <Button bg='lightgreen'>
                <AiFillShopping />
              </Button>
              <Button>
                <AiOutlineHeart />
              </Button>
              <Button>
                <AiTwotoneMessage />
              </Button>
              <Button>
                <AiOutlineShareAlt />
              </Button>
            </VStack>
          </Box>
        </GridItem>

        <GridItem colSpan={6} w="100%">
          <Box width="100%">
            <Text fontSize='4xl' fontWeight={800} mb={3}>Magnificient Piece of Shit</Text>
            <Text fontSize='sm' fontWeight={300} mb={7} color={secondaryTextColor[colorMode]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Quisque sit amet est sed turpis commodo varius. Duis in consectetur sem, sed facilisis sem. 
              Integer pulvinar odio non nisi posuere sagittis. 
            </Text>

            <Box display='flex'>
              <Box display='flex' mb={3}>
              <Avatar name='Saiakash' src='https://picsum.photos/50/50' />
                <Box pl={2} alignItems="center">
                  <Text fontSize="sm" fontWeight={600} mb={-2}>Owned by</Text>
                  <Text fontSize="xl" fontWeight={200}>Saiakash</Text>
                </Box>
              </Box>
              {/* <Spacer /> */}
              <Box display='flex' mb={3} ml={6}>
              <Avatar name='Konidena' src='https://picsum.photos/50/50' />
                <Box pl={2} alignItems="center">
                  <Text fontSize="sm" fontWeight={600} mb={-2}>Created by</Text>
                  <Text fontSize="xl" fontWeight={200}>Konidena</Text>
                </Box>
              </Box>
            </Box>


            <Box width="100%" height={"100%"}>
              <Image src='https://picsum.photos/600/600' borderRadius='lg' overflow='hidden'></Image>
            </Box>
          </Box>
        </GridItem>
        
        <GridItem colSpan={3} w="100%">
          <Box width="100%">
            <Text fontSize="3xl">Recommended</Text>
            <VStack>
              <Box borderRadius='lg' maxH={20} borderWidth={2} w="100%" display='flex' overflow='hidden'>
                <Image src="https://picsum.photos/100/100" p={0} ></Image>
                <Text p={1}>Recommended</Text>
              </Box>
              <Box borderRadius='lg' maxH={20} borderWidth={2} w="100%" display='flex' overflow='hidden'>
                <Image src="https://picsum.photos/100/100" p={0} ></Image>
                <Text p={1}>Recommended</Text>
              </Box>
              <Box borderRadius='lg' maxH={20} borderWidth={2} w="100%" display='flex' overflow='hidden'>
                <Image src="https://picsum.photos/100/100" p={0} ></Image>
                <Text p={1}>Recommended</Text>
              </Box>
              <Box borderRadius='lg' maxH={20} borderWidth={2} w="100%" display='flex' overflow='hidden'>
                <Image src="https://picsum.photos/100/100" p={0} ></Image>
                <Text p={1}>Recommended</Text>
              </Box>
              <Box borderRadius='lg' maxH={20} borderWidth={2} w="100%" display='flex' overflow='hidden'>
                <Image src="https://picsum.photos/100/100" p={0} ></Image>
                <Text p={1}>Recommended</Text>
              </Box>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}
import { Box, Button, Circle, GridItem, HStack, Stack, Image, Grid, Square, Text, VStack, Spacer, Avatar, Divider } from '@chakra-ui/react'
import Container from '../components/Container'
import { AiOutlineHeart, AiFillHeart, AiFillShopping, AiTwotoneMessage, AiOutlineShareAlt } from "react-icons/ai";

export default function Profile() {

  var srces = []
  for(var i=0;i<20;i++) {
    var h = parseInt(Math.random() * 500)
    var w = parseInt(Math.random() * 500)
    srces.push(`https://picsum.photos/${w}/${h}`)
  }

  console.log(srces)
  return (
    <Container>
      <Grid
        templateColumns='repeat(12, 1fr)'
        // templateColumns='repeat(5, 1fr)'
        width="100%"
      >
        <GridItem colSpan={3} w="100%">
          <Box width="100%">
            <VStack pl="40%" pt="20%">
              <Box borderRadius='lg' w="200px" borderWidth={2} overflow='hidden'>
                <Image src="https://picsum.photos/200/200" ></Image>
                <Stack direction={'row'} justify={'center'} spacing={6}>
                  <Stack spacing={0} align={'center'} p={2}>
                    <Text fontWeight={600}>23k</Text>
                    <Text fontSize={'sm'} color={'gray.500'}>
                      Followers
                    </Text>
                  </Stack>

                  <Stack spacing={0} align={'center'} p={2}>
                    <Text fontWeight={600}>23k</Text>
                    <Text fontSize={'sm'} color={'gray.500'}>
                      Followers
                    </Text>
                  </Stack>
                </Stack>
                {/* </Box> */}
              </Box>
            </VStack>
          </Box>
        </GridItem>

        <GridItem colSpan={9} w="100%">
          
          <Box width="100%" pt="5%">
            <Text fontSize='4xl' fontWeight={800} mb={3}>Magnificient Piece of Shit</Text>
            <Box
              padding={4}
              pl={0}
              overflow='hidden'
              w="100%"
              maxW="900px"
              mx="auto"
              // bg="gray.800"
              sx={{ columnCount: [1, 2, 3], columnGap: "8px" }}
              ml={1}
            >
              {srces.map((src) => (
                <Box borderRadius="lg" bg="tomato" h={parseInt(src.slice(-3))} d="inline-block" w="100%" mb={2}>{src.slice(-3)}</Box>
              ))}
            </Box>
          </Box>
        </GridItem>
      </Grid>
    </Container>
  )
}
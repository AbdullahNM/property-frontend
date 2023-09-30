import React from 'react'

import { Image,Flex,Box,Text,Button } from '@chakra-ui/react'
import { SimpleGrid, GridItem } from '@chakra-ui/react'
import PropertyCard from '../components/PropertyCard'
const Home = () => {
  return (
    <>
    <Flex>
      <Text>Home</Text>
    </Flex>
    <PropertyCard/>
    <SimpleGrid  minChildWidth='10vh' spacing='10px' spacingY={'auto'} gap={2}>
    <GridItem w='100%' h='10' bg='blue.500' > <PropertyCard/> </GridItem>
    <GridItem w='100%' h='10' bg='blue.500' ><PropertyCard/></GridItem>
    <GridItem w='100%' h='10' bg='blue.500' ><PropertyCard/></GridItem>
    <GridItem w='100%' h='10' bg='blue.500' ><PropertyCard/></GridItem>
</SimpleGrid>
    </>
  )
}

export default Home
import { useState } from "react";
import {
  Heading,
  Box,
  Text,
  VStack,
  HStack
} from "@chakra-ui/layout";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";


const SignUp = () => {
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={['none',"1px"]}
      borderColor={['none',"gray.300"]}
      borderRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={['flex-start','center']}>
          <Heading >SignUp</Heading>
          <Text>Enter your email and password to begin</Text>
        </VStack>
        <FormControl>
          <FormLabel>
            E-Mail Address
          </FormLabel>
          <Input rounded='none' variant='filled'/>
          <FormLabel>
            Password
          </FormLabel>
          <Input rounded='none' variant='filled' type='password' />
        </FormControl>
        <Button rounded='none' colorScheme="teal" w='full'>
          Signup
        </Button>
      </VStack>
    </Box>
  );
};

export default SignUp;

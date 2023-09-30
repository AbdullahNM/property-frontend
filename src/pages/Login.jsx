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


const Login = () => {
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
          <Heading >Login</Heading>
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
        <Button rounded='none' colorScheme="blue" w='full'>
          Login
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;

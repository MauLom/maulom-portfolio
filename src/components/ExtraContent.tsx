import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

function ExtraContentComponent () {
  const bgColor = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <Box as="section" bg={bgColor} py={10}>
      <Container maxW="container.xl">
        <VStack spacing={4} textAlign="center">
          <Heading as="h3" size="lg" color={textColor}>
            Join Our Community
          </Heading>
          <Text fontSize="md" color={textColor} px={{ base: 4, md: 16 }}>
            Become a part of our exclusive platform where you can share ideas, discuss projects, and collaborate with professionals from all over the world.
          </Text>
          <Button size="lg" colorScheme="blue" mt={8}>
            Get Started
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};
export default ExtraContentComponent
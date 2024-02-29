import React from 'react';
import { Box, Flex, Heading, Text, Image, useColorModeValue, VStack, Container } from '@chakra-ui/react';

export default function BannerComponent() {
    return (
        <Box as="section" bg={useColorModeValue('gray.100', 'gray.800')} py={10}>
            <Container maxW="container.xl">
                <VStack spacing={8}>
                    <Image
                        borderRadius="lg"
                        src="/path-to-your-image.jpg" // Replace with the path to your image
                        alt="Human figure"
                        objectFit="cover"
                        boxSize="300px" // Adjust the size as needed
                        alignSelf="center" // Centers the image in the VStack
                    />

                    <Box textAlign="center">
                        <Heading as="h1" size="xl" mb={5}>
                            About Me
                        </Heading>
                        <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.200')}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque leo, nec fermentum eros. Nullam non dui vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                        </Text>
                        {/* You can add more content here such as buttons or icons */}
                    </Box>
                </VStack>
            </Container>
        </Box>
    );
};

import React from 'react';
import {
    Box,
    SimpleGrid,
    Image,
    Text,
    Heading,
    Button,
    useColorModeValue,
    Container
} from '@chakra-ui/react';

// Sample data for the content previews. Replace with your actual data.
const contentPreviews = [
    {
        title: 'Project 1',
        description: 'An exciting project that solves real-world problems.',
        imageUrl: '/path-to-your-project-image-1.jpg',
        link: '#'
    },
    {
        title: 'Project 2',
        description: 'A creative endeavor showcasing innovative design.',
        imageUrl: '/path-to-your-project-image-2.jpg',
        link: '#'
    },
    // Add more content previews as needed
];

function OverallComponent() {
    // Color mode values defined outside the map callback
    const bgColor = useColorModeValue('white', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.200');

    return (
        <Box as="section" bg={useColorModeValue('gray.100', 'gray.800')} py={10}>
            <Container maxW="container.xl">
                <Heading as="h2" size="xl" textAlign="center" mb={10}>
                    Featured Work
                </Heading>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                    {contentPreviews.map((content, index) => (
                        <Box key={index} bg={bgColor} borderRadius="lg" overflow="hidden">
                            <Image
                                src={content.imageUrl}
                                alt={content.title}
                                objectFit="cover"
                                width="full"
                                height={64}
                            />
                            <Box p={5}>
                                <Heading as="h3" size="md" mb={2}>{content.title}</Heading>
                                <Text color={textColor} mb={4}>
                                    {content.description}
                                </Text>
                                <Button as="a" href={content.link} colorScheme="blue">
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
};
export default OverallComponent;
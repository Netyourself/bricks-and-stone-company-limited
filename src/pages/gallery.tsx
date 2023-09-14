import React from 'react';
import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';
import { galleryData } from '@/data/data';
import Layout from '@/componets/Layout';

const Gallery = () => {
  return (
    <Layout>
      <Box p={8}>
        <Heading as='h1' size='xl' mb={8}>
          Gallery
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {galleryData.map((image) => (
            <Box key={image.id} bg='white' rounded='lg' shadow='md'>
              <Image
                src={image.filename}
                alt={image.description}
                objectFit='cover'
                boxSize='80%'
                roundedTop='lg'
              />
              <Box p={4}>
                <Text fontWeight='bold' fontSize='lg' mb={2}>
                  {image.description}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Gallery;

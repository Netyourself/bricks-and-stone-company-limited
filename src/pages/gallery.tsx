import React from 'react';
import { Box, Heading, SimpleGrid, Image, Text } from '@chakra-ui/react';
import { galleryData } from '@/data/data';
import Layout from '@/componets/Layout';
import useFetchPageContent from '@/hooks/useFetchPageContent';

interface GalleryData {
  images: string[]; // Assuming images are URLs
  altText: string[];
  captions: string[];
}

const Gallery = () => {
  const galleryURL = 'pages/59';
  const apiResponse = useFetchPageContent(galleryURL) as GalleryData;

  const { images, altText, captions } = apiResponse || {};

  return (
    <Layout>
      <Box p={8}>
        <Heading as='h1' size='xl' mb={8}>
          Gallery
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {(images || galleryData).map((image: any, index: number) => (
            <Box key={image.id} bg='white' rounded='lg' shadow='md'>
              <Image
                src={image?.filename === undefined ? image : image.filename}
                alt={image.description}
                objectFit='cover'
                boxSize='80%'
                roundedTop='lg'
              />
              <Box p={4}>
                <Text fontWeight='bold' fontSize='lg' mb={2}>
                  {altText?.[index] || image.description}
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

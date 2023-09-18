import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Layout from '@/componets/Layout';
import { teamMembers } from '@/data/data';
import { companyName, aboutUs, brandingColorMain } from '@/Utils/constants';
import useFetchPageContent from '@/hooks/useFetchPageContent';

const AboutUsPage: React.FC = () => {
  const aboutURL = 'pages/9';
  const missionURL = 'pages/52';
  const aboutUsAPI = useFetchPageContent(aboutURL) as string;
  const missionAndVisionAPI = useFetchPageContent(missionURL) as string;
  return (
    <Layout>
      <Box
        py={8}
        px={4}
        maxW='6xl'
        mx='auto'
        color={`${brandingColorMain}.600`}
      >
        <Heading
          as='h2'
          size='2xl'
          mb={8}
          textAlign='center'
          color={`${brandingColorMain}.500`}
        >
          About Us
        </Heading>

        <Stack spacing={8} mb={12}>
          <Box>
            {/* <Heading as='h3' size='lg' mb={4}>
              Company Introduction
            </Heading> */}

            <Text
              textAlign='center'
              fontSize='xl'
              color={`${brandingColorMain}.800`}
            >
              {aboutUsAPI || aboutUs}
            </Text>
          </Box>
          {/* Core Values Section */}
          <Box mb={8}>
            <Heading as='h3' size='lg' mb={4}>
              Core Values
            </Heading>
            <Text fontSize='xl' color={`${brandingColorMain}.800`}>
              <ul>
                <li>Customer care</li>
                <li>Quality</li>
                <li>Integrity</li>
              </ul>
            </Text>
          </Box>
          <Box>
            <Heading as='h3' size='lg' mb={4}>
              Mission and Vision
            </Heading>
            <Box textAlign='center'>
              <Text fontSize='xl' color={`${brandingColorMain}.800`}>
                {missionAndVisionAPI ||
                  'Driving local solutions towards local problems through local conceptualization design'}
              </Text>
              <Text fontSize='xl' color={`${brandingColorMain}.800`}>
                Quality house and rooms design with local made bricks and stones
              </Text>
            </Box>
          </Box>
        </Stack>
        {/* Team Members section */}
        {/* <Heading as='h3' size='lg' mb={4}>
          Our Team
        </Heading>

        <Wrap spacing={6} fontSize='xl' color={`${brandingColorMain}.800`}>
          {teamMembers.map((member) => (
            <WrapItem key={member.id}>
              <Flex direction='column' alignItems='center'>
                <Image
                  src={member.image}
                  alt={member.name}
                  borderRadius='full'
                  boxSize='150px'
                  fallbackSrc='/fallback-image.jpg'
                />
                <Heading as='h4' size='md' mt={4}>
                  {member.name}
                </Heading>
                <Text color='gray.500'>{member.profession}</Text>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>
       */}
      </Box>
    </Layout>
  );
};

export default AboutUsPage;

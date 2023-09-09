import { useRouter } from 'next/router';
import {
  Box,
  Image,
  Heading,
  Text,
  Button,
  CardBody,
  CardFooter,
  Stack,
  Card,
} from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';

import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
import { services } from '@/data/data';
import Layout from '@/componets/Layout';
import {
  brandingColorMain,
  brandingColorSecond,
  companyName,
  contact,
} from '@/Utils/constants';

interface Service {
  id: string;
  title: string;
  location: string;
  status: boolean;
  description: string;
  imageUrl: string;
}

const ServiceDetailsPage: React.FC<Service> = () => {
  const router = useRouter();
  const { serviceId } = router.query;
  const service = services.find((service) => service.id === serviceId);
  if (!service) {
    // Render not found page component
    return <div>service not found</div>;
  }

  // Get the data
  const { id, shortTitle, title, description, imageUrl } = service;
  const activities = [
    'stone work',
    'block foundation',
    'expert pointing',
    'etc',
  ];
  return (
    <Layout>
      <Box py={8} px={4} max-w='800px' mx='auto'>
        <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
        >
          <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={`/${imageUrl}`}
            alt={`${companyName} services`}
          />

          <Stack>
            <CardBody>
              <Heading color={`${brandingColorMain}.500`} size='2xl' mb={4}>
                {title}
              </Heading>
              <Text py='2' color='gray.500'>
                {`${contact.address} | Ongoing | ${new Date().getFullYear()}`}
              </Text>
              <Text py='5' color={`${brandingColorMain}.900`}>
                {description}
              </Text>
            </CardBody>

            <CardFooter>
              <Link href='/contact'>
                <Button
                  variant='outline'
                  colorScheme={`${brandingColorSecond}`}
                >
                  Hire Us
                </Button>
              </Link>
            </CardFooter>
          </Stack>
        </Card>
        {/* <Heading color={`${brandingColorMain}.500`} size='md' mb={4} mt={10}>
          Functional Areas
        </Heading>

        {activities.map((activity, index) => (
          <Text
            key={activity + index}
            text-lg
            mb={2}
            color={`${brandingColorMain}.900`}
          >
            {activity}
          </Text>
        ))} */}
      </Box>
    </Layout>
  );
};

export default ServiceDetailsPage;

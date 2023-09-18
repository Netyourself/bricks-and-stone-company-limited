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
import useFetchPageContent from '@/hooks/useFetchPageContent';
import { transformedServiceContent } from '@/Utils/transformServicesFromWP';

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  location?: string;
  status?: boolean;
  description: string;
  imageUrl: string;
}

const ServiceDetailsPage: React.FC<Service> = () => {
  const router = useRouter();
  const { serviceId } = router.query;
  const servicesURL = 'services';
  const servicesAPI = useFetchPageContent(servicesURL);
  const servicesAPIData = transformedServiceContent(servicesAPI);
  const serviceAPIData = servicesAPIData?.find((service: any) => {
    return String(service.id) === serviceId;
  }) as Service;
  //console.log('Service API', serviceAPIData.imageUrl, serviceAPIData);

  const service = services.find(
    (service) => String(service.id) === serviceId
  ) as unknown as Service;

  if (!serviceAPIData && !service) {
    // Render not found page component
    return <div>service not found</div>;
  }

  // Get the data
  const { id, shortTitle, title, description, imageUrl } = service || {}; // Add {} incase service is undefined to avoid UI runtime errors
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
            src={`${serviceAPIData?.imageUrl || `/${imageUrl}`}`}
            alt={`${companyName} services`}
          />

          <Stack>
            <CardBody>
              <Heading color={`${brandingColorMain}.500`} size='2xl' mb={4}>
                {serviceAPIData?.title || title}
              </Heading>
              <Text py='2' color='gray.500'>
                {`${contact.address} | Ongoing | ${new Date().getFullYear()}`}
              </Text>
              <Text py='5' color={`${brandingColorMain}.900`}>
                {serviceAPIData?.description || description}
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

import React from 'react';
import {
  Box,
  Card,
  Heading,
  Text,
  Grid,
  Button,
  Image,
} from '@chakra-ui/react';
import Link from 'next/link';
import {
  brandingColorMain,
  brandingColorSecond,
  brandingColorThird,
} from '@/Utils/constants';

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Add imageUrl property for service images
}

interface ItemsCardProps {
  services: Service[];
  cardTitle: string;
  wrapWithLink?: boolean;
  linkUrl?: string;
}

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <Card
      p='6'
      bg='white'
      boxShadow='lg'
      rounded='lg'
      _hover={{ cursor: 'pointer', transform: 'scale(1.02)' }}
    >
      <Image
        src={service.imageUrl}
        alt={service.title}
        h='200px'
        objectFit='cover'
        mb='4'
        opacity='0.9'
        rounded='lg'
      />

      <Heading
        as='h3'
        size='md'
        color={`${brandingColorMain}.500`}
        fontWeight='bold'
        mb='4'
      >
        {service.title}
      </Heading>
      <Text color='gray.500'>{service.description}</Text>
      <Button variant='outline' colorScheme={`${brandingColorSecond}`} mt='4'>
        View details
      </Button>
    </Card>
  );
};

const ItemsCard: React.FC<ItemsCardProps> = ({
  services,
  cardTitle,
  wrapWithLink = false,
  linkUrl = '',
}) => {
  return (
    <section className='py-8 bg-red-100'>
      <div className='container mx-auto'>
        <Heading
          as='h2'
          size='xl'
          fontWeight='bold'
          textAlign='center'
          color={`${brandingColorSecond}.500`}
          mb='8'
        >
          {cardTitle}
        </Heading>
        <Grid
          templateColumns={{
            base: '1fr',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
          }}
          gap='6'
        >
          {services.map((service) =>
            wrapWithLink ? (
              <Link key={service.id} href={`/${linkUrl}/${service.id}`}>
                <ServiceCard service={service} />
              </Link>
            ) : (
              <ServiceCard key={service.id} service={service} />
            )
          )}
        </Grid>
      </div>
    </section>
  );
};

export default ItemsCard;

import { Box, Heading, Text, Grid, GridItem } from '@chakra-ui/react';

import React from 'react';
import { Card } from '@chakra-ui/react';
import { services } from '../data/data';
import ItemsCard from '@/componets/ItemsCard';
import Header from '@/componets/Header';
import Footer from '@/componets/Footer';
import Layout from '@/componets/Layout';

import 'tailwindcss/tailwind.css';
import useFetchPageContent from '@/hooks/useFetchPageContent';
import { htmlToTextUtil } from '@/Utils/htmlToText';
import { transformedServiceContent } from '@/Utils/transformServicesFromWP';

const ServicePage = () => {
  const servicesURL = 'services';
  const servicesAPI = useFetchPageContent(servicesURL);
  const transformedContent = transformedServiceContent(servicesAPI);

  return (
    <Layout>
      <ItemsCard
        cardTitle='Our Services'
        services={transformedContent || services}
        wrapWithLink={true}
        linkUrl='services'
      />
    </Layout>
  );
};

export default ServicePage;

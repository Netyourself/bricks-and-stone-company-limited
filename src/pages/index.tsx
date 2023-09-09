import React from 'react';
import { Box, Text, Button, Heading, Icon } from '@chakra-ui/react';

import Layout from '@/componets/Layout';
import ItemsCard from '@/componets/ItemsCard';
import {
  services,
  highlightsData,
  whyChooseUs,
  clientTestimonials,
} from '../data/data';

import 'tailwindcss/tailwind.css';
import {
  brandingColorMain,
  brandingColorSecond,
  brandingColorThird,
  companyName,
  pitchText,
  slogan,
} from '@/Utils/constants';
import {
  FaBuilding,
  FaHammer,
  FaHandsHelping,
  FaHouseDamage,
} from 'react-icons/fa';

const HomePage = () => {
  function iconNameToComponent(iconName: string) {
    switch (iconName) {
      case 'FaHammer':
        return FaHammer;
      case 'FaBuilding':
        return FaBuilding;
      case 'FaHandsHelping':
        return FaHandsHelping;
      default:
        return FaHouseDamage;
    }
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className='relative bg-green-500 py-16 md:py-24'
        style={{
          backgroundImage: "url('home.avif')",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center top-10%',
        }}
      >
        <Box className='absolute top-0 left-0 w-full h-full bg-opacity-70'></Box>
        <Box className='container mx-auto px-4 relative z-10'>
          <Box
            position='relative'
            bg={`${brandingColorMain}.500`}
            opacity={0.8}
            p={6}
            color={`${brandingColorThird}`}
            textAlign='center'
            borderRadius='lg'
            boxShadow='md'
          >
            <h1 className='text-4xl md:text-5xl font-bold mb-4'>
              {companyName}
            </h1>
            <h2 className='text-lg font-bold mb-5'>
              <q>{slogan}</q>
            </h2>
            <p className='text-base md:text-lg'>{pitchText}</p>
            <Button
              as='a'
              href='/contact'
              colorScheme={`${brandingColorSecond}`}
              bg={`${brandingColorSecond}.500`}
              color={`${brandingColorThird}`}
              size='lg'
              mt={6}
            >
              Get a Quotation
            </Button>
          </Box>
        </Box>
      </section>
      {/* Highlight Section */}
      <section className='bg-gray-50 py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <Heading
            as='h3'
            size='xl'
            fontWeight='bold'
            textAlign='center'
            color={`${brandingColorSecond}.500`}
            mb='8'
          >
            Our Work Highlights
          </Heading>
          <Box
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            alignItems='center'
          >
            {highlightsData.map((highlight, index) => (
              <Box
                key={index}
                bg='white'
                rounded='lg'
                boxShadow='lg'
                maxW='sm'
                p='4'
                flexBasis={{ base: '100%', md: 'calc(50% - 1rem)' }}
                mb='4'
                mx='4'
              >
                {/* Highlight Icon (You can replace this with an appropriate icon or image) */}
                <Box
                  bg={`${brandingColorMain}.500`}
                  color='white'
                  rounded='full'
                  boxSize='60px'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  mb='4'
                >
                  <Icon
                    as={iconNameToComponent(highlight.icon)}
                    fontSize='2xl'
                  />
                </Box>
                <Heading
                  as='h4'
                  size='md'
                  color={`${brandingColorMain}.500`}
                  fontWeight='bold'
                  mb='2'
                >
                  {highlight.title}
                </Heading>
                <Text color='gray.500'>{highlight.description}</Text>
              </Box>
            ))}
          </Box>
        </div>
      </section>

      {/* Service section */}
      <section className='bg-white-500 text-white py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <ItemsCard
            cardTitle='Our Services'
            services={services}
            wrapWithLink={true}
            linkUrl='services'
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className='bg-gray-100 py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <Heading
            as='h3'
            size='xl'
            fontWeight='bold'
            textAlign='center'
            color={`${brandingColorSecond}.500`}
            mb='8'
          >
            Why Choose Us
          </Heading>
          <Box display='flex' flexWrap='wrap' justifyContent='center' gap='6'>
            {whyChooseUs.map((item, index) => (
              <Box
                key={index}
                bg='white'
                rounded='lg'
                boxShadow='lg'
                maxW='sm'
                p='4'
                flexBasis={{ base: '100%', md: 'calc(50% - 1rem)' }}
                mb='4'
              >
                <Heading
                  as='h4'
                  size='md'
                  color={`${brandingColorMain}.500`}
                  fontWeight='bold'
                  mb='2'
                >
                  {item.title}
                </Heading>
                <Text color='gray.500'>{item.description}</Text>
              </Box>
            ))}
          </Box>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className='bg-white-500 text-white py-16 md:py-24'>
        <div className='container mx-auto px-4'>
          <Heading
            as='h3'
            size='xl'
            fontWeight='bold'
            textAlign='center'
            color={`${brandingColorSecond}.500`}
            mb='8'
          >
            Client Testimonials
          </Heading>
          <Box display='flex' flexWrap='wrap' justifyContent='center' gap='6'>
            {clientTestimonials.map((testimonial) => (
              <Box
                key={testimonial.id}
                bg='white'
                rounded='lg'
                boxShadow='lg'
                maxW='sm'
                p='4'
              >
                <Text color='gray.500' fontStyle='italic' mb='4'>
                  {testimonial.quote}
                </Text>
                <Text fontWeight='bold'>{testimonial.name}</Text>
                <Text color='gray.500'>{testimonial.profession}</Text>
              </Box>
            ))}
          </Box>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;

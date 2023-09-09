import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
  Box,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

import Layout from '@/componets/Layout';
import { brandingColorMain, companyName, contact } from '@/Utils/constants';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactUsPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // TODO - implement email forwarding or service for contact
    //console.log(data);
    setIsSubmitted(true);
  };

  return (
    <Layout>
      <Box py={8} px={4} maxW='6xl' mx='auto'>
        <Heading as='h2' size='xl' mb={4} color='green.500'>
          Contact Us
        </Heading>

        <Box display='flex' mb={8}>
          <Box flex='1' pr={8} color='green.500'>
            <Heading as='h3' size='lg' mb={4} color='green.500'>
              Reach us on
            </Heading>
            <Box>
              <Box display='flex' alignItems='center' mb={2}>
                <FaMapMarkerAlt />
                <Text ml={2} color='green.900'>{`${contact.address}`}</Text>
              </Box>
              <Box display='flex' alignItems='center' mb={2}>
                <FaPhone />
                <Text
                  ml={2}
                  color={`${brandingColorMain}.900`}
                >{`${contact.phone}`}</Text>
              </Box>
              <Box display='flex' alignItems='center' mb={2}>
                <FaEnvelope />
                <Text ml={2} color={`${brandingColorMain}.900`}>
                  Email:{' '}
                  <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
                </Text>
              </Box>
            </Box>
          </Box>
          <Box flex='1' pl={8}>
            <Heading as='h3' size='lg' mb={4} color='green.500'>
              Location
            </Heading>
            <Box
              border='1px'
              borderColor='gray.300'
              rounded='md'
              overflow='hidden'
              h='72'
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3043.274932393715!2d-80.02618882408362!3d40.29185406323031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f94ee5013011%3A0xcf97ce031683a8ae!2s6226%20Pleasant%20St%2C%20South%20Park%20Township%2C%20PA%2015129%2C%20USA!5e0!3m2!1sen!2s!4v1694244607872!5m2!1sen!2s'
                width='600'
                height='450'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              ></iframe>
            </Box>
          </Box>
        </Box>

        {/* <Heading as='h3' size='lg' mb={4} color='green.500'>
          Send us a message
        </Heading>
        {isSubmitted ? (
          <p className='bg-green-200 text-green-800 py-2 px-4 mt-4 rounded'>
            Thank you for contacting us, message received, one of our team
            members will respond to you via the provided email.
          </p>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl mb={4}>
              <FormLabel color='green.800'>Name</FormLabel>
              <Input {...register('name', { required: true })} type='text' />
              {errors.name && (
                <Text color='red.500'>Please enter your name</Text>
              )}
            </FormControl>

            <FormControl mb={4}>
              <FormLabel color='green.800'>Email</FormLabel>
              <Input
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                type='email'
              />
              {errors.email && (
                <Text color='green.800'>
                  Please enter a valid email address
                </Text>
              )}
            </FormControl>

            <FormControl mb={4}>
              <FormLabel color='green.800'>Message</FormLabel>
              <Textarea {...register('message', { required: true })} rows={4} />
              {errors.message && (
                <Text color='red.500'>Please enter a message</Text>
              )}
            </FormControl>

            <Button type='submit' colorScheme='green' mt={4}>
              Submit
            </Button>
          </form>
        )} */}
      </Box>
    </Layout>
  );
};

export default ContactUsPage;

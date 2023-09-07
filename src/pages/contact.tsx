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
import { brandingColorMain, companyName } from '@/Utils/constants';

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
                <Text
                  ml={2}
                  color='green.900'
                >{`Buluk, Plot No. 2xxx, Munuki Payam`}</Text>
              </Box>
              <Box display='flex' alignItems='center' mb={2}>
                <FaPhone />
                <Text
                  ml={2}
                  color={`${brandingColorMain}.900`}
                >{`Tel: 092000000, 091000000`}</Text>
              </Box>
              <Box display='flex' alignItems='center' mb={2}>
                <FaEnvelope />
                <Text ml={2} color={`${brandingColorMain}.900`}>
                  Email:{' '}
                  <Link href='mailto:test@gmail.com'>test@gmail.com</Link>
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
                title='Map'
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1365.537557564575!2d31.571126195601593!3d4.855805771737045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1688048495135!5m2!1sen!2sus'
                width='100%'
                height='100%'
                frameBorder='0'
                style={{ border: 0 }}
                allowFullScreen
                loading='lazy'
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

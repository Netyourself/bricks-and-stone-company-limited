//import Link from 'next/link';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { brandingColorMain, contact } from '@/Utils/constants';

const Footer = () => {
  return (
    <Box bg={`${brandingColorMain}.600`} as='footer' py={6} mt='100px'>
      <Box maxW='container.xl' mx='auto' px={4}>
        <Flex justify='space-between' alignItems='center'>
          <Box>
            <Text color='white' fontSize='lg' fontWeight='bold'>
              &copy; {new Date().getFullYear()} Cain Contracting
            </Text>
            <Text color='white' fontSize='sm'>
              All rights reserved
            </Text>
          </Box>
          <Flex alignItems='center'>
            <Text fontSize='lg' color='white' fontWeight='bold' mr={4}>
              Follow us on:
            </Text>
            <Link href='/' target='_blank' rel='noopener noreferrer'>
              <FaFacebook color='white' size={24} />
            </Link>
            <Link href='' target='_blank' rel='noopener noreferrer' ml={3}>
              <FaTwitter color='white' size={24} />
            </Link>
            <Link href='/' target='_blank' rel='noopener noreferrer' ml={3}>
              <FaInstagram color='white' size={24} />
            </Link>
          </Flex>
        </Flex>
        <Box mt={4}>
          <Text color='white' fontSize='sm'>
            Address: {contact.address}
          </Text>
          <Text color='white' fontSize='sm'>
            Tel: {contact.phone}
          </Text>
          <Text color='white' fontSize='sm'>
            Email: {contact.email}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

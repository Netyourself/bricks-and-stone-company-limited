import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import {
  brandingColorMain,
  brandingColorSecond,
  brandingColorThird,
  companyName,
} from '@/Utils/constants';
import { services } from '@/data/data';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <Text
        px={4}
        py={2}
        color={`${brandingColorThird}.500`}
        fontWeight='medium'
        _hover={{
          cursor: 'pointer',
          transform: 'scale(1.02)',
          //bg: `${brandingColorMain}.700`,
          color: `${brandingColorSecond}.500`,
        }}
      >
        {children}
      </Text>
    </Link>
  );
};

const NavItems = () => {
  const [servicesOpen, setServicesOpen] = useState(false);

  // Add more services as needed
  return (
    <>
      <NavItem href='/'>Home</NavItem>

      <NavItem href='/about'>About</NavItem>
      <Box
        position='relative'
        onMouseEnter={() => setServicesOpen(true)}
        onMouseLeave={() => setServicesOpen(false)}
        _hover={{ color: `${brandingColorThird}.600` }}
      >
        <NavItem href='/services'>Services</NavItem>

        {servicesOpen && (
          <Box
            position='absolute'
            top='100%'
            left='0'
            width='150%'
            zIndex='999'
            border='1px solid #ccc'
            bg={`${brandingColorMain}.500`}
            borderRadius='0 0 8px 8px'
            boxShadow='0 4px 6px rgba(0, 0, 0, 0.1)'
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            {services.map((service) => (
              <Link key={service.id} href={`/services/${service.id}`}>
                <Text
                  px={4}
                  py={2}
                  color={`${brandingColorThird}.500`}
                  fontWeight='medium'
                  _hover={{
                    cursor: 'pointer',
                    transform: 'scale(1.02)',
                    bg: `${brandingColorMain}.700`,
                    color: `${brandingColorSecond}.500`,
                  }}
                >
                  {service.shortTitle}
                </Text>
              </Link>
            ))}
          </Box>
        )}
      </Box>
      <NavItem href='/gallery'>Gallery</NavItem>
      <NavItem href='/contact'>Contact Us</NavItem>
    </>
  );
};

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      as='header'
      bg={`${brandingColorMain}.500`}
      p={2}
      color={`${brandingColorThird}`}
      fontSize='2xl'
    >
      <Box className='container mx-auto'>
        <Flex justify='space-between' align='center'>
          <Flex align='center'>
            <Link href='/'>
              {/* Add your logo component here */}
              {/* <Box boxSize='50%' objectFit='cover'>
                <Image src='/logo.jpeg' alt='Logo' />
              </Box> */}
              <Text fontWeight='bold' fontSize='2xl' ml={2}>
                {companyName}
              </Text>
            </Link>
          </Flex>

          {/* Responsive Navbar */}
          <Flex display={{ base: 'none', md: 'flex' }} align='center'>
            <NavItems />
          </Flex>

          {/* Hamburger Menu */}
          <IconButton
            icon={<FaBars />}
            variant='white'
            fontSize='40px'
            aria-label='Toggle navigation'
            display={{ base: 'block', md: 'none' }}
            onClick={onToggle}
          />
        </Flex>

        {/* Mobile Nav Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Flex direction='column' mt={2}>
            <NavItems />
          </Flex>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Navbar;

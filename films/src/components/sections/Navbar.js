import { Box, Image, Flex, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import React from 'react'

function Navbar() {
  return (
    <Flex 
    className="navbar" 
    justifyContent='space-between' 
    alignItems='center' 
    width='100%'
    height='20'
    pb='4'
    pt='6'
    px='20'
    position={'sticky'}
    top={'0'}
    bg={'#F7D9AE'}
    boxShadow='0px 3px 4px 0px rgba(0,0,0,0.1)'
    zIndex={'999'}
    >
      <Box width={'33%'} className="navbar--left">
        <Link to='/films'>
          <h3 className={'navlink'}> FILMS </h3>
        </Link>
      </Box>
      <Flex>
        <Link to='/' className="navbar--center">
          <Image boxSize="100px" src="/images/jb-logo.png" mt={'4'} />
        </Link>
      </Flex>
      <Flex 
      width={'33%'} 
      alignItems={'center'} 
      justifyContent={'end'} gap={'40'} 
      className="navbar--right">
        <Link to='/films/add'>
          <Button size={'lg'} colorScheme='orange'>Add review</Button>
        </Link>
        <h3 className={'navlink'}> ABOUT </h3>
      </Flex>
    </Flex> 
  )
}

export default Navbar;

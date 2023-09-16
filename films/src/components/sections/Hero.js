import React from 'react'
import { Box, Heading, Image } from "@chakra-ui/react";

function Hero() {
  return (
    <Box className="hero-banner">
      <Box className="hero-title">
        <Heading as="h1" textSt>
          <Box as="span" className="films-text">
            FILMS 
          </Box>
          with
        </Heading>
        <Heading as="h1">JOSH BUNGARD</Heading>
      </Box>
      <Image src={require("../../images/grass-dark.png")} className="grass-dark" alt="grass-light"/>
      <Image src={require("../../images/chorleywood.png")} className="chorleywood" alt="chorleywood"/>
      <Image src={require("../../images/grass-light.png")} className="grass-light" alt="grass-light"/>
      <Box className="grass-light"/>
      <Box className="suns">
        <Box className="sun-centre" />
        <Box className="sun-middle" />
        <Box className="sun-outer" />
      </Box>
      <Image src={require("../../images/palms.png")} className="palms" alt="palms"/>
      <Image src={require("../../images/josh.png")} className="josh-hero" alt="josh"/>
      <Image src={require("../../images/cinema.png")} className="cinema" alt="cinema"/>
    </Box>
  )
}

export default Hero
import React from "react"
import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react'

function FilmDetails({ filmData }) {
  return (
    <Box>
      <Flex className="show--top">
        <Image
          w="384px"
          objectFit="contain"
          align="center"
          src={filmData.imageUrl}
          alt="poster"
        />
        <Box ml="6%">
          <Flex>
            <Heading
              as="h2"
              lineHeight="none"
              alignSelf="end"
              textAlign="left"
            >{filmData.title} {' '}
            <Text
              fontSize="3xl"
              fontFamily="Raleway"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="normal"
              textAlign="left"
              display="inline"
            >- {filmData.releaseYear}</Text>
            </Heading>
          </Flex>
          <Flex
            mt="50px"
            justifyContent="space-between"
            alignItems="center"
            w="40%"
          >
            <Flex
              bgImage="/images/yellow-circles.png"
              bgRepeat="no-repeat"
              bgSize="contain"
              h="100px"
              w="100px"
              alignItems="center"
              justifyContent="center"
            >
            <Text
              fontSize="3xl"
              fontFamily="'Shrikhand', sans-serif"
              color="brand"
            >
              {filmData.joshScore}
            </Text>
            </Flex>
            <Box ml="20px">
              <Flex mb="15px">
                <Image
                  src="/images/imdb-icon.png"
                  width="50px"
                  mr="15px"
                />
                <Text  fontSize="1.5rem" fontWeight="700">{filmData.imdbScore}</Text>
              </Flex>
              <Flex>
                  <Image
                    src="/images/tomato-icon.png"
                    boxSize="35px"
                    mr="15px"
                  />
                  <Text fontSize="1.5rem" fontWeight="700">{filmData.rottenTomScore} %</Text>
              </Flex>
            </Box>
          </Flex>
          <Box mt="50px">
            <Heading
              fontSize="2xl"
              textAlign="left"
              fontWeight="300"
              mb="30px"
            >
              What Josh says:
            </Heading>
            <Text
              borderRadius="3rem"
              border="7px solid #A14C2A"
              padding="40px"
              color="black"
              fontWeight="400"
              fontSize="22px"
              w="90%"
            >
              {filmData.joshNotes}
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}


export default FilmDetails;

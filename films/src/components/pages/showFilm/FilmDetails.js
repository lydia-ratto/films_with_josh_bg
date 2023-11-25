import React from "react"
import { Flex, Box, Image, Heading, Text, Button } from '@chakra-ui/react'
import { Link, useParams } from "react-router-dom";
import DeleteFilm from "../../sections/DeleteFilm";
import useAuth from "../../hooks/useAuth";

function FilmDetails({ filmData }) {
  const { id } = useParams();
  const { user } = useAuth();

  console.log(filmData);
  return (
    <Box>
      { user?.email==="josh@bung.com" &&
      <Flex>
        <Link to={`/films/edit/${id}`}>
          <Button 
          variant="primary"
          margin="1">
            Edit Review
          </Button> 
        </Link>
        <DeleteFilm />
      </Flex>
}
      <Flex className="show--top">
        <Image
          w="384px"
          objectFit="cover"
          align="center"
          border="8px solid #DC9A38"
          borderRadius="12px"
          src={filmData.imageUrl}
          alt="poster"
        />
        <Box ml="6%">
          <Heading
            as="h2"
            lineHeight="none"
            alignSelf="end"
            textAlign="left"
          >{filmData.title}
          <Text
            fontSize="3xl"
            fontFamily="Raleway"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
            textAlign="left"
            display="inline"
          >-{filmData.releaseYear}</Text>
          </Heading>
          <Text
            fontSize="l"
            fontFamily="Raleway"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="normal"
            textAlign="left"
            display="inline"
          >{filmData.summary}
          </Text>
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
              <Link to={`https://www.imdb.com/title/${filmData.imdbId}/`} target="_blank">
                <Flex mb="15px">
                  <Image
                    src="/images/imdb-icon.png"
                    width="50px"
                    mr="15px"
                  />
                  <Text  fontSize="1.5rem" fontWeight="700">{filmData.imdbScore === 0 ? "-" : `${filmData.imdbScore}/10`}</Text>
                </Flex>
              </Link>
              <Link to={`https://www.rottentomatoes.com/m/${filmData.title.replace(/\s+/g, '_')}`} target="_blank">
                <Flex>
                    <Image
                      src="/images/tomato-icon.png"
                      boxSize="35px"
                      mr="15px"
                    />
                    <Text fontSize="1.5rem" fontWeight="700">{filmData.rottenTomScore === 0 ? "-" : filmData.rottenTomScore} %</Text>
                </Flex>
              </Link>
            </Box>
          </Flex>
          <Box mt="50px">
            <Heading
              textStyle="h3"
              textAlign="left"
              fontSize="xx-large"
              mb="30px"
            >
              What Josh says:
            </Heading>
            <Text
              borderColor='brand.brown'
              backgroundColor='brand.beige'
              borderWidth='7px'
              borderStyle='solid'
              borderRadius='30px'
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

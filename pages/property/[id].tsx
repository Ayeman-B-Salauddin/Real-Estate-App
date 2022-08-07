// @ts-nocheck

import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, getData } from "..";
import Scrollbar from "../../components/Scrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rooms,
    title,
    baths,
    area,
    isVerified,
    description,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <Scrollbar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center">
        <Box paddingRight="3" color="green.400">
          {isVerified && <GoVerified />}
        </Box>
        <Text fontWeight="bold" fontSize="lg">
          AED {millify(price)}
        </Text>
        <Spacer />
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400"
      >
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
    </Box>
    <Box marginTop="2">
      <Text fontSize="lg" marginBottom="3" fontWeight="bold">
        {title}
      </Text>
      <Text lineHeight="2" color="gray.600">
        {description}
      </Text>
    </Box>
    <Box>
      {amenities?.length ? (
        <Text fontSize="2xl" fontWeight="bold" marginTop="5">
          Facilities:
        </Text>
      ) : null}
      <Flex flexWrap="wrap">
        {amenities?.map((item) =>
          item?.amenities?.map((amenity) => (
            <Text
              key={amenity.text}
              fontWeight="bold"
              color="gray.100"
              fontSize="l"
              p="2"
              bg="gray.600"
              m="1"
              borderRadius="5"
            >
              {amenity.text}
            </Text>
          ))
        )}
      </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await getData(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}

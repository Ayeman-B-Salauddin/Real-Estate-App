import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import DefaultImage from "../assets/home.jpg";
import { PropertiesForSale } from "../types";

type propertyProp = {
  property: {
    coverPhoto: PropertiesForSale;
    price: PropertiesForSale;
    rooms: PropertiesForSale;
    title: PropertiesForSale;
    baths: PropertiesForSale;
    area: PropertiesForSale;
    isVerified: PropertiesForSale;
    externalID: PropertiesForSale;
  };
};

const Property = ({
  property: {
    coverPhoto,
    price,
    rooms,
    title,
    baths,
    area,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <Flex
      flexWrap="wrap"
      w="420px"
      p="5"
      paddingTop="0px"
      justifyContent="flex-start"
      cursor="pointer"
    >
      <Box borderWidth="1px" borderRadius="2xl" overflow="hidden">
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : DefaultImage}
            width={400}
            height={260}
          />
        </Box>
        <Box w="full" margin="10px">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
          >
            <Flex alignItems="center">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
              </Text>
            </Flex>
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
          <Text fontSize="lg">
            {title.length > 40 ? title.substring(0, 40) + "..." : title}
          </Text>
        </Box>
      </Box>
    </Flex>
  </Link>
);

export default Property;

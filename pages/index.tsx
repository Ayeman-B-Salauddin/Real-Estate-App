// @ts-nocheck

import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import { Box, Flex } from "@chakra-ui/react";
import Property from "../components/Property";
import { Banner } from "../components/Banner";
import home from "../assets/home.jpg";
import { PropertiesForSale } from "../types/types";
export const baseUrl = "https://bayut.p.rapidapi.com";

export const getData = async (url: any) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_APP_RAPID_API_KEY ?? "",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};

const Home: NextPage<{ propertiesForSale: PropertiesForSale }> = ({
  propertiesForSale,
}) => {
  return (
    <div>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Find real estate information" />
        <link
          rel="icon"
          href="https://img.icons8.com/office/16/000000/home--v1.png"
        />
      </Head>
      <Box>
        <Banner
          purpose="BUY A HOME"
          title1="Homes for "
          title2="Everyone"
          desc1=" Explore from stunning Apartments, builder floors, villas"
          desc2="and much more"
          imageUrl={home}
        />
        <Flex flexWrap="wrap" justifyContent="center">
          {propertiesForSale?.map((property: any) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </Box>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const propertyForSale = await getData(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=24`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
    },
  };
};

export default Home;

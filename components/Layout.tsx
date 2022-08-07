import Head from "next/head";
import { Box } from "@chakra-ui/react";

import { Footer } from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  children: JSX.Element;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Navbar />
      <Box maxWidth="1280px" m="auto">
        <main>{children}</main>
      </Box>
      <Footer />
    </>
  );
};

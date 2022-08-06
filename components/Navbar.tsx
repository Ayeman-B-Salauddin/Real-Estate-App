import Link from "next/link";
import { Flex, Box, Spacer } from "@chakra-ui/react";

const Navbar = () => (
  <>
    <Flex borderBottom="1px" borderColor="gray.100">
      <Box
        bg="gray.800"
        fontSize="3xl"
        color="gray.100"
        fontWeight="normal"
        w="100%"
        p={4}
      >
        <Flex justifyContent="center">
          <Link href="/">Real Estate</Link>
        </Flex>
      </Box>

      <Spacer />
    </Flex>
  </>
);

export default Navbar;

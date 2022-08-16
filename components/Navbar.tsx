import Link from "next/link";
import {
  Flex,
  Box,
  Spacer,
  Button,
  Text,
  Square,
  HStack,
} from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";

export const AuthButton = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      // {title.length > 40 ? title.substring(0, 40) + "..." : title}
      <>
        <HStack spacing="24px">
          <Box w="150px">
            <Text fontSize="md" color="gray.200">
              Signed in as {session.user?.name?.substring(0, 7)}
            </Text>
          </Box>

          <Box>
            <Button colorScheme="purple" onClick={() => signOut()}>
              Sign out
            </Button>
          </Box>
        </HStack>
      </>
    );
  }
  return (
    <Box>
      <Button colorScheme="purple" onClick={() => signIn()}>
        Sign in
      </Button>
    </Box>
  );
};

const Navbar = () => (
  <>
    <Flex borderBottom="1px" borderColor="gray.100">
      <Box
        bg="gray.800"
        fontSize="3xl"
        color="purple.100"
        fontWeight="normal"
        w="100%"
        p={4}
      >
        <Flex>
          <Flex bg="gray.800" justifyContent="center" width="100%">
            <Link href="/">Real Estate</Link>
          </Flex>
          <Spacer />
          <Box justifyContent="end" alignItems="end">
            <AuthButton />
          </Box>
        </Flex>
      </Box>
      <Spacer />
    </Flex>
  </>
);

export default Navbar;

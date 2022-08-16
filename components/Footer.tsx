import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () => (
  <Box bg="gray.200" marginTop="35px">
    <Stack
      spacing="8"
      direction={{ base: "column", md: "row" }}
      justify="space-between"
      py={{ base: "12", md: "16" }}
    >
      <Stack
        spacing={{ base: "6", md: "8" }}
        marginStart="50px"
        marginTop="40px"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="80"
          height="80"
          viewBox="0 0 40 40"
        >
          <path
            fill="#dbf2ff"
            d="M3.5 38.5L3.5 13.286 19.998 3.58 36.5 13.286 36.5 38.5z"
          ></path>
          <path
            fill="#7496c4"
            d="M19.998,4.16L36,13.572V38H4V13.572L19.998,4.16 M19.998,3L3,13v26h34V13L19.998,3L19.998,3z"
          ></path>
          <path fill="#b5ddf5" d="M4 34H36V38H4z"></path>
          <path
            fill="#f78f8f"
            d="M19.998 4.645L1.5 15.955 1.5 12.896 19.998 1.586 38.5 12.896 38.5 15.955z"
          ></path>
          <path
            fill="#c74343"
            d="M19.998,2.172L38,13.176v1.887L20.519,4.378l-0.522-0.319l-0.522,0.319L2,15.063v-1.887 L19.998,2.172 M19.998,1L1,12.615v4.231L19.998,5.231L39,16.846v-4.231L19.998,1L19.998,1z"
          ></path>
          <g>
            <path fill="#ffc49c" d="M14.5 21.5H25.5V38.5H14.5z"></path>
            <path
              fill="#a16a4a"
              d="M25,22v16H15V22H25 M26,21H14v18h12V21L26,21z"
            ></path>
          </g>
          <path
            fill="#a16a4a"
            d="M23 30A1 1 0 1 0 23 32A1 1 0 1 0 23 30Z"
          ></path>
        </svg>
      </Stack>
      <Stack
        direction={{ base: "column-reverse", md: "column", lg: "row" }}
        spacing={{ base: "12", md: "8" }}
      >
        <Stack direction="row" spacing="8">
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Product
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">How it works</Button>
              <Button variant="link">Pricing</Button>
              <Button variant="link">Use Cases</Button>
            </Stack>
          </Stack>
          <Stack spacing="4" minW="36" flex="1">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Legal
            </Text>
            <Stack spacing="3" shouldWrapChildren>
              <Button variant="link">Privacy</Button>
              <Button variant="link">Terms</Button>
              <Button variant="link">License</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack spacing="4">
          <Text fontSize="sm" fontWeight="semibold" color="subtle">
            Stay up to date
          </Text>
          <Stack
            spacing="4"
            direction={{ base: "column", sm: "row" }}
            maxW={{ lg: "360px" }}
          >
            <Box bg="gray.100">
              <Input placeholder="Enter your email" type="email" required />
            </Box>
            <Button
              variant="primary"
              bg="gray.700"
              color="gray.200"
              type="submit"
              flexShrink={0}
            >
              Subscribe
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
    <Divider />
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{ base: "column-reverse", md: "row" }}
      align="center"
      marginStart="20px"
    >
      <Text fontSize="sm" color="subtle">
        &copy; 2022 Real Estate Org, Inc. All rights reserved.
      </Text>
      <ButtonGroup variant="ghost">
        <IconButton
          as="a"
          href="#"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="GitHub"
          icon={<FaGithub fontSize="1.25rem" />}
        />
        <IconButton
          as="a"
          href="#"
          aria-label="Twitter"
          icon={<FaTwitter fontSize="1.25rem" />}
        />
      </ButtonGroup>
    </Stack>
  </Box>
);

import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { ConnectButton } from "@particle-network/connect-react-ui";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0.01 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.2 }}
    >
      <Flex
        h="93vh"
        w="full"
        align="center"
        justify="center"
        direction="column"
        gap={5}
        bg="#e2b4d87c"
      >
        <Text color="#810A67" fontSize="4em" fontWeight={700}>
          Revolutionize the Way You Work
        </Text>
        <Text
          textAlign="center"
          color="#810A67"
          fontWeight={500}
          fontSize="1.5em"
        >
          Find Top Talent and Seamless Services on the Next Generation Web
          Platform <br />
          Join Today and Unlock Your Potential
        </Text>
        <Stack direction="row" spacing={16}>
          <Link href="/signup">
            <Button
              bg="#810A67"
              color="#fff"
              px="2em"
              _hover={{ bg: "#5b0b4a" }}
            >
              Connect Wallet
            </Button>
          </Link>
          <Button bg="#E2B4D8" px="2em" _hover={{ bg: "#e2b4d87c" }}>
            Join our community
          </Button>
        </Stack>

        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 1,
            type: "spring",
            stiffness: 30,
          }}
        >
          <Image src="/images/interview.svg" alt="illustration" mt="3em" />
        </motion.div>

        <motion.div
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{
            delay: 0.6,
            duration: 1,
            type: "spring",
            stiffness: 30,
          }}
        ></motion.div>
      </Flex>
    </motion.div>
  );
};

export default Header;

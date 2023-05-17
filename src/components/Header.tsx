import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { CustomButton } from "./CustomButton";

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
            <Button bg="#E2B4D8" px="2em" _hover={{ bg: "#e2b4d87c" }}>
              Get Started
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

        {/* <Flex w="full" direction="column" justify="center" py="6em">
          <Text fontWeight={700} fontSize="2.6em">
            Connect with language partners and reach fluency faster
          </Text>
          <Text fontWeight={400} fontSize='.95em' lineHeight={"30px"} mt="1em">
            With Fluently, you can easily connect with language partners who
            share your language learning goals and interests. Our video call
            feature makes it easy to have interactive and engaging conversations
            with your language partner, so you can practice speaking in a
            real-world setting.
          </Text>
          <Flex gap={3} mt="2em">
            <Input placeholder=" what language do you want to learn?" />
            <a href="./signup" className="block px-8 py-4 hover:border">
              <Button
                px="1.5em"
                bg="#FDD835"
                fontWeight={700}
                rightIcon={<FiArrowUpRight />}
                _hover={{ bg: "#fbdb4f" }}
              >
                Start now
              </Button>
            </a>
          </Flex>
        </Flex> */}
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
          {/* <Flex
            w="full"
            bgImage="/images/ellipse.svg"
            bgRepeat="no-repeat"
            bgSize="cover"
          >
            <Image src="/images/group.svg" w="100%" alt="group" />
          </Flex> */}
        </motion.div>
      </Flex>
    </motion.div>
  );
};

export default Header;

import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
// import Link from "next/link";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { useAccount } from "@particle-network/connect-react-ui";
import { CustomButton } from "./CustomButton";

const Navbar = () => {
  const account = useAccount();
  return (
    <motion.div
    // initial={{ y: -250 }}
    // animate={{ y: -10 }}
    // transition={{ delay: 0.2, duration: 1, type: 'spring', stiffness: 50 }}
    >
      <Flex
        w="full"
        align="center"
        justify="space-evenly"
        fontWeight={600}
        color="#810A67"
        borderBottom="0.5px solid #3A3A3A"
        p="1em"
        px="5em"
      >
        <Box w="80%" m={0}>
          <Link href="/">
            <Text fontSize="1.5em" textTransform="uppercase">
              Errand
            </Text>
          </Link>
        </Box>
        <Flex align="center" gap={20} w="full">
          <Text cursor="pointer">Errands</Text>
          <Text cursor="pointer">Services</Text>
          <Text cursor="pointer">Blogs</Text>
        </Flex>
        <CustomButton />
      </Flex>
    </motion.div>
  );
};

export default Navbar;

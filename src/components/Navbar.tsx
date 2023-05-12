import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
// import Link from "next/link";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

const Navbar = () => {
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
        color='#810A67' 
        borderBottom='0.5px solid #3A3A3A'
        p='1em'
        px='5em'
      >
        <Box w='full' m={0}>
          <Text fontSize='1.5em' textTransform='uppercase'>Errand</Text>
        </Box>
        <Flex align="center" gap={20} w="full">
          <Text>Errands</Text>
          <Text>Services</Text>
          <Text>Blogs</Text>
        </Flex>

        <Link href="/signup">
          <Button
            px="1.5em"
            bg="#810A67"
            fontWeight={700}
            _hover={{ bg: "#5b0b4a" }}
            color='#fff'
          >
            Connect Wallet
          </Button>
        </Link>
      </Flex>
    </motion.div>
  );
};

export default Navbar;
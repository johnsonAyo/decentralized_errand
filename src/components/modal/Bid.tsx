import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { MdLocationOn } from "react-icons/md";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
const Bid: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton
          _hover={{
            bg: "transparent",
            color: "#810A67",
            border: "1px solid #810A67",
          }}
        />
        <ModalBody>
          <Flex direction="column" align="center">
            <Image mt="2em" src="/images/apartment.svg" alt="service" />
            <Text as="b" mt="1em">
              Apartment Cleaning
            </Text>
            <Flex mt=".5em" align="center" gap={1} color="#3A3A3A">
              <Icon as={MdLocationOn} />
              <Text fontSize=".8em" fontWeight={500}>
                Ogba, Lagos
              </Text>
            </Flex>
          </Flex>
          <Box mt="1.5em" fontSize=".9em">
            <Text fontWeight={500}>
              PRICE:{" "}
              <Text as="b" color="#11A746">
                0.02ETH
              </Text>
            </Text>
            <Text fontWeight={500} my="1em">
              DURATION:{" "}
              <Text as="b" color="#F2471C">
                1 Day
              </Text>
            </Text>
            <Flex align="center" gap={2}>
              <Text w="100px">YOUR BID: </Text>
              <Input bg="#F5F5F5" />
            </Flex>
            <Center my="2em">
              <Button
                px="2em"
                bg="#810A67"
                fontWeight={700}
                fontSize=".9em"
                _hover={{ bg: "#5b0b4a" }}
                color="#fff"
              >
                Send Bid
              </Button>
            </Center>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default Bid;

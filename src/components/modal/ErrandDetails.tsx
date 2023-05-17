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
    useDisclosure
  } from "@chakra-ui/react";
  import { MdLocationOn } from "react-icons/md";
import Bid from "./Bid";
  
  interface Props {
    isOpen: boolean;
    onClose: () => void;
  }
  const ErrandDetails: React.FC<Props> = ({ isOpen, onClose }) => {

    const {
        isOpen: isBidOpen,
        onOpen: onBidOpen,
        onClose: onBidClose,
    } = useDisclosure();

    return (
        <>
            <Bid isOpen={isBidOpen} onClose={onBidClose} />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w='1000px'>
                <ModalCloseButton
                    _hover={{
                    bg: "transparent",
                    color: "#810A67",
                    border: "1px solid #810A67",
                    }}
                />
                <ModalBody>
                    <Flex justify='space-between' align='center' my='1em'>
                        <Flex align='center'>
                            <Image mt="2em" src="/images/apartment.svg" alt="service" />
                            <Box>
                                <Text as="b" mt="1em">
                                    Apartment Cleaning
                                </Text>
                                <Flex mt=".5em" align="center" gap={1} color="#3A3A3A">
                                    <Icon as={MdLocationOn} />
                                    <Text fontSize=".8em" fontWeight={500}>
                                    Lagos
                                    </Text>
                                </Flex>
                            </Box>
                        </Flex>
                        <Button
                            px="2em"
                            bg="#810A67"
                            fontWeight={700}
                            fontSize=".9em"
                            _hover={{ bg: "#5b0b4a" }}
                            color="#fff"
                            onClick={onBidOpen}
                        >
                            Send Request
                        </Button>
                    </Flex>
                    <Text>
                        I need someone to come clean my apartment this weekend
                    </Text>
                    <Box my="1.5em" fontSize=".8em" borderRadius={6} border='.5px solid #000' p='1em'>
                    <Flex align="center" gap={2} my='.5em'>
                        <Text as='b' textTransform='uppercase'>Errand type: </Text>
                        <Text>Freelance</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                        <Text as='b' textTransform='uppercase'>Job location: </Text>
                        <Text>Lagos</Text>
                    </Flex>
                    <Flex align="center" gap={2} my='.5em'>
                        <Text as='b' textTransform='uppercase'>On-site required: </Text>
                        <Text>Yes</Text>
                    </Flex>
                    <Flex align="center" gap={2}>
                        <Text as='b' textTransform='uppercase'>Errand posted: </Text>
                        <Text>04/18/2023</Text>
                    </Flex>
                    <Flex align="center" gap={2} my='.5em'>
                        <Text as='b' textTransform='uppercase'>Price: </Text>
                        <Text color='#11A746'>0.02ETH</Text>
                    </Flex>
                    </Box>
                    <Box mb='1.5em'>
                        <Text as='b' fontSize='.85em'>Errand Description</Text>
                        <Text fontSize='.7em'>
                            I am looking for someone to clean my apartment this weekend, from Friday to Monday. I am willing to pay 0.02 ETH for the job, but we can negotiate the rate depending on your skill set and experience.
                            The cleaning will involve basic tasks such as vacuuming, dusting, wiping surfaces, and cleaning the bathroom and kitchen. Please let me know if you are available and interested in the job.
                            Thank you!
                        </Text>
                    </Box>
                </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
  };
  
  export default ErrandDetails;
  
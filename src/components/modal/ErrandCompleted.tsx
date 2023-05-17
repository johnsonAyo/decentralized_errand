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
import { MdLocationOn } from 'react-icons/md'


interface Props {
    isOpen: boolean;
    onClose: () => void;
}
const ErrandCompleted: React.FC<Props> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton _hover={{ bg: 'transparent', color: '#810A67', border: '1px solid #810A67'}} />
                <ModalBody>
                    <Flex direction='column' align='center' mt='1.5em'>
                        <Text as='b' mt='1em' fontSize='1.25em'>Accepted Offer</Text>
                    </Flex>
                    <Box mt='1.5em' fontSize='.8em'>
                        <Flex gap={2}>
                            <Text as='b'>Task: </Text>
                            <Text>
                                Clean my studio apartment  and walk my dog
                            </Text>
                        </Flex>
                        <Flex gap={2} my='.8em'>
                            <Text w='100px' as='b'>Details: </Text>
                            <Text>
                            -Hello! I'm looking for a reliable and efficient individual who can assist me with two tasks: cleaning my apartment and walking my dog. I reside in a cozy one-bedroom apartment located at [your apartment address]. Here are the details of the combined errand:
Errand: Apartment Cleaning and Dog Walking Duration: Approximately 2-3 hours Location: [Your apartment address]
                            </Text>
                        </Flex>
                        <Flex gap={2}>
                            <Text as='b'>Hours: </Text>
                            <Text>
                                2 - 3 hours
                            </Text>
                        </Flex>
                        <Flex gap={2} my='.8em'>
                            <Text as='b'>Wage: </Text>
                            <Text>
                                0.20ETH
                            </Text>
                        </Flex>
                        <Flex gap={2}>
                            <Text as='b'>Location: </Text>
                            <Text>
                                2 - 3 hours
                            </Text>
                        </Flex>
                        <Center my='2em' d='flex' flexDirection='column'>
                            <Button
                                px="2em"
                                bg="#810A67"
                                fontWeight={700}
                                fontSize='.9em'
                                _hover={{ bg: "#5b0b4a" }}
                                color='#fff'
                            >
                                Errand Completed
                            </Button>
                            <Text my='1em' textAlign='center' fontSize='.8em' color='#3A3A3A80'>
                                Please only click "Errand Completed" if you have fully completed the assigned errand. By clicking this button, you are confirming that you have finished all the tasks mentioned and are ready for Payment
                            </Text>
                        </Center>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ErrandCompleted;
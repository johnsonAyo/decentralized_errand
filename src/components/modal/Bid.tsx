import {
    Box,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
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

interface Props {
    isOpen: boolean;
    onClose: () => void;
}
const Bid: React.FC<Props> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton _hover={{ bg: 'transparent', color: '#810A67', border: '1px solid #810A67'}} />
                <ModalBody>
                    <Flex direction='column' align='center'>
                        <Image mt='2em' src='/images/apartment.svg' alt='service' />
                        <Text as='b' mt='1em'>Apartment Cleaning</Text>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default Bid;
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
  import { useState } from "react";
  import Availability from "./component/Availability";
  import Learn from "./component/Learn";
  import Speak from "./component/Speak";
  import Complete from "./component/Complete";
  
  interface Props {
    isOpen: boolean;
    onClose: () => void;
  }
  
  const ErrandRequest: React.FC<Props> = ({ isOpen, onClose }) => {
    const [activeComponent, setActiveComponent] = useState<string>("learn");
  
      return (
          <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                  <ModalCloseButton _hover={{ bg: 'transparent', color: '#810A67', border: '1px solid #810A67'}} />
                  <ModalHeader>
                      {/* <Image src='/icons/LOGO.svg' alt='logo' /> */}
                      <Center>
                        <Text>Errand Requests</Text>
                      </Center>
                  </ModalHeader>
                  <ModalBody p='2em'>
                    <Flex>
                        <Flex>
                            <Text fontSize='.75em'>Select Category:</Text>
                            <Input />
                        </Flex>
                        <Flex>
                            <Text fontSize='.75em'>Errand Type:</Text>
                            <Input />
                        </Flex>
                    </Flex>
                    <Flex my='1em'>
                        <Flex>
                            <Text fontSize='.75em'>Header Display:</Text>
                            <Input />
                        </Flex>
                        <Flex>
                            <Text fontSize='.75em'>Job Location:</Text>
                            <Input />
                        </Flex>
                    </Flex>
                    <Flex my='1em'>
                        <Flex>
                            <Text fontSize='.75em'>Errand Type:</Text>
                            <Input />
                        </Flex>
                        <Flex>
                            <Text fontSize='.75em'>Price Range:</Text>
                            <Input />
                        </Flex>
                    </Flex>
                    <Flex>
                        <Text fontSize='.75em'>Description:</Text>
                        <Textarea />
                    </Flex>

                  </ModalBody>
                  <ModalFooter>
                    <Button px='2em' bg='#810A67' _hover={{ bg: "#5b0b4a" }} color='#fff'>Post Request</Button>
                  </ModalFooter>
              </ModalContent>
          </Modal>
      )
  }
  
  export default ErrandRequest;
  
import { useErrandContext } from "@/context";
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
//   import Availability from "./component/Availability";
//   import Learn from "./component/Learn";
//   import Speak from "./component/Speak";
//   import Complete from "./component/Complete";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ErrandRequest: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeComponent, setActiveComponent] = useState<string>("learn");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [isOnsite, setIsOnsite] = useState("");
  const [category, setCategory] = useState("");
  const [errandCost, setErrandCost] = useState(0);
  const { postErrand } = useErrandContext();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await postErrand({
        image,
        title,
        description,
        location,
        isOnsite,
        category,
        errandCost,
      });

      // Clear form fields
      setImage("");
      setTitle("");
      setDescription("");
      setLocation("");
      setIsOnsite("");
      setCategory("");
      setErrandCost(0);
    } catch (error) {
      console.log(error);
    }
  };

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
        <ModalHeader>
          {/* <Image src='/icons/LOGO.svg' alt='logo' /> */}
          <Center>
            <Text>Errand Requests</Text>
          </Center>
        </ModalHeader>
        <ModalBody p="2em">
          <Flex gap={4}>
            <Flex w="full">
              <Text fontSize=".65em" fontWeight={600}>
                Image:
              </Text>
              <Input
                size="xs"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
              />
            </Flex>
            <Flex w="full">
              <Text fontSize=".65em" fontWeight={600}>
                Errand Title:
              </Text>
              <Input
               size="xs"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
            </Flex>
          </Flex>
          <Flex my="1em" gap={4}>
            <Flex w="full">
              <Text fontSize=".65em" fontWeight={600}>
                Category
              </Text>
              <Select
              title="Select language"
              placeholder="Select option"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
              <option value="German">German</option>
              <option value="Korean">Korean</option>
              <option value="Chinese">Chinese</option>
              <option value="Estonian">Estonian</option>
              <option value="Haitian Creole">Haitian Creole</option>
              <option value="Hindi">Hindi</option>
            </Select>

            </Flex>
            <Flex w="full">
              <Text fontSize=".65em" fontWeight={600}>
                Errand Location:
              </Text>
              <Input
               size="xs"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
              />
            </Flex>
          </Flex>
          <Flex my="1em" gap={4}>
            <Flex w="full">
              <Text fontSize=".65em" fontWeight={600}>
                Errand Type:
              </Text>
              <Input
               size="xs"
                type="text"
                value={isOnsite}
                onChange={(e) => setIsOnsite(e.target.value)}
                placeholder="Onsite or Remote"
              />
            </Flex>
            <Flex w="full">
              <Text fontSize=".65em" fontWeight={600}>
                Price Range:
              </Text>
              <Input
               size="xs"
                type="number"
                step="0.05"
                value={errandCost}
                onChange={(e) => setErrandCost(parseInt(e.target.value))}
                placeholder="Errand Cost"
              />
            </Flex>
          </Flex>
          <Flex w="full" gap={4}>
            <Text fontSize=".65em" fontWeight={600}>
              Description:
            </Text>
            <Textarea
              size="xs"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
          onClick={handleSubmit}
            type="submit"
            px="2em"
            bg="#810A67"
            _hover={{ bg: "#5b0b4a" }}
            color="#fff"
          >
            Post Request
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ErrandRequest;

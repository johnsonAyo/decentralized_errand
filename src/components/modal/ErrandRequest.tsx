import { useErrandContext } from "@/context";
import { sendFileToIPFS } from "@/pinata";
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

  const ipfsgateway = "gateway.pinata.cloud";

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = e.target.files?.[0]; 
    if (file) {
      try {
        const getCid = await sendFileToIPFS(file);
        const ipfsPath = `https://${ipfsgateway}/ipfs/${getCid}`;
        console.log(ipfsPath);
        setImage(ipfsPath);
      } catch (error) {
        console.error("Error uploading file to IPFS:", error);
      }
    }
  };

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
                type="file"
                onChange={onChange}
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
              size="xs"
              title="Select language"
              placeholder="Select option"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Cleaning">Cleaning</option>
              <option value="Repairs/Construction">Repairs/Construction</option>
              <option value="Tourism & Entertainment">Tourism & Entertainment</option>
              <option value="Repairs of equipment">Repairs of equipment</option>
              <option value="Car repairs">Car repairs</option>
              <option value="Real estate">Real estate</option>
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

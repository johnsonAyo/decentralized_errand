import Layout from "@/components/layout/Layout";
import Meta from "@/components/Meta";
import ErrandRequest from "@/components/modal/ErrandRequest";
import Bid from "@/components/modal/Bid";
import ErrandCompleted from "@/components/modal/ErrandCompleted";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BsSearch, BsPlusCircleFill } from "react-icons/bs";

const topRequests = [
  {
    icon: "/icons/vacuum.svg",
    title: "Cleaning",
    workers: "490 workers",
    borderColor: "#00A9CE",
  },
  {
    icon: "/icons/constructor.svg",
    title: "Repairs/Construction",
    workers: "4190 workers",
    borderColor: "#6B7AED",
  },
  {
    icon: "/icons/deck-chair.svg",
    title: "Tourism & Entertainment",
    workers: "230 workers",
    borderColor: "#FFCD55",
  },
  {
    icon: "/icons/plug.svg",
    title: "Repairs of equipment",
    workers: "230 workers",
    borderColor: "#39D1F2",
  },
  {
    icon: "/icons/car.svg",
    title: "Car repairs",
    workers: "490 workers",
    borderColor: "#FF6D6C",
  },
  {
    icon: "/icons/building.svg",
    title: "Realestate",
    workers: "4190 workers",
    borderColor: "#29D697",
  },
  {
    icon: "/icons/constructor.svg",
    title: "Repairs/Construction",
    workers: "4190 workers",
    borderColor: "#6B7AED",
  },
];

const serviceArray = [
  {
    serviceIcon: "/icons/serviceIcon.svg",
    image: "/images/apartment.svg",
    title: "Apartment Cleaning",
    description: "Cleaning",
    price: "0.002ETH",
    date: "Until 16-05-22",
  },
  {
    serviceIcon: "/icons/serviceIcon.svg",
    image: "/images/apartment.svg",
    title: "Apartment Cleaning",
    description: "Cleaning",
    price: "0.002ETH",
    date: "Until 16-05-22",
  },
  {
    serviceIcon: "/icons/serviceIcon.svg",
    image: "/images/apartment.svg",
    title: "Apartment Cleaning",
    description: "Cleaning",
    price: "0.002ETH",
    date: "Until 16-05-22",
  },
  {
    serviceIcon: "/icons/serviceIcon.svg",
    image: "/images/apartment.svg",
    title: "Apartment Cleaning",
    description: "Cleaning",
    price: "0.002ETH",
    date: "Until 16-05-22",
  },
  {
    serviceIcon: "/icons/serviceIcon.svg",
    image: "/images/apartment.svg",
    title: "Apartment Cleaning",
    description: "Cleaning",
    price: "0.002ETH",
    date: "Until 16-05-22",
  },
  {
    serviceIcon: "/icons/serviceIcon.svg",
    image: "/images/apartment.svg",
    title: "Apartment Cleaning",
    description: "Cleaning",
    price: "0.002ETH",
    date: "Until 16-05-22",
  },
  {
    serviceIcon: "/icons/serviceIcon.svg",
    image: "/images/apartment.svg",
    title: "Apartment Cleaning",
    description: "Cleaning",
    price: "0.002ETH",
    date: "Until 16-05-22",
  },
  {
    serviceIcon: "/icons/serviceIcon.svg",
    image: "/images/apartment.svg",
    title: "Apartment Cleaning",
    description: "Cleaning",
    price: "0.002ETH",
    date: "Until 16-05-22",
  },
];

const Dashboard = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isBidOpen,
    onOpen: onBidOpen,
    onClose: onBidClose,
  } = useDisclosure();
  const {
    isOpen: isErrandOpen,
    onOpen: onErrandOpen,
    onClose: onErrandClose,
  } = useDisclosure();
  return (
    <Layout>
      <Meta page="Dashboard" />
      <ErrandRequest isOpen={isOpen} onClose={onClose} />
      <Bid isOpen={isBidOpen} onClose={onBidClose} />
      <ErrandCompleted isOpen={isErrandOpen} onClose={onErrandClose} />
      <Box p="2.5em" px="5em" bg="#F5F5F566" h="92vh">
        <Center>
          <Flex px="4em" justify="space-between" gap={20} align="center">
            <Stack direction="row" spacing={4}>
              <InputGroup bg="#D9D9D94D">
                <InputLeftAddon as="b">What</InputLeftAddon>
                <Input type="text" placeholder="Errand" />
                <InputRightAddon>
                  <BsSearch />
                </InputRightAddon>
              </InputGroup>

              <InputGroup bg="#D9D9D94D">
                <InputLeftAddon as="b">Where</InputLeftAddon>
                <Input type="text" placeholder="Country, city, state" />
                <InputRightAddon>
                  <BsSearch />
                </InputRightAddon>
              </InputGroup>
            </Stack>
            <Box>
              <Button
                bg="#810A67"
                color="#fff"
                leftIcon={<BsPlusCircleFill color="#fff" />}
                fontSize=".9em"
                _hover={{ bg: "#5b0b4a" }}
                onClick={onOpen}
                mr={4}
              >
                Errand Request
              </Button>
              <Button
                bg="transparent"
                color="#810A67"
                border="1px solid #810A67"
                onClick={onBidOpen}
              >
                Bid
              </Button>
              <Button ml={2} onClick={onErrandOpen}></Button>
            </Box>
          </Flex>
        </Center>
        <Box my="2em">
          <Text fontWeight={600} mb="1.5em">
            Top Requests
          </Text>
          <HStack spacing={8} overflowX="scroll">
            {topRequests?.map((request, index) => (
              <Box
                key={index}
                borderRadius={12}
                minW="16vw"
                p="1em"
                border={`2px solid ${request.borderColor}`}
              >
                <Image src={request.icon} alt="icon" />
                <Text mt="1em" fontWeight={700}>
                  {request.title}
                </Text>
                <Text mt=".5em" color="#A4A4AA" fontSize="0.75em">
                  +{request.workers}
                </Text>
              </Box>
            ))}
          </HStack>
        </Box>

        <Box>
          <Text fontWeight={600} mb="1.5em">
            Recent Errands
          </Text>
          <Wrap p="1em" spacing="30px" h="53vh" overflowY="scroll">
            {serviceArray?.map((service, index) => (
              <WrapItem position="relative" borderRadius={5} key={index}>
                <Image
                  src={service.serviceIcon}
                  alt="icon"
                  position="absolute"
                  top={3}
                  left={250}
                />
                <Flex
                  direction="column"
                  align="center"
                  p="1em"
                  minH="23vh"
                  minW="20vw"
                  boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
                  bg="#fff"
                >
                  <Image my="1em" src={service.image} alt="service" />
                  <Text as="b" mt="1em">
                    {service.title}
                  </Text>
                  <Flex gap={1} my=".8em">
                    <Image src="/icons/case.svg" alt="icon" />
                    <Text fontWeight={600} fontSize="0.75em" color="#B6B6B6">
                      {service.description}
                    </Text>
                  </Flex>
                  <Text fontSize=".75em" as="b">
                    Price:{" "}
                    <Text as="b" color="#13BC4E">
                      {service.price}
                    </Text>
                  </Text>
                  <Text color="#B6B6B6" fontSize=".75em" mt=".8em">
                    {service.date}
                  </Text>
                </Flex>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Box>
    </Layout>
  );
};
export default Dashboard;
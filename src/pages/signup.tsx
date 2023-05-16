import Layout from "@/components/layout/Layout";
import Meta from "@/components/Meta";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import "@particle-network/connect-react-ui/dist/index.css";
import { ConnectButton } from "@particle-network/connect-react-ui";
import { useAccount } from "@particle-network/connect-react-ui";
import { useConnectKit } from "@particle-network/connect-react-ui";
import router from "next/router";
import { CustomButton } from "@/components/CustomButton";

//use this in react component.

const Signup = () => {
  const connectKit = useConnectKit();
  //   const userInfo = connectKit.particle.userInfo();

  //use this in react component.
  const account = useAccount();
  if (account) {
    router.push("/onboard");
  }
  return (
    <Layout>
      <Meta page="Signup" />
      <Flex align="center" justify="center" h="80vh">
        <Box
          w={"35vw"}
          borderRadius={10}
          bg="#fff"
          boxShadow="0px 0px 4px rgba(0, 0, 0, 0.25)"
          p="2em"
          px="3em"
        >
          <Text
            textAlign="center"
            fontSize="1.5em"
            color="#3A3A3A"
            fontWeight={600}
          >
            Can we meet you?
          </Text>
          <Box mt="1.5em">
          <CustomButton />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Signup;

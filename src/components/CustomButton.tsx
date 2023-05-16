import "@particle-network/connect-react-ui/dist/index.css";
import { ConnectButton } from "@particle-network/connect-react-ui";
import { Box, Button, Center, Flex } from "@chakra-ui/react";

export const CustomButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openConnectModal,
        openChainModal,
        accountLoading,
      }) => {
        return (
          <Box>
            {account && (
              <Center>
                <Flex position="relative">
                  <Button bg="#810A67" color="white" onClick={openChainModal}>
                    {account.slice(0,5)}... {account.slice(36,40)}
                  </Button>
                  <Button onClick={openAccountModal}>😉</Button>
                </Flex>
              </Center>
            )}

            {!account && (
              <Center>
                <Button bg="#810A67" color="white" onClick={openConnectModal}>
                  Connect with Particle
                </Button>
              </Center>
            )}
          </Box>
        );
      }}
    </ConnectButton.Custom>
  );
};

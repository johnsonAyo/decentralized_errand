import Layout from "@/components/layout/Layout";
import Meta from "@/components/Meta";
import { Box, Button, Center, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";

const Signup = () => {
    return (
        <Layout>
            <Meta page="Signup" />
            <Flex
                align='center'
                justify='center'
                h='80vh'
            >
                <Box 
                    w={'35vw'}
                    borderRadius={10}
                    bg='#fff'
                    boxShadow='0px 0px 4px rgba(0, 0, 0, 0.25)'
                    p='2em'
                    px='3em'
                >
                    <Text textAlign='center' fontSize='1.5em' color='#3A3A3A' fontWeight={600}>Can we meet you?</Text>
                    <Box mt='1.5em'>
                        <form>
                            <FormControl>
                                <FormLabel fontWeight={600}>Name</FormLabel>
                                <Input 
                                    type='text' 
                                    bg='rgba(217, 217, 217, 0.3)' 
                                    border='0.4px solid rgba(58, 58, 58, 0.6)'
                                    h={50}
                                />
                            </FormControl>
                            <FormControl mt='1em'>
                                <FormLabel fontWeight={600}>Email</FormLabel>
                                <Input 
                                    type='text' 
                                    bg='rgba(217, 217, 217, 0.3)' 
                                    border='0.4px solid rgba(58, 58, 58, 0.6)'
                                    h={50}
                                />
                            </FormControl>
                            <FormControl mt='1em'>
                                <FormLabel fontWeight={600}>Choose Username</FormLabel>
                                <Input 
                                    type='text' 
                                    bg='rgba(217, 217, 217, 0.3)' 
                                    border='0.4px solid rgba(58, 58, 58, 0.6)'
                                    h={50}
                                />
                            </FormControl>
                            <Center my='3em'>
                                <Button bg='#E2B4D8' p='1.5em' px='2em' fontSize='.9em'>
                                    Create Account
                                </Button>
                            </Center>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Layout>
    )
}

export default Signup;
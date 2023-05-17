import Layout from "@/components/layout/Layout"
import Meta from "@/components/Meta"
import { Avatar, Box, Button, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

const Onboard = () => {
    return (
        <Layout>
            <Meta page='Onboard' />
            <Flex
                direction='column'
                align='center'
                justify='center'
                h='70vh'
            >
                <Text fontSize='1.5em' color='#3A3A3A' fontWeight={600}>Select a role</Text>
                <Stack direction='row' mt='3em' spacing={32}>
                    <Flex 
                        direction='column' 
                        align='center' 
                        justify='space-evenly' 
                        gap={10} 
                        p='2em'
                        w='20vw'
                        bg='#fff'
                        boxShadow='0px 0px 4px rgba(0, 0, 0, 0.25)'
                        borderRadius={10}
                    >
                        <Text fontWeight={600} fontSize='1.2em'>Looking for Specialist</Text>
                        <Avatar src='https://bit.ly/kent-c-dodds' name='John Doe' size='2xl' />
                        <Link href='/dashboard'>
                            <Button bg='#E2B4D8' _hover={{ bg: '' }} p='1.5em' px='4em'>
                                Continue
                            </Button>
                        </Link>
                    </Flex>

                    <Flex 
                        direction='column' 
                        align='center' 
                        justify='space-evenly' 
                        gap={10} 
                        p='2em'
                        w='20vw'
                        bg='#fff'
                        boxShadow='0px 0px 4px rgba(0, 0, 0, 0.25)'
                        borderRadius={10}
                    >
                        <Text fontWeight={600} fontSize='1.2em'>I want to find a Job</Text>
                        <Avatar src='https://bit.ly/sage-adebayo' name='John Doe' size='2xl' />
                        <Link href='/dashboard'>
                            <Button bg='#E2B4D8' _hover={{ bg: '' }} p='1.5em' px='4em'>
                                Continue
                            </Button>
                        </Link>
                    </Flex> 
                </Stack>
            </Flex>
        </Layout>
    )
}

export default Onboard;
import { Box, Image } from "@chakra-ui/react"
import { ReactNode } from "react";
import Navbar from "../Navbar";

type Props = {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <Box 
                w='100vw' 
                h='100vh' 
                // py='2em' 
                // px='5em' 
                position='relative'
            >
                <Image 
                    src='/icons/Vector.svg' 
                    alt='vector'
                    position='absolute'
                    top={117}
                    zIndex={-1}
                    left={170}
                />
                <Image 
                    src='/icons/rightVector.svg' 
                    alt='vector'
                    position='absolute'
                    top={137}
                    zIndex={-1}
                    left={853}
                />
                <Image 
                    src='/icons/centerVector.svg' 
                    alt='vector'
                    position='absolute'
                    top={390}
                    left={440}
                    zIndex={-1}
                />
                {children}
            </Box>
        </>
    )
}

export default Layout;
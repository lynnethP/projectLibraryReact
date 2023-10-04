import logo from '../img/library.png'
import { Link } from 'react-router-dom'
import { Flex, Image } from '@chakra-ui/react'

export function Header() {
    return (
        <>
            <Flex w='100%' h='70px' p='6px' align='center' justify='flex-start'
                bgColor='#2B6CB0' color='white'>
                <Link to={'/'}>
                    <Image src={logo} h='50px' />
                </Link>
            </Flex>
        </>
    )
}
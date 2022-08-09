import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contesxt/sidebarDrawerContext'
import { Logo } from './logo'
import { NotificationNav } from './notificationsNav'
import { Profile } from './profile'
import { SearchBox } from './searchBox'



export function Header() {

    const {onOpen} = useSidebarDrawer()

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Flex 
            as="header" 
            w="100%" 
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >

            {!isWideVersion && (
                <IconButton
                    aria-label='open navigation'
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                >

                </IconButton>
            )}

           <Logo />

            { isWideVersion && <SearchBox />}

            <Flex align="center" ml="auto">

                {/* Notification sesion */}
               <NotificationNav />

                {/* Profile data */}
               <Profile showProfileData={isWideVersion}/>
            </Flex>
        </Flex>
    )
}
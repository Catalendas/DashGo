import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contesxt/sidebarDrawerContext";
import { SidebarNav } from "./sidebarNav";

export function Sidebar() {

    const { isOpen, onClose} = useSidebarDrawer()

    const isCrawerSidebar = useBreakpointValue({
        base: true,
        lg: false
    })

    if(isCrawerSidebar) {
        return(
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerOverlay>
                    <DrawerContent bg="gray.800" p="4">
                        <DrawerCloseButton mt="6" />
                        <DrawerHeader>Naveegação</DrawerHeader>

                        <DrawerBody>
                            <SidebarNav/>
                        </DrawerBody>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        )
    }

    return(
        <Box as="aside" w="64" mr="8">
            <SidebarNav />  
        </Box>
    )
}
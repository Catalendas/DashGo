import { Icon, Link as ChakraLink, Text, LinkProps as ChakraLinksProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link"
import { ActiveLink } from "../activeLink";

interface NavLinkProps extends ChakraLinksProps {
    title: string,
    icon: ElementType,
    url: string
}

export function NavLink({title,  icon, url, ...rest}: NavLinkProps){
    return(
        <ActiveLink href={url} passHref>
            <ChakraLink display="flex" alignItems="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{title}</Text>
            </ChakraLink>
        </ActiveLink>
        
    )
}
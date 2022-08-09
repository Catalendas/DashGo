import { Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./navLink";
import { NavSection } from "./navSection";

export function SidebarNav() {
    return(
        <Stack spacing="12" align="flex-start">
                <NavSection title="GERAL">
                        <NavLink url="/dashboard" title="Dashboard" icon={RiDashboardLine}/>

                        <NavLink url="/users" title="Users" icon={RiContactsLine}/>
                </NavSection>

                <NavSection title="AUTOMAÇÃO">
                            <NavLink url="/forms" title="Formularios" icon={RiInputMethodLine}/>

                            <NavLink url="/automation" title="Automação" icon={RiGitMergeLine}/>
                        
                </NavSection>
            </Stack>
    )
}
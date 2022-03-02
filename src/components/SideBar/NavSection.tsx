import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionProps {
    title: string;
    children: ReactNode;
}

export function NavSection({title, children}: NavSectionProps) {
    return (
        <Box>
        <Text fontWeight="bold" color="gray.400" fontSize="small"> {title} </Text>
        <Stack spacing="4" mt="8" align="stretch" >

            <Link display="flex" alignItems="center" color="gray.100">
                <Icon as= {RiDashboardLine} fontSize="20" />
                <Text ml="4" fontWeight="medium"> Dashboard </Text>
            </Link>

            <Link display="flex" alignItems="center" color="gray.100">
                <Icon as= {RiContactsLine} fontSize="20" />
                <Text ml="4" fontWeight="medium"> Usuarios </Text>
            </Link>
            </Stack>
            </Box>
    );
}
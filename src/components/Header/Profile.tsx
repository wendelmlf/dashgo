import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text color="gray.300"> Wendel  </Text>
                <Text color="gray.300" fontSize="small">
                    wendel.ferreira@startse.com
                </Text>
            </Box>
            <Avatar size="md" name="Wendel Ferreira"/>
        </Flex>
    );
}
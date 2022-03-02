import { Box, Stack } from "@chakra-ui/react";
import { PaginationIntem } from "./PaginationItem";

export function Pagination() {
    return (
        <Stack
        direction="row"
        mt= "8"
        justify= "space-between"
        align="center"
        spacing="6"
        >
            <Box color="gray.100">
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                <PaginationIntem number={1} isCurrent />
                <PaginationIntem number={2} />
                <PaginationIntem number={3} />
                <PaginationIntem number={4} />
                <PaginationIntem number={5} />
                <PaginationIntem number={6} />
            </Stack>
        </Stack>
    );
}
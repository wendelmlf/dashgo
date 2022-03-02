import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    isCurrent?: boolean;
    number: Number;
}

export function PaginationIntem({isCurrent= false, number}: PaginationItemProps) {
    if(isCurrent) {
    return(
        <Button
            size="sm"
            fontSize="xs"
            width="4"
            colorScheme= "pink"
            disabled
            _disabled={{
                bgColor: 'pink.500',
                cursor: 'defalt',
            }}
            >
                {number}
        </Button>
        )
    }
    return (
        <Button
        size="sm"
        fontSize="xs"
        width="4"
        bg="gray.700"
        _hover={{
            bg: 'gray.500'
        }}
        >
            {number}
        </Button>
    );
}
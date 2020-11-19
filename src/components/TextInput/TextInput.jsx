import { Box, Textarea } from '@chakra-ui/react'
import React from 'react'

export const TextInput = ({value, handleInputChange}) => {
    return (
        <Box p="1rem" border="30px" w="100%" h="100%" borderColor="blue.600">
        <Textarea value={value} onChange={handleInputChange} placeholder="input json" resize="none" w="100%" h="100%">
        </Textarea>
        </Box>
    )
}

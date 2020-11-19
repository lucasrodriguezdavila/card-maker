import { Box, Divider, Heading } from '@chakra-ui/react'
import {TextInput } from '../TextInput/TextInput'
import React from 'react'

export const JsonInputSection = ({value, handleInputChange}) => {
    return (
        <Box p="1rem" w="50vw" h="100vh" d="flex" flexDir="column" justifyContent="space-around">
            <Box paddingLeft="1em"><Heading>TextInput</Heading></Box>
            <Divider></Divider>
            <Box h="85vh">
                <TextInput value={value} handleInputChange={handleInputChange}></TextInput>
            </Box>
        </Box>
    )
}

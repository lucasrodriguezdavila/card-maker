import { Box, Divider, Heading, Button} from '@chakra-ui/react'
import {TextInput } from '../TextInput/TextInput'
import React from 'react'

export const JsonInputSection = ({value, handleInputChange, parse}) => {
    return (
        <Box p="1rem" w="50vw" h="100vh" d="flex" flexDir="column" justifyContent="space-around">
            <Box paddingLeft="1em"><Heading color="gray.700">Card maker</Heading></Box>
            <Divider></Divider>
            <Box h="70vh">
                <TextInput value={value} handleInputChange={handleInputChange}></TextInput>
            </Box>
            <Button backgroundColor="gray.300" alignSelf="flex-end" w="150px" h="50px" onClick={parse} marginRight="15px">Make cards!</Button>
        </Box>
    )
}

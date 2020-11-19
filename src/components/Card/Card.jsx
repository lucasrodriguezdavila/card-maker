import { Box, Text, Heading, Image, Badge} from '@chakra-ui/react'
import React from 'react'

export const Card = ({children, o}) => {
    return (
        <Box backgroundColor="gray.200" d="flex" flexDirection="column" justifyContent="space-between" border="4px" borderRadius="10px" borderColor="gray.300" w="300px" h="400px" marginTop="1em">
            <Box h="70%">
            <Image w="100%" h="100%" objectFit="cover" borderRadius="5px" src={o.img ? o.img : "https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"}></Image>
            </Box>
            <Box h="30%" p="5px" paddingLeft="10px" paddingY="10px">
                <Box w="100%" d="flex" alignItems="baseline" justifyContent="space-between" paddingRight="5px">
                    <Box d="flex">
                        <Heading borderRadius="5px" d="inline" paddingX="10px" paddingY="3px" backgroundColor={o.title ? "gray.300" : "red.200"} as="h1" size="md" >{o.title ? o.title : "vacio :("}</Heading>
                        <Heading paddingLeft="10px" fontSize="md" fontWeight="500">{o.subtitle ? o.subtitle : ""}</Heading>
                    </Box>
                    {o.age ? <Badge fontSize="0.8em">age: {o.age}</Badge> : ""}
                </Box>
                <Box mt="4px">
                {o.description ? <Text>{o.description}</Text> : ""}
                </Box>
            </Box>
        </Box>
    )
}

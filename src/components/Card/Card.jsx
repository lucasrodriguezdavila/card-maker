import { Box, Button } from '@chakra-ui/react'
import React, {useState} from 'react'

export const Card = ({children}) => {
    const [obj, setObj] = useState()

    const tryParse =(o) =>{
        try{
            const jsonChild = JSON.parse(children)
            setObj(jsonChild)   
        }catch(e){}
    }
    return (
        <Box d="flex" flexDirection="column" justifyContent="space-between" border="4px" borderRadius="10px" borderColor="blue.600" w="300px" h="400px">
            <Box h="70%">
            {children}
            </Box>
            <Box h="30%" color="red" border="4px">
                {obj ? obj.name : "nada"}
            </Box>
            <Button onClick={tryParse}></Button>
        </Box>
    )
}

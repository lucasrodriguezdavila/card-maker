import { Box } from '@chakra-ui/react';
import './App.css';
import { Card } from './components/Card/Card';
import { JsonInputSection } from './components/JsonInputSection/JsonInputSection';
import React, {useState} from 'react'

function App() {

  const [value, setValue] = useState("")

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    console.log("a")
    setValue(inputValue)
  }

  return (
    <Box bg="blue.100" d="flex">
      <Box >
        <JsonInputSection handleInputChange={handleInputChange} value={value}></JsonInputSection>
      </Box>
      <Box w="50vw" display="flex" alignItems="center" justifyContent="center">
        <Card>{value}</Card>
      </Box>
    </Box>
  );
}

export default App;

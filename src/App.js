import { Box, useToast } from '@chakra-ui/react';
import './App.css';
import { Card } from './components/Card/Card';
import { JsonInputSection } from './components/JsonInputSection/JsonInputSection';
import React, {useState} from 'react'

function App() {
  const defaultText=`[{
    "title":"Sherk",
    "img":"https://e00-elmundo.uecdn.es/television/programacion-tv/img/v2/programas/79/550265.png",
    "subtitle":"A great ogre",
    "age":"30",
    "description":"Shrek is the titular protagonist of the franchise of the same name"
  },{
    "title":"Donkey",
    "img":"https://image.kpopmap.com/2020/02/unnamed-1-35.jpg",
    "subtitle":"Regular donkey",
    "age":"¿?",
    "description":"Donkey IV is the sweet, euphoric, and flighty sidekick of the Shrek franchise"
  }
  ]
  `
  const toast = useToast()
  const [text, setValue] = useState(defaultText)

  const handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }

  //text input
  const [obj, setObj] = useState([].concat(JSON.parse(defaultText)))

    const tryParse =() =>{
        try{
            const jsonChild = JSON.parse(text)
            setObj((prevState => {return []}))
            setObj((prevState => {return prevState.concat(jsonChild)}))
            console.log(obj)
            const makeToast = () => toast({
              position:"bottom-left",
              title: "Todo correcto",
              description: "Tarjetas creadas correctamente",
              status: "success",
              duration: 9000,
              isClosable: true,
            }) 
            makeToast()
            
        }catch(e){ 
          const makeToast = (e) => toast({
          title: "Algo no salio bien..",
          position:"bottom-left",
          description: e.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        }) 
        makeToast(e)
    }}
    const someArray= [{name:"jhon"},{name:"carmelle"}]
    console.log(someArray)
  return (
    <Box bg="gray.100" d="flex" v="100vh">
      <Box >
        <JsonInputSection handleInputChange={handleInputChange} value={text} parse={tryParse}></JsonInputSection>
      </Box>
      <Box w="50vw" display="flex" alignItems="center" justifyContent="center">
        <Box border="4px" borderRadius="10px" borderColor="gray.300" h="450px" w="350px" overflowY="scroll" display="flex" alignItems="center"  flexDir="column">
          {obj.map((o)=> <Card key={o.name} o={o}>{text}</Card>)}
        </Box>
      </Box>
    </Box>
  );
}

export default App;

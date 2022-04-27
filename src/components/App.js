import { useEffect, useReducer } from "react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Container, VStack, Heading, useColorMode, IconButton, Stack } from "@chakra-ui/react";
 
import { todoReducer } from "../reducer/todoReducer"; 
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";


const init = () => {
  
  return JSON.parse(localStorage.getItem('todos')) || [];

} 


function App() {

  const { colorMode, toggleColorMode } = useColorMode(); 

  const [todos, dispatch] = useReducer(todoReducer, [], init);   
 
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])
   
  
  const handleAddTodo = (newTodo) => {
    
    dispatch({
      type: 'add',
      payload: newTodo
    });

  }
  
  const handleDelete = (todoId) => { 
    
    dispatch({
      type: 'delete',
      payload: todoId
    });

  }
 
  
  const handleToggle = (todoId) => { 

    dispatch({
      type: 'toggle',
      payload: todoId, 
    });

  }
  

  return (
    <Container maxW="container.lg" padding={0}> 
      <Stack w="full">
        <IconButton
          alignSelf='flex-end'
          icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />} 
          isRound='true' 
          my={2}
          size='lg'
          onClick={toggleColorMode}
        />  
      </Stack>

      <VStack w="full" alignItems='center'>
        <Box my={8}>
          <Heading
            color='green.500'
            fontSize='5xl'
            fontWeight='bold'
          >
            Todo App
          </Heading>
        </Box>

        <VStack w="full" borderRadius='lg' borderWidth='1px' p={10} spacing={5}>
 
          <TodoAdd 
            handleAddTodo={handleAddTodo}
          />

          <TodoList 
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />  

        </VStack>
  
      </VStack>
    </Container> 
  )
}

export default App;



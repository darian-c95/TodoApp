import { Box, HStack, Input,Button } from '@chakra-ui/react'
import React from 'react'

import { useForm } from '../hooks/useFrom'


export const TodoAdd = ({handleAddTodo}) => {

  const [{description}, handleInputChange, reset] = useForm({
    description: ''
  }) 

  const handleSubmit = (e) => {

    e.preventDefault(); 

    if(description.trim().length <= 1) {
      return;
    } 

    const newTodo = ({
      id: new Date().getTime(),
      desc: description,
      done: false
    })
    
    handleAddTodo(newTodo);
    reset();
  }

  return (
    <>
      <Box pb={5}>
        <form onSubmit={handleSubmit}>
          <HStack>
            <Input 
              type="text"
              placeholder="Add new item"
              name="description"
              value={description}
              autoComplete="off"
              onChange={handleInputChange}
            />
            <Button px={5} type='submit'>Add Todo</Button>
          </HStack>
        </form>
      </Box>  
  </>
  )
}

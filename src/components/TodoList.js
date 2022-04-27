import React from 'react'
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, HStack, IconButton, Text, useColorModeValue } from '@chakra-ui/react'


export const TodoList = ({todos, handleDelete, handleToggle}) => {

    const secondaryTextColor = useColorModeValue('gray.600', 'gray.300')

  return (
    <>
    {
        todos.map((todo) => (
            <Box borderWidth='1px' borderRadius='lg' w='100%' p={4} color='black' key={todo.id}>
                <HStack justifyContent="space-between"> 
    
                    <Box>
                        <HStack spacing='14px'>
                            <IconButton
                                color={secondaryTextColor}
                                icon={<CheckIcon />}
                                isRound='true' 
                                onClick={() => handleToggle(todo.id)}
                            />  
                            <Text 
                                textDecoration={todo.done? 'line-through' : 'none'}
                                color={secondaryTextColor}
                            >
                                {todo.desc}
                            </Text>                    
                        </HStack>
                    </Box>
    
                    <IconButton
                        color={secondaryTextColor} 
                        icon={<DeleteIcon />}
                        isRound='true' 
                        onClick={() => handleDelete(todo.id)}
                    />
    
                </HStack>
            </Box>
        ))
    }

    </>
  )
}

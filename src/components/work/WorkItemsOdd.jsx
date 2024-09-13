import React from 'react'
import { Card ,CardBody, CardFooter , Image, Stack, Heading, Text, Button } from '@chakra-ui/react'

const WorkItemsOdd = ({item}) => {
  return (
   
    <Card
    w={{sm: '200px' , md: '500px' , lg: '700px' }}  
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  backgroundColor={'var(--container-color)'}
  border={'transparent'}
  color={'var(--text-color)'}
>
<Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '50px' , md: '220px' , lg: '300px' }}
    src={item.image}
    alt='Caffe Latte'
  />
 

  <Stack>
    <CardBody 
    w={{sm: '100px' , md: '250px' , lg: '350px' }}
    marginLeft={{lg : '50px' , md: '20px' , sm: '5px' }}
    textAlign={'center'}>
      <Heading size='md' colorScheme='var(--title-color)'>{item.title}</Heading>

      <Text py='2' colorScheme='var(--text-color)'>
        {item.description}
      </Text>
    </CardBody>

  <a href={item.link}>  
    <CardFooter>
      <Button 
      className='work__button'
      variant='solid'
      colorScheme='white'
      marginLeft={{lg : '50px' , md: '20px'}}
      transition='0.2s ease'
      _hover={{bg: 'var(--title-color-dark)' , color: 'var(--container-color)'}}
      textColor={'var(--text-color)'}
      border={'1px solid var(--text-color)'}
      >
        Code <i className='uil uil-github  work__button-icon'/>
      </Button>
    </CardFooter>
  </a>
  </Stack>
</Card>
  )
}

export default WorkItemsOdd

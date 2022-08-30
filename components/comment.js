import {Flex, useColorModeValue, chakra } from '@chakra-ui/react'
import Date from './date'

 export default function Comment({ id, createdAt, name,  comment }) {
  return (
    <Flex
      key={id}
      boxShadow={'lg'}
      maxW={'840px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={6}
      m={2}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.700')}
      >
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}>
        <chakra.p
          fontFamily={'Inter'}
          fontStyle={"italic"}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}>
          {comment}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={'gray.500'}>
            {' '}
            - <Date
              dateString={createdAt}
            />
          </chakra.span>
        </chakra.p>
      </Flex>
    </Flex>
  )
}
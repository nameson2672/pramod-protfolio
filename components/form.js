import {
  Flex,
  Box,
  Button,
  VStack,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea, useToast
} from '@chakra-ui/react';
import {useState} from 'react'
 import { useForm } from 'react-hook-form'
 import Comment from './comment';
import {
  MdOutlineEmail,
} from 'react-icons/md';
import {  BsPerson } from 'react-icons/bs';

export default function Form({_id}) {
  const [formData, setFormData] = useState()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [gotError, setGotError] = useState(false)
  const [hasSubmittedForm, setHasSubmitted] = useState(false)
  const [writeComment, setWriteComent] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const toast = useToast()
  const onSubmit = async data => {
    setIsSubmitting(true)
    let response
    setFormData(data)
    try {
      response = await fetch('/api/createComment', {
        method: 'POST',
        body: JSON.stringify(data),
        type: 'application/json'
      })
      setIsSubmitting(false)
      setHasSubmitted(true)
    } catch (err) {
      setFormData(err)
      setGotError(true);
    }
  }

  if (isSubmitting) {
    setIsSubmitting(false);
    return toast({
      title: 'Posting Your Comment.',
      status: 'info',
      duration: 9000,
      isClosable: true,
    })
  }
  if(gotError){
    setGotError(false);
    return(
      <>
        {toast({
          title: 'Error occured.',
          description: "An error occured while posting your comment.",
          status: 'error',
          duration: 2000,
          isClosable: true,
        })}
      </>
    )
  }
  if (hasSubmittedForm) {
    setHasSubmitted(false);
    setWriteComent(true);
    return (
    <>
      {toast({
          title: 'Comment Posted.',
          description: "Your comment is been posted thank you for comment.",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })}
    </>)
  }
  if(writeComment){
    return(
      <Comment name={formData.name} comment={formData.comment} createdAt={Date.now()}/>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} disabled>
      <Flex>
        <Box
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }} >
          <Box p={4}>
            <>
              <WrapItem  shadow={'xl'}>
                <Box bg="gray.50" _dark={{ bg: "gray.700" }} borderRadius="lg">
                  <Box m={8} color="blue.600" _dark={{ color: "green.600", textColor:"white" }} textColor={"blackAlpha.800"}>
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray" />}
                          />
                          <input {...register("_id")} type="hidden" name="_id" value={_id} />
                          <Input type="text" {...register("name", {required: true})} size="md" width={["", "md", "xl", "2xl","4xl"]}/>
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray" />}
                          />
                          <Input {...register("email", {required: true})} type="email" size="md" name='email' />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="Message......."
                          {...register("comment", {required: true})}
                          name={"comment"}
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          type="submit"
                          variant="solid"
                          bg="blue.600" _dark={{ bg: "green.600" }}
                          color="white"
                          _hover={{}}>
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </>
          </Box>
        </Box>
      </Flex>
    </form>
  );
}

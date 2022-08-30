import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Link,
  Avatar,
  useColorModeValue,
  scaleFadeConfig,
} from "@chakra-ui/react";
import { imageBuilder } from "../lib/sanity";
import { PortableText } from "@portabletext/react";
import Date from "./date";
import NextLink from 'next/link'
import { transform } from "framer-motion";
import BlogCatogery from "./hero-post-tag";

export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  categories,
  readTime
}) {
  const authorUrl = "author/"+ author.slug.current
  let url = imageBuilder(coverImage).url();
  return (
    <NextLink href={"/posts/" + slug} passHref>
      <Center py={6}>
        <Box
          maxW={"445px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={"xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
          cursor={"pointer"}
          transition={"0.2s all ease-in-out"}
          _hover={{transform: "scale(1.02)", boxShadow:"2xl"}}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
            transition={"0.3s all ease-in-out"}
            _hover={{ transform: 'scale(1.1)'}}
          >
            <Image
              src={url}
              layout={"fill"}
              cursor={"pointer"}
              
            />
          </Box>
          <Stack>
            <Text
              color={"green.500"}
              textTransform={"uppercase"}
              fontWeight={800}
              fontSize={"sm"}
              letterSpacing={1.1}
            >
              <BlogCatogery data={categories}/>
            </Text>
            <Heading
              color={useColorModeValue("gray.700", "white")}
              fontSize={"2xl"}
              fontFamily={"body"}
            >
              {title}
            </Heading>
          </Stack>
          <Stack mt={6} direction={"row"} spacing={4} align={"center"} >
            <Avatar
              src={author.picture}
              alt={"Author"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Link  cursor={'pointer'} 
            href={authorUrl} fontWeight={600}>{author.name}</Link>
              <Text color={"gray.500"}><Date dateString={date}/> · {readTime===0?1:readTime}min read</Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
      </NextLink>
  );
}

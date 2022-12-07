import React from 'react'
import { PortableText } from "@portabletext/react";
import { Avatar, Box, Stack, Text, useColorModeValue, Image, Container } from '@chakra-ui/react';
import { getAuthers } from '../../lib/api'
import {imageBuilder} from '../../lib/sanity'
import {getAuthersData} from '../../lib/api';
import {AvatarComp} from "../../components/avatar";

export default function AuthorComp({author, preview}) {
  console.log(author);
  return (
    <Container centerContent my={"16"} maxW={["sm", "md", "8xl"]}>
    

    <Image alt={author.name} src={imageBuilder(author.image).width().height(300).url()} fit={"cover"} />
    <Text
      fontSize={["large", "2xl", "4xl"]}
      fontWeight={"bold"}
      color="blue.600"
                  _dark={{ color: "green.400" }}
      textAlign={'center'}
      maxW={'3xl'}>
      {author.name}
    </Text>
    <Container maxW={["sm", "md"]}>
      <PortableText value={author.bio} />
    </Container>
  </Container>
  )
}

export async function getStaticProps({params, preview = false}){
  const data = await getAuthersData(params.slug, false);
  return {
    props:{
      preview,
      author: data
    },
    revalidate:60,
  };
}

export async function getStaticPaths(){
  const appAuthors = await getAuthers();
  return {
    paths:
      appAuthors?.map((author)=> ({
        params:{
          slug: author.slug,
        },
      })),
      fallback: 'blocking',
    }

}
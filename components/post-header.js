import AvatarComp from '../components/avatar'
import Date from '../components/date'
import CoverImage from '../components/cover-image'
import { Container, Text, Image, Flex, Box } from '@chakra-ui/react'
import {imageBuilder} from '../lib/sanity'
export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <Container centerContent maxW={["sm", "md", "8xl"]}>
      
        <Text
          w={"inherit"}
          align={"center"}
          fontWeight={"extrabold"}
          fontSize={["large", "2xl", "4xl"]}
        >
          {title}
        </Text>
        <Flex m={"4"} centerContent>
          <Text>- <Date dateString={date} /> </Text>
        </Flex>
        <AvatarComp name={author?.name} picture={author?.picture} slug={author?.slug}/>
        <Box my={"4"}>
          <Image alt={title} src={imageBuilder(coverImage).width(1240).height(540).url()} fit={"cover"} />
        </Box>
      
    </Container>
  )
}

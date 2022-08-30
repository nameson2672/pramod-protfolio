import { Link, Flex, Avatar } from "@chakra-ui/react"
export default function AvatarComp({ name, picture, slug }) {
  const authorUrl = "author/"+ slug.current
  return (
    <Flex centerContaint justifyContent={"center"} alignItems={"center"}>
      <Avatar src={picture} alt={name} />
      <Link mx={"2"} cursor={'pointer'} href={authorUrl} fontWeight={600}>{name}</Link>
    </Flex>
  )
}

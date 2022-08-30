import { Container } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";

export default function PostBody({ content }) {
  return (
    <Container mx={"auto"} maxW={["25em", "2xl", "4xl"]} className="MarkdownContainer">     
      <PortableText value={content} />
    </Container>
    
  );
}

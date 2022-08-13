import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Text,
  IconButton,
  useColorModeValue,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
} from "@chakra-ui/react";
import ToggleMode from "./ModeSwitch";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Container
        maxW={["container.sm", "container.md", "container.lg"]}
        display="flex"
        mt="2"
        flexDirection={["row", "row", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <NextLink href="/" passHref>
        <Text cursor={"pointer"} fontSize='3xl' fontFace="bold"  >Sharma Blogs</Text>
        </NextLink>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex" justifyContent="flex-start">
            <Box display={["none", "none", "block", "block"]}>
              <NextLink href="/about" passHref scroll={false}>
                <Button m={["1", "2"]} variant="ghost">
                  About
                </Button>
              </NextLink>
            </Box>
            <IconButton
              onClick={onOpen}
              m={["1", "2"]}
              transition={"ease-in-out"}
              colorScheme={useColorModeValue("blue", "cyan")}
              display={["block", "block", "none"]}
              icon={<HamburgerIcon />}
            />
            <Box m={["1", "2"]}>
              <ToggleMode />
            </Box>
          </Box>
        </Box>
      </Container>
      <Drawer size={"full"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <IconButton
              m={["1", "2"]}
              colorScheme={useColorModeValue("blue", "cyan")}
              variant="ghost"
              onClick={onClose}
              icon={<CloseIcon />}
            />
          </DrawerHeader>
          <DrawerBody display={"flex"} flexDirection={"column"}>
            <NextLink href="/" passHref scroll={false}>
              <Button m={["1", "2"]} variant="ghost" onClick={onClose}>
                About
              </Button>
            </NextLink>
            <NextLink href="/work" passHref scroll={false}>
              <Button m={["1", "2"]} variant="ghost" onClick={onClose}>
                Work
              </Button>
            </NextLink>

            <NextLink href="/blog" passHref scroll={false}>
              <Button m={["1", "2"]} variant="ghost" onClick={onClose}>
                Blog
              </Button>
            </NextLink>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavBar;

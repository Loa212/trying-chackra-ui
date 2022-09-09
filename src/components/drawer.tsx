import {
  Button,
  Drawer,
  Input,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Center,
  VStack,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useWindowSize } from "../utils/useWindowSize";
import { isMobile } from "../utils/isMobile";

export default function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const size = useWindowSize();

  if (isMobile(size.width)) {
    return (
      <>
        <Button ref={btnRef} onClick={onOpen}>
          <HamburgerIcon boxSize={6} />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>

            <DrawerBody>
              <Input placeholder="Type here..." />
              <Container paddingTop={"24px"}>
                <VStack alignItems={"start"} spacing="24px">
                  <p>miao</p>
                  <p>bau</p>
                </VStack>
              </Container>
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    );
  } else {
    return null;
  }
}

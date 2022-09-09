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
} from "@chakra-ui/react";
import React from "react";
import { useDisclosure, useBreakpointValue } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

export default function DrawerComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  //   const drawerBtnBoxSize = useBreakpointValue(
  //     {
  //       xl: "4",
  //     },
  //     {
  //       // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
  //       // (Defaults to 'base')
  //       fallback: "8",
  //     }
  //   );

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <HamburgerIcon boxSize={[6, 6, 6, 4]} />
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
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
}

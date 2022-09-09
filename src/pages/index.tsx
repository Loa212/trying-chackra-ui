import { Container, Heading, Center } from "@chakra-ui/react";
import Nav from "../components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <Center paddingTop={6} textAlign={"start"}>
        <Heading>I&apos;m a Heading</Heading>
      </Center>
    </>
  );
}

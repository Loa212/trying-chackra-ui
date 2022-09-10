import {
  Heading,
  Center,
  Container,
  Box,
  useDisclosure,
  Button,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Tabs,
  Text,
  Input,
  Divider,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import LoremIpsum from "react-lorem-ipsum";
import ModalComponent from "../components/modalComponent";
import Nav from "../components/nav";
import SelectComponent from "../components/selectComponent";

export default function Home() {
  const mockData = [
    { value: "1", label: "Miao" },
    { value: "2", label: "Bau" },
    { value: "3", label: "Miau" },
    { value: "4", label: "Bauuuu" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <ModalComponent isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Nav />
      <Box width={"full"}>
        <Center paddingTop={6} textAlign={"start"}>
          <Heading>I&apos;m a Heading</Heading>
        </Center>
        <Center paddingTop={6} paddingX={8}>
          <Box width={"xl"}>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
            />
          </Box>
        </Center>
        <Center paddingTop={6} paddingX={8}>
          <Box width={"xl"}>
            <NumberInput>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
        </Center>
        <Center paddingTop={6} paddingX={8}>
          <Box width={"xl"}>
            <SelectComponent Options={mockData} />
          </Box>
        </Center>
        <Center paddingTop={6} paddingX={8}>
          <Box width={"xl"}>
            <Button onClick={onOpen}>Open Modal</Button>
          </Box>
        </Center>
        <Center paddingTop={6} paddingX={8}>
          <Box width={"xl"}>
            <Tabs isFitted variant="enclosed">
              <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
              </TabList>
              <TabPanels
                borderBottom={"1px solid rgba(255,255,255,0.1)"}
                borderX={"1px solid rgba(255,255,255,0.1)"}
                roundedBottom={4}
              >
                <TabPanel>
                  <Text fontSize={24} paddingBottom={4}>
                    one!
                  </Text>
                  <LoremIpsum />
                </TabPanel>
                <TabPanel>
                  <Text fontSize={24} paddingBottom={4}>
                    two!
                  </Text>
                  <LoremIpsum />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Center>
      </Box>
    </>
  );
}

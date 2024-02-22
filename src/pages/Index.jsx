import { Box, Container, Heading, Text, Stack, SimpleGrid, Image, Icon, Flex, Divider, Button } from "@chakra-ui/react";
import { FaCamera, FaWifi, FaRegEye, FaUsers, FaRegLightbulb, FaLock } from "react-icons/fa";

const Feature = ({ title, icon, text }) => (
  <Stack align={"center"} textAlign="center">
    <Flex w={16} h={16} align={"center"} justify={"center"} color={"white"} rounded={"full"} bg={"brand.800"} mb={1}>
      {icon}
    </Flex>
    <Text fontWeight={600}>{title}</Text>
    <Text color={"gray.600"}>{text}</Text>
  </Stack>
);

const Index = () => {
  return (
    <Container maxW={"7xl"} p={8}>
      <Stack spacing={12}>
        <Stack spacing={2} align={"center"}>
          <Heading fontSize={"4xl"}>Evolve Caribbean</Heading>
          <Text fontSize={"xl"} color={"gray.600"}>
            Elevating event experiences with cutting-edge solutions
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={{ base: 5, md: 10 }}>
          // FaRfid icon has been removed as it was causing an import error
          <Feature icon={<Icon as={FaCamera} w={10} h={10} />} title="CCTV for Events" text="Comprehensive surveillance to ensure attendee safety." />
          <Feature icon={<Icon as={FaWifi} w={10} h={10} />} title="Wi-Fi Enhancements" text="Reliable internet connectivity for uninterrupted experiences." />
          <Feature icon={<Icon as={FaRegEye} w={10} h={10} />} title="Augmented Reality" text="Immersive AR experiences to engage and captivate attendees." />
          <Feature icon={<Icon as={FaUsers} w={10} h={10} />} title="Crowd Management" text="Effective solutions for managing and directing large crowds." />
          <Feature icon={<Icon as={FaRegLightbulb} w={10} h={10} />} title="Drone Light Shows" text="Mesmerizing aerial displays that light up the sky." />
        </SimpleGrid>

        <Divider my={12} opacity={0.6} />

        <Stack spacing={8}>
          <Heading fontSize={"2xl"} textAlign="center">
            Ensuring Seamless Security with Evolve Access Control
          </Heading>
          <Text color={"gray.500"} textAlign="center">
            Introducing a pivotal component of the Evoke Venue Intelligence (EVI) Platform
          </Text>

          <Box>
            <Heading fontSize={"xl"} mb={4}>
              Key Features of Evolve Access Control
            </Heading>
            <Stack spacing={6}>
              <Text as="li">
                <Icon as={FaLock} color={"teal.500"} mr={2} />
                Contactless Reader Portals for secure and efficient access management.
              </Text>
              <Text as="li">
                <Icon as={FaLock} color={"teal.500"} mr={2} />
                AI-Powered Authentication Assurance to verify each credential's authenticity.
              </Text>
              <Text as="li">
                <Icon as={FaLock} color={"teal.500"} mr={2} />
                Reduction of Human Errors through automated scanning and AI-driven authentication.
              </Text>
            </Stack>
          </Box>

          <Box>
            <Heading fontSize={"xl"} mb={4}>
              How Evolve Access Control Enhances Security
            </Heading>
            <Stack spacing={6}>
              <Text as="li">Multi-Layered Verification process with RFID, NFC, and QR Code technologies.</Text>
              <Text as="li">Real-Time Monitoring of access points for immediate insights and actions.</Text>
              <Text as="li">Seamless Integration into EVI Platform for a holistic security solution.</Text>
            </Stack>
          </Box>

          <Flex justify="center">
            <Button variant="outline" borderColor="brand.700" size="md">
              Learn More
            </Button>
          </Flex>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;

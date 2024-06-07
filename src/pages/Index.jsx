import { Container, Text, VStack, Box, Heading, HStack, Divider, Link } from "@chakra-ui/react";
import { FaDiscord } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, pink.500, purple.500, blue.500)" color="white" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          KittyBox.top
        </Heading>

        <Box width="100%" bg="white" color="black" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" mb={4}>
            Paslaugos
          </Heading>
          <VStack spacing={2} align="start">
            <Text>VIP - 1€</Text>
            <Text>VIP+ - 2€</Text>
            <Text>MVP - 3€</Text>
            <Text>MVP+ - 4€</Text>
            <Text>MVP++ - 5€</Text>
          </VStack>
        </Box>

        <Box width="100%" bg="white" color="black" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" mb={4}>
            Kitos Paslaugos
          </Heading>
          <VStack spacing={2} align="start">
            <Text>Unban - 1€</Text>
            <Text>Unmute - 0.50€</Text>
            <Text>/raktas - 2€</Text>
          </VStack>
        </Box>

        <Divider />

        <VStack spacing={2} align="center">
          <Text>Savininkas: Lenvx</Text>
          <Text>Website Kurejas: sorybas</Text>
          <HStack spacing={2}>
            <FaDiscord />
            <Link href="https://discord.gg/hb9VXJSC" isExternal>
              Serverio Discord
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;

import { Box, Heading, SimpleGrid } from '@chakra-ui/layout'

const UserProfile = () => {
  return (
    <Box maxW="full" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading as="h1" textAlign={'left'} size="xl" py={4}>
        Cambio de Password
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: 5, lg: 8 }}
      ></SimpleGrid>
    </Box>
  )
}

export default UserProfile

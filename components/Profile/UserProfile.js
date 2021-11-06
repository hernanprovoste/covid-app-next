import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout'
import FormProfile from './FormProfile'

const UserProfile = () => {
  return (
    <Flex minH={'100%'} align={'center'} justify={'center'}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Cambio de Contrase&ntilde;a</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <FormProfile />
        </Box>
      </Stack>
    </Flex>
  )
}

export default UserProfile

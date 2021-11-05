import { useColorModeValue } from '@chakra-ui/color-mode'
import { Box } from '@chakra-ui/layout'

const Layautsito = ({ children }) => {
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      {children}
    </Box>
  )
}

export default Layautsito

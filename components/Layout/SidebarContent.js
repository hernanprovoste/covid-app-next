import { CloseButton } from '@chakra-ui/close-button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { Img } from '@chakra-ui/image'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { FiHome, FiUser, FiUsers, FiFileText } from 'react-icons/fi'
import NavItem from './NavItem'

const LinkItems = [
  { name: 'Home', icon: FiHome, url: '/admin' },
  { name: 'Colaboradores', icon: FiUser, url: '/admin/workers' },
  { name: 'Declaraciones', icon: FiFileText, url: '/admin/declarations' },
  { name: 'Usuarios', icon: FiUsers, url: '/admin/users' }
]

const SidebarContent = ({ onClose, image, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <Img src={image} alt="Logo Logica Industrial" height="40px" />
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} url={link.url}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent

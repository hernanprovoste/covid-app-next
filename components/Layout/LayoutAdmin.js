import { useColorModeValue } from '@chakra-ui/color-mode'
import { useDisclosure } from '@chakra-ui/hooks'
import { Box } from '@chakra-ui/layout'
import { Drawer, DrawerContent } from '@chakra-ui/modal'
import MobileNav from './MovileNav'
import SidebarContent from './SidebarContent'

const LayoutAdmin = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  )
}

export default LayoutAdmin

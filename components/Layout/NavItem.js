import Link from 'next/link'
import Icon from '@chakra-ui/icon'
import { Flex } from '@chakra-ui/layout'

const NavItem = ({ icon, url, children, ...rest }) => {
  return (
    <Link href={url} style={{ textDecoration: 'none' }}>
      <a>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'brand.400',
            color: 'white'
          }}
          {...rest}
        >
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white'
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </a>
    </Link>
  )
}

export default NavItem

import { useRouter } from 'next/router'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { useToast } from '@chakra-ui/toast'
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Button
} from '@chakra-ui/react'
import SearchInput from '../UI/SearchInput'

const Users = (props) => {
  const router = useRouter()
  const toast = useToast()
  const { users } = props.data.users

  const handleNewUser = () => {
    router.push('./users/newuser')
  }

  const selectUser = (id) => {
    router.push(`./users/${id}`)
  }

  return (
    <Flex minH={'100%'} align={'center'} justify={'center'} width="full">
      <Stack spacing={8} width="full" py={4} px={2}>
        <Stack align={'left'}>
          <Heading fontSize={'4xl'}>Usuarios</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={4}
        >
          <SearchInput />
        </Box>
        <Stack align="flex-end" width="100%">
          <Button
            bg="brand.500"
            color="white"
            _hover={{ bg: 'brand.400' }}
            align="right"
            width={{ base: 'full', md: 'fit-content' }}
            onClick={handleNewUser}
          >
            Nuevo Usuario
          </Button>
        </Stack>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={4}
          overflowX="auto"
        >
          <Table variant="simple" size="sm">
            <TableCaption>
              Usuarios Administradores de la Aplicaci&oacute;n
            </TableCaption>
            <Thead>
              <Tr>
                <Th>Rut</Th>
                <Th>Nombres</Th>
                <Th>Apellido Paterno</Th>
                <Th>Apellido Materno</Th>
                <Th>Created At</Th>
                <Th>Created By</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user._id}>
                  <Td>{user.dni}</Td>
                  <Td>{user.name}</Td>
                  <Td>{user.last_name}</Td>
                  <Td>{user.second_last_name}</Td>
                  <Td>{user.created_at}</Td>
                  <Td>{user.created_by}</Td>
                  <Td>
                    <Button
                      onClick={() => selectUser(user.dni)}
                      mr={2}
                      bg={'brand.500'}
                      color="white"
                      _hover={{ bg: 'brand.400' }}
                    >
                      Editar
                    </Button>
                    <Button
                      bg={'danger.500'}
                      color="white"
                      _hover={{ bg: 'danger.400' }}
                    >
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Users

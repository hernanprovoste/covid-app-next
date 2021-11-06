import { useRouter } from 'next/router'
import { useColorModeValue } from '@chakra-ui/color-mode'
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

const Worker = () => {
  const router = useRouter()

  const handleWorker = () => {
    router.push('/admin/workers/newworker')
  }

  return (
    <Flex minH={'100%'} align={'center'} justify={'center'} width="full">
      <Stack spacing={8} width="full" py={4} px={2}>
        <Stack align={'left'}>
          <Heading fontSize={'4xl'}>Colaboradores</Heading>
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
            onClick={handleWorker}
          >
            Nuevo Colaborador
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
            <TableCaption>Colaboradores de la Planta</TableCaption>
            <Thead>
              <Tr>
                <Th>Rut</Th>
                <Th>Nombres</Th>
                <Th>Apellido Paterno</Th>
                <Th>Apellido Materno</Th>
                <Th>Created At</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>12345678-9</Td>
                <Td>John</Td>
                <Td>Doe</Td>
                <Td>Smith</Td>
                <Td>12/11/2021</Td>
                <Td>
                  <Button
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
              <Tr>
                <Td>12345678-9</Td>
                <Td>John</Td>
                <Td>Doe</Td>
                <Td>Smith</Td>
                <Td>12/11/2021</Td>
                <Td>
                  <Button
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
              <Tr>
                <Td>12345678-9</Td>
                <Td>John</Td>
                <Td>Doe</Td>
                <Td>Smith</Td>
                <Td>12/11/2021</Td>
                <Td>
                  <Button
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
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Worker

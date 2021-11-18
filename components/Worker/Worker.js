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

const Worker = (props) => {
  const router = useRouter()

  console.log(props.data)

  const { workers } = props.data.workers

  const handleWorker = () => {
    router.push('/admin/workers/newworker')
  }

  const selectWorkers = (id) => {
    router.push(`/admin/workers/${id}`)
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
                <Th>Created By</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              {workers?.map((worker) => (
                <Tr key={worker._id}>
                  <Td>{worker.dni}</Td>
                  <Td>{worker.name}</Td>
                  <Td>{worker.last_name}</Td>
                  <Td>{worker.second_last_name}</Td>
                  <Td>{worker.created_at}</Td>
                  <Td>{worker.created_by}</Td>
                  <Td>
                    <Button
                      onClick={() => selectWorkers(worker.dni)}
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

export default Worker

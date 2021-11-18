import { useRouter } from 'next/dist/client/router'
import { Button } from '@chakra-ui/button'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Stack
} from '@chakra-ui/layout'
import { useEffect, useState } from 'react'
import { useToast } from '@chakra-ui/toast'
import { useSession } from 'next-auth/client'

const initialState = {
  dni: '',
  name: '',
  last_name: '',
  second_last_name: '',
  email: '',
  address: '',
  phone: '',
  mobile: ''
}

const FormWorker = ({ typeForm, userId }) => {
  const [user, setUser] = useState(initialState)
  const router = useRouter()
  const toast = useToast()
  const [session, loading] = useSession()

  const handleCancel = () => {
    setUser({
      dni: '',
      name: '',
      last_name: '',
      second_last_name: '',
      email: '',
      address: '',
      phone: '',
      mobile: ''
    })
    router.push('/admin/workers')
  }

  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)

    if (typeForm === 'edit') {
      toast({
        title: 'Coming soon',
        description: 'Se editaran los cambios en la proxima release',
        status: 'info',
        duration: 9000,
        isClosable: true
      })
    }

    if (
      !user.dni ||
      !user.name ||
      !user.last_name ||
      !user.email ||
      !user.email.includes('@') ||
      !user.address
    ) {
      toast({
        title: 'Error',
        description: 'Datos ingresados no son válidos',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    } else {
      toast({
        title: 'Enviando datos',
        description: 'Ingresando datos a la base de datos',
        status: 'info',
        duration: 9000,
        isClosable: true
      })

      fetch('/api/admin/workers/newworker', {
        method: 'POST',
        body: JSON.stringify({
          dni: user.dni,
          name: user.name,
          last_name: user.last_name,
          second_last_name: user.second_last_name,
          email: user.email,
          address: user.address,
          phone: user.phone,
          mobile: user.mobile,
          created_by: session.user.email
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((res) => {
          if (res.ok) {
            return res.json()
          }

          res.json().then((data) => {
            toast({
              title: 'Error',
              description: data.message || 'Ha ocurrido un problema',
              status: 'error',
              duration: 9000,
              isClosable: true
            })
            return
            // throw new Error(data.message || 'Something went wrong!')
          })
        })
        .then((data) => {
          toast({
            title: 'Datos guardados',
            description: 'Datos guardados satisfactoriamente',
            status: 'success',
            duration: 9000,
            isClosable: true
          })
        })
        .catch((error) => {
          toast({
            title: 'Error',
            description: error.message || 'Ha ocurrido un problema',
            status: 'error',
            duration: 9000,
            isClosable: true
          })
        })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex minH={'100%'} align={'center'} justify={'center'} width="full">
        <Stack spacing={8} width="full" py={4} px={2}>
          <Stack align={'left'}>
            <Heading fontSize={'4xl'}>Nuevo Colaborador</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={4}
            overflowX="auto"
          >
            <SimpleGrid column={2} columnGap={3} rowGap={6} width="full">
              <GridItem colSpan={1}>
                <FormControl id="dni" isRequired>
                  <FormLabel>Rut</FormLabel>
                  <Input
                    placeholder="12345678-9"
                    name="dni"
                    value={user.dni || undefined}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl id="name" isRequired>
                  <FormLabel>Nombre</FormLabel>
                  <Input
                    placeholder="John"
                    name="name"
                    value={user.name || undefined}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl id="last_name" isRequired>
                  <FormLabel>Apellido Paterno</FormLabel>
                  <Input
                    placeholder="Doe"
                    name="last_name"
                    value={user.last_name || undefined}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl id="second_last_name">
                  <FormLabel>Apellido Materno</FormLabel>
                  <Input
                    placeholder="Smith"
                    name="second_last_name"
                    value={user.second_last_name || undefined}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="johndoesmith@email.com"
                    name="email"
                    type="email"
                    value={user.email || undefined}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl id="address" isRequired>
                  <FormLabel>Direcci&oacute;n</FormLabel>
                  <Input
                    placeholder="Doe"
                    name="address"
                    value={user.address || undefined}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl id="phone">
                  <FormLabel>Tel&eacute;fono Fijo</FormLabel>
                  <Input
                    placeholder="(63) 2123456"
                    name="phone"
                    value={user.phone || undefined}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl id="mobile">
                  <FormLabel>Tel&eacute;fono Movil</FormLabel>
                  <Input
                    placeholder="9 123 4567"
                    name="mobile"
                    value={user.mobile || undefined}
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <Button
                  bg="danger.500"
                  color="white"
                  _hover={{ bg: 'danger.400' }}
                  onClick={handleCancel}
                >
                  Cancelar
                </Button>
              </GridItem>
              <GridItem colSpan={1} align="right">
                <Button
                  bg="brand.500"
                  color="white"
                  _hover={{ bg: 'brand.400' }}
                  type="submit"
                >
                  {typeForm ? 'Editar' : 'Crear'} Colaborador
                </Button>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}

export default FormWorker

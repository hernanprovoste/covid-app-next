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
  password: '',
  repeat_password: ''
}

const FormUser = ({ typeForm, userId }) => {
  const [user, setUser] = useState(initialState)
  const router = useRouter()
  const toast = useToast()
  const [session, loading] = useSession()
  const [password, setPassword] = useState()

  // if (typeForm === 'edit') {
  //   useEffect(() => {
  //     setUser(userId.users)
  //     setPassword(user.password)
  //   }, [])
  // }

  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleCancel = () => {
    setUser({
      dni: '',
      name: '',
      last_name: '',
      second_last_name: '',
      email: '',
      password: '',
      repeat_password: ''
    })
    router.push('/admin/users')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(user)

    if (typeForm === 'edit') {
      toast({
        title: 'Coming soon',
        description: 'Se editaran los cambios en la proxima release',
        status: 'info',
        duration: 9000,
        isClosable: true
      })
    }

    if (user.password === user.repeat_password) {
      if (
        !user.dni ||
        !user.name ||
        !user.last_name ||
        !user.email ||
        !user.email.includes('@') ||
        !user.password ||
        !user.password.trim().length < 7
      ) {
        toast({
          title: 'Enviando datos',
          description: 'Ingresando datos a la base de datos',
          status: 'info',
          duration: 9000,
          isClosable: true
        })

        fetch('/api/admin/users/newuser', {
          method: 'POST',
          body: JSON.stringify({
            dni: user.dni,
            name: user.name,
            last_name: user.last_name,
            second_last_name: user.second_last_name,
            email: user.email,
            password: user.password,
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
      } else {
        toast({
          title: 'Error',
          description:
            'Datos ingresados no son válidos, la contraseña debe tener mínimo 7 caracteres.',
          status: 'error',
          duration: 9000,
          isClosable: true
        })
      }
    } else {
      toast({
        title: 'Error',
        description: 'Las constraseñas no coinciden.',
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex minH={'100%'} align={'center'} justify={'center'} width="full">
        <Stack spacing={8} width="full" py={4} px={2}>
          <Stack align={'left'}>
            <Heading fontSize={'4xl'}>
              {typeForm ? 'Editar' : 'Nuevo'} Usuario
            </Heading>
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
              <GridItem colSpan={1}>
                <FormControl id="password" isRequired={typeForm ? false : true}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={handleInput}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl
                  id="repeat_password"
                  isRequired={typeForm ? false : true}
                >
                  <FormLabel>Repetir Password</FormLabel>
                  <Input
                    placeholder="Repeat Password"
                    type="password"
                    name="repeat_password"
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
                  {typeForm ? 'Editar' : 'Crear'} Usuario
                </Button>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}

export default FormUser

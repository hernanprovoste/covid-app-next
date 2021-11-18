import Link from 'next/link'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'

const initialState = {
  email: '',
  password: ''
}

const Login = () => {
  const [login, setLogin] = useState(initialState)
  const [isLogin, setIsLogin] = useState(true)
  const router = useRouter()

  const handlerChange = (e) => {
    const { name, value } = e.target
    setLogin({ ...login, [name]: value })
  }

  const submitHandle = async (e) => {
    e.preventDefault()

    // optional: Add validation

    if (isLogin) {
      // log user in
      const result = await signIn('credentials', {
        redirect: false,
        email: login.email,
        password: login.password
      })

      if (!result.error) {
        // set some auth state
        router.replace('/admin/')
      }
    } else {
      console.log('Error login')
    }
  }

  return (
    <form onSubmit={submitHandle}>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Ingresar al sistema</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              de trazabilidad Covid ⚡⚡⚡ Logica Industrial ⚡⚡⚡
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" onChange={handlerChange} name="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={handlerChange}
                  name="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}
                >
                  <Checkbox colorScheme="brand">Recordarme</Checkbox>
                </Stack>
                <Button
                  bg={'brand.500'}
                  color={'white'}
                  _hover={{
                    bg: 'brand.400'
                  }}
                  type="submit"
                >
                  Ingresar
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  )
}

export default Login

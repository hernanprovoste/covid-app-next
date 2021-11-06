import { Button } from '@chakra-ui/button'
import { FormControl, FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'

const FormProfile = () => {
  return (
    <form>
      <Stack spacing={4}>
        <FormControl id="oldPassword">
          <FormLabel>Password Antiguo</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl id="newPassword">
          <FormLabel>Nuevo Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <FormControl id="repeatNewPassword">
          <FormLabel>Repita su nuevo Password</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={10}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            align={'start'}
            justify={'space-between'}
          >
            <Button
              bg={'danger.500'}
              color={'white'}
              _hover={{
                bg: 'danger.600'
              }}
            >
              Cancelar
            </Button>
            <Button
              bg={'brand.500'}
              color={'white'}
              _hover={{
                bg: 'brand.400'
              }}
            >
              Ingresar
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </form>
  )
}

export default FormProfile

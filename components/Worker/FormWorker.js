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

const FormWorker = () => {
  return (
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
              <FormControl>
                <FormLabel>Rut</FormLabel>
                <Input placeholder="12345678-9" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input placeholder="John" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Apellido Paterno</FormLabel>
                <Input placeholder="Doe" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Apellido Materno</FormLabel>
                <Input placeholder="Smith" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input placeholder="johndoesmith@email.com" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Direcci&oacute;n</FormLabel>
                <Input placeholder="Doe" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Tel&eacute;fono Fijo</FormLabel>
                <Input placeholder="(63) 2123456" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Tel&eacute;fono Movil</FormLabel>
                <Input placeholder="9 123 4567" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <Button
                bg="danger.500"
                color="white"
                _hover={{ bg: 'danger.400' }}
              >
                Cancelar
              </Button>
            </GridItem>
            <GridItem colSpan={1} align="right">
              <Button bg="brand.500" color="white" _hover={{ bg: 'brand.400' }}>
                Crear Usuario
              </Button>
            </GridItem>
          </SimpleGrid>
        </Box>
      </Stack>
    </Flex>
  )
}

export default FormWorker

import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Box, Flex, Heading, Stack, Text } from '@chakra-ui/layout'
import { FiCheck, FiX } from 'react-icons/fi'

const DeclarationsDetailsAndPDF = (props) => {
  const { dni, name, last_name } = props.data.worker.workers
  const date = new Date().toUTCString()

  const createPDF = () => {}
  return (
    <Flex justify="center">
      <Box
        maxWidth="770px"
        p="20px"
        borderRadius="20"
        boxShadow="base"
        mt="30px"
        mb="30px"
        bgColor="white"
      >
        <Stack spacing={4}>
          <Image
            width="200px"
            src="/logicaLogo.svg"
            alt="Logica Logo"
            margin="0 auto"
          />
          <>
            <Text fontSize="lg" variant="h3" align="center">
              Gracias por enviar tu declaración jurada
              <Text
                fontSize="lg"
                fontWeight="bold"
              >{`${name} ${last_name} ${dni}`}</Text>{' '}
              y fecha
              <Text fontSize="lg" fontWeight="bold">
                {date}
              </Text>
            </Text>
            <Box w="100%" bg="success.500" p={6} borderRadius={10}>
              <Stack spacing={4} flexDirection="column" alignItems="center">
                <FiCheck color="success.900" fontSize={40} />
                <Text fontSize="30px" align="center" fontWeight="bold">
                  Ya puedes acceder a la planta, ¡Que tengas una buena jornada!
                </Text>
                <Button onClick={createPDF}>Descargar Certificado</Button>
              </Stack>
            </Box>
          </>

          <>
            <Text fontSize="lg" variant="h3" align="center">
              Gracias por enviar tu declaración jurada{' '}
              <Text
                fontSize="lg"
                fontWeight="bold"
              >{`${name} ${last_name} ${dni}`}</Text>{' '}
              y fecha
              <Text fontSize="lg" fontWeight="bold">
                {date}
              </Text>
            </Text>
            <Box w="100%" bg="danger.500" p={6} borderRadius={10}>
              <Stack spacing={4} flexDirection="column" alignItems="center">
                <FiX color="success.900" fontSize={40} />
                <Text fontSize="30px" align="center" fontWeight="bold">
                  No puedes ingresar a la planta, por favor llama al +569 1234
                  5678
                </Text>
              </Stack>
            </Box>
          </>

          <Text fontSize="xl" variant="h2" align="center">
            No se ha encontrado rut en nuestro sistema.
          </Text>
          <Box w="100%" mb="10px">
            <Stack spacing={4}>
              <Image
                width="100px"
                src="/logicaLogo.svg"
                alt="Logo Logica Industrial"
                margin="0 auto"
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Flex>
  )
}

export default DeclarationsDetailsAndPDF

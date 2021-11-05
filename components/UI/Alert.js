import { AlertIcon } from '@chakra-ui/alert'
import { AlertTitle } from '@chakra-ui/alert'
import { Alert } from '@chakra-ui/alert'

const CardAlertCovid = () => {
  return (
    <Alert status="error">
      <AlertIcon />
      <AlertTitle mr={2}>LLAME DE INMEDIATO AL: +569 1234 5678</AlertTitle>
    </Alert>
  )
}

export default CardAlertCovid

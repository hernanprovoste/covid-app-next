import { useState } from 'react'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import { Input } from '@chakra-ui/input'
import { Box, Flex, Heading, Stack } from '@chakra-ui/layout'
import { NumberInput } from '@chakra-ui/number-input'
import { NumberInputField } from '@chakra-ui/number-input'
import { Radio, RadioGroup } from '@chakra-ui/radio'
import { Checkbox } from '@chakra-ui/checkbox'
import CardAlertCovid from '../UI/Alert'
import { FormControl, FormLabel } from '@chakra-ui/form-control'

const initialState = {
  dni: '',
  cellphone: '',
  physicalFeeling: '',
  symptoms: '',
  symptomsChecked: [
    { id: 1, checked: false, name: 'Tos' },
    {
      id: 2,
      checked: false,
      name: 'Dificultad respiratoria, dolor torácico'
    },
    {
      id: 3,
      checked: false,
      name: 'Dolor de garganta al tragar líquidos o alimentos'
    },
    { id: 4, checked: false, name: 'Dolor de cabeza (Cefalea)' },
    { id: 5, checked: false, name: 'Diarrea' },
    { id: 6, checked: false, name: 'Dolor muscular (Mialgias)' },
    {
      id: 7,
      checked: false,
      name: 'Sólo presento el síntoma ya seleccionado'
    }
  ],
  physicalContact: '',
  created_at: new Date().toLocaleString('es-ES')
}

const FormsCovid = () => {
  const [workerSymptoms, setWorkerSymptoms] = useState(initialState)
  const { symptomsChecked } = workerSymptoms

  const handleChangeInputs = (e) => {
    const { name, value } = e.target
    setWorkerSymptoms({ ...workerSymptoms, [name]: value })
  }

  const handleCheckedElement = (e) => {
    const { symptomsChecked } = workerSymptoms
    symptomsChecked.forEach((symptom) => {
      if (symptom.name === e.target.value) symptom.checked = e.target.checked
    })
    setWorkerSymptoms({ ...workerSymptoms, symptomsChecked })
  }

  const handleRadioButtons = (e) => {
    const { name, value } = e.target
    setWorkerSymptoms({ ...workerSymptoms, [name]: value })
  }

  const registrationForm = (e) => {
    e.preventDefault()
    console.log(workerSymptoms)
  }

  return (
    <form onSubmit={registrationForm}>
      <Flex justifyContent="center">
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
            <Box w="100%" mb="10px">
              <Stack spacing={4}>
                <Image
                  width="200px"
                  src="./logicaLogo.svg"
                  alt="Logo Logica Industrial"
                  margin="0 auto"
                />
                <Heading as="h1" size="lg" textAlign="center">
                  Formulario Covid Logica Industrial
                </Heading>
              </Stack>
            </Box>
            <Box w="100%">
              <Stack spacing={4}>
                <FormControl id="dni" isRequired>
                  <FormLabel fontSize="20px" fontWeight="bold">
                    Ingrese Rut (Ej: 2333444-k)
                  </FormLabel>
                  <Input
                    name="dni"
                    placeholder="Ingrese Rut"
                    size="md"
                    onChange={handleChangeInputs}
                    pattern="^[0-9]+-[0-9kK]{1}$"
                    title="El rut debe contener el guión"
                    variant="flushed"
                  />
                </FormControl>
              </Stack>
            </Box>
            <Box w="100%">
              <Stack spacing={4}>
                <FormControl id="cellphone" isRequired>
                  <FormLabel fontSize="20px" fontWeight="bold">
                    Número de contacto +569:
                  </FormLabel>
                  <NumberInput variant="flushed">
                    <NumberInputField
                      name="cellphone"
                      placeholder="Ingrese Celular"
                      size="md"
                      type="tel"
                      onChange={handleChangeInputs}
                    />
                  </NumberInput>
                </FormControl>
              </Stack>
            </Box>
            <Box w="100%">
              <Stack spacing={4}>
                <FormControl id="physicalFeeling" isRequired>
                  <FormLabel fontSize="20px" fontWeight="bold">
                    ¿Cómo te sientes físicamente hoy?
                  </FormLabel>
                  <RadioGroup name="physicalFeeling" defaultValue="bien">
                    <Stack direction="column">
                      <Radio
                        value="bien"
                        id="bien"
                        onChange={handleRadioButtons}
                        colorScheme="brand"
                      >
                        Bien
                      </Radio>
                      <Radio
                        value="molestias"
                        id="molestias"
                        onChange={handleRadioButtons}
                        colorScheme="brand"
                      >
                        Tengo algunas molestias físicas
                      </Radio>
                      <Radio
                        value="mal"
                        id="mal"
                        onChange={handleRadioButtons}
                        colorScheme="brand"
                      >
                        Mal
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Box>
            <Box w="100%">
              <Stack spacing={4}>
                <FormControl id="symptoms" isRequired>
                  <FormLabel fontSize="20px" fontWeight="bold">
                    Seleccione el síntoma según corresponda, si presenta 1 de
                    estos síntomas comunicar al: +569 1234 5678
                  </FormLabel>
                  <RadioGroup name="symptoms" defaultValue="fiebre">
                    <Stack direction="column">
                      <Radio
                        value="fiebre"
                        onChange={handleRadioButtons}
                        colorScheme="brand"
                        id="fiebre"
                      >
                        Fiebre (Temperatura superior a 37,8°C) y/o pérdida
                        brusca del gusto u olfato
                      </Radio>
                      <Radio
                        value="otro"
                        id="otro"
                        onChange={handleRadioButtons}
                        colorScheme="brand"
                      >
                        Otro
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Box>
            <CardAlertCovid />
            <CardAlertCovid />
            <Box w="100%">
              <FormControl id="symptomsChecked">
                <FormLabel fontSize="20px" fontWeight="bold">
                  Seleccione según corresponda, si presenta 2 o más de estos
                  síntomas comunicar al: +569 1234 5678
                </FormLabel>
                <Stack spacing={4}>
                  {symptomsChecked.map((item) => (
                    <Checkbox
                      key={item.id}
                      value={item.name}
                      name={item.name}
                      checked={item.checked}
                      onChange={handleCheckedElement}
                      colorScheme="brand"
                    >
                      {item.name}
                    </Checkbox>
                  ))}
                </Stack>
              </FormControl>
            </Box>
            <CardAlertCovid />
            <Box w="100%">
              <Stack spacing={4}>
                <FormControl id="physicalContact" isRequired>
                  <FormLabel fontSize="20px" fontWeight="bold">
                    ¿Estuvo en contacto estrecho con un caso confirmado? Si su
                    respuesta es Sí, llamar: +569 1234 5678
                  </FormLabel>
                  <RadioGroup name="physicalContact" defaultValue="si">
                    <Stack direction="column">
                      <Radio
                        value="si"
                        id="si"
                        onChange={handleRadioButtons}
                        required
                        colorScheme="brand"
                      >
                        Si
                      </Radio>
                      <Radio
                        value="no"
                        id="no"
                        onChange={handleRadioButtons}
                        required
                        colorScheme="brand"
                      >
                        No
                      </Radio>
                    </Stack>
                  </RadioGroup>
                </FormControl>
              </Stack>
            </Box>
            <Box w="100%">
              <Button type="submit" size="md" colorScheme="brand" isFullWidth>
                Enviar
              </Button>
            </Box>
            <Box w="100%" mb="10px">
              <Stack spacing={4}>
                <Image
                  width="100px"
                  src="./logicaLogo.svg"
                  alt="Logo Logica Industrial"
                  margin="0 auto"
                />
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </form>
  )
}

export default FormsCovid

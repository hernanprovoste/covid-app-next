import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { FiSearch } from 'react-icons/fi'

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        my="auto"
        height="100%"
        children={<FiSearch color="gray" fontSize="20px" />}
      />
      <Input placeholder="Buscar Usuario" size="lg" />
    </InputGroup>
  )
}

export default SearchInput

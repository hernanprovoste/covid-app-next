import { Box, Heading, SimpleGrid } from '@chakra-ui/layout'
import StatsCard from '../UI/StatsCard'
import { FiFileText, FiUsers, FiUser } from 'react-icons/fi'

const Dashboard = () => {
  return (
    <Box maxW="full" mx={'auto'} px={{ base: 2, sm: 12, md: 17 }}>
      <Heading as="h1" textAlign={'left'} size="xl" py={4}>
        Dashboard
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={'Usuarios'}
          stat={'5,000'}
          icon={<FiUsers size={'3em'} />}
        />
        <StatsCard
          title={'Declaraciones'}
          stat={'1,000'}
          icon={<FiFileText size={'3em'} />}
        />
        <StatsCard
          title={'Colaboradores'}
          stat={'4,000'}
          icon={<FiUser size={'3em'} />}
        />
      </SimpleGrid>
    </Box>
  )
}

export default Dashboard

import { Box, Flex } from '@chakra-ui/layout'
import { Stat, StatLabel, StatNumber } from '@chakra-ui/stat'

const StatsCard = ({ title, stat, icon }) => {
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      bg="brand.400"
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} color="white" isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} color="white" fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color="white"
          alignContent={'center'}
          pr={{ base: 2, md: 4 }}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  )
}

export default StatsCard

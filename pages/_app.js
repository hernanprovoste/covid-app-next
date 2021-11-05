import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  )
}

export default MyApp

import { ChakraProvider } from '@chakra-ui/react'
import DefaultLayout from '../components/Layout/DefaultLayout'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page)
  const Layout = Component.Layout || DefaultLayout

  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp

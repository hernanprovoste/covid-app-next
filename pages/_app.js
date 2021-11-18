import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'next-auth/client'
import DefaultLayout from '../components/Layout/DefaultLayout'
import theme from '../styles/theme'

const MyApp = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  // const getLayout = Component.getLayout || ((page) => page)
  const Layout = Component.Layout || DefaultLayout

  return (
    <>
      <ChakraProvider theme={theme}>
        <Provider session={pageProps.session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </ChakraProvider>
    </>
  )
}

export default MyApp

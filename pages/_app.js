import '../styles/index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import Layout from '../components/layout'

const theme = extendTheme({
  styles: {
    global: (props) => ({
      "html, body": {
        fontSize: ["sm", "md"],
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "green.600" : "blue.600",
        fontWeight: "bold",
      },
    }),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp

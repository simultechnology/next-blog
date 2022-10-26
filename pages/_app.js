import '../styles/globals.css'
import Layout from "@/components/layout";
import 'styles/sample.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

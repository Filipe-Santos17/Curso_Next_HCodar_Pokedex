import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout className="p-0 m-0 box-border">
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp

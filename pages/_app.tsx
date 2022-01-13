import '../styles/globals.scss'
import '../styles/components/navbar.scss'
import '../styles/contacts.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
  </>
}

export default MyApp

/** @jsxImportSource @emotion/react */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { Dark } from '../components/helper/Dark'
import { useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  
  const [darkMode, setDarkMode] = useState(true);

  return(
    <Dark.Provider value={{darkMode, setDarkMode}}>
    <Layout>
     <Component {...pageProps} />
    </Layout >
    </Dark.Provider>
  )
}

export default MyApp

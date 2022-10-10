/** @jsxImportSource @emotion/react */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { Dark } from '../components/helper/Dark'
import { ActivePage } from '../components/helper/ActivePage'
import { useEffect, useState } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  
  const [darkMode, setDarkMode] = useState(true);
  const [active, setActive] = useState('');

  return(
      <ActivePage.Provider value={{active, setActive}}>
      <Dark.Provider value={{darkMode, setDarkMode}}>
        <Layout>
         <Component {...pageProps} />
        </Layout >
      </Dark.Provider>
      </ActivePage.Provider>
  )
}

export default MyApp

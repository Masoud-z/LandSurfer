/** @jsxImportSource @emotion/react */
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { Dark } from '../components/helper/Dark'
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }: AppProps) {

  // useEffect(()=>{
    
  //   fetch(`https://countryapi.io/api/all`)
  //   .then(res => res.json())
  //   .then(data =>{ console.log(data);
  //     console.log('all');
      
  //   });
  // })
  
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

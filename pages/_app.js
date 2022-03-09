import '../styles/globals.css'
import {ThemeProvider } from  'next-themes'
import { SessionProvider } from "next-auth/react"

function App({ Component, 
  pageProps:{session, ...pageProps},


}) {
  return (
  <SessionProvider session={pageProps.session}>
  <Component {...pageProps} />
  </SessionProvider>
  
  )
}

export default App

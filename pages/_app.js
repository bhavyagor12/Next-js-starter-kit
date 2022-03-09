import '../styles/globals.css'
import {ThemeProvider } from  'next-themes'
import { SessionProvider } from "next-auth/react"

function App({ Component, 
  pageProps:{session, ...pageProps},


}) {
  return (
  <SessionProvider session={pageProps.session}>
    <ThemeProvider enableSystem={true} attribute="class">
  <Component {...pageProps} />
  </ThemeProvider>

  </SessionProvider>
  
  )
}

export default App

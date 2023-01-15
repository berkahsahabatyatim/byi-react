import { Html, Head, Main, NextScript } from 'next/document'
import Header from "../src/component/Header"

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Header/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
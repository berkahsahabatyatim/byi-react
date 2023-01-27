import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../src/component/Header'

export default function Document() {
  return (
    <Html>
      <Head />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <body>
        <Header/>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
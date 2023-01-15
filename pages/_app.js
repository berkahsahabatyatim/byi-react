import ErrorBoundary from '../src/component/ErrorBoundary'
import './lagacy/css/styless.css'
import './notfound/Notfound.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary> <Component {...pageProps} /></ErrorBoundary>
  )
}
import ErrorBoundary from '../src/component/ErrorBoundary'
import '../src/styles/lagacy.css'
import '../src/styles/not-found.css'
import '../src/styles/sizes.css'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }) {
  return (<>
    <Script src="https://code.jquery.com/jquery-3.1.1.min.js" strategy='beforeInteractive' />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" />
    <ErrorBoundary> <Component {...pageProps} /></ErrorBoundary>
  </>
  )
}
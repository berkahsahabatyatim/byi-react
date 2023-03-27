import ErrorBoundary from '../src/component/ErrorBoundary'
import '../src/styles/lagacy.css'
import '../src/styles/not-found.css'
import '../src/styles/event-driven.css'
import '../src/styles/sizes.css'
import Script from 'next/script'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }) {

  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("mainNav").style.top = "0";
      } else {
        document.getElementById("mainNav").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }
  }, [])

  return (<>
    <Script src="https://code.jquery.com/jquery-3.1.1.min.js" strategy='beforeInteractive' />
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PLDNBMKCX5"></Script>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-PLDNBMKCX5');
      `}
    </Script>
    <ErrorBoundary> <Component {...pageProps} /></ErrorBoundary>
  </>
  )
}
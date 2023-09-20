import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {

   useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCB_4Fr-SsYJBIE7Yc0R7L0Z_I9M6xkc_0&libraries=places`;
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return <Component {...pageProps} />
}

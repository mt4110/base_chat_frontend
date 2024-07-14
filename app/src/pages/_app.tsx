import { AppProps } from 'next/app';
import '@styles/index.css'; // Global styles

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

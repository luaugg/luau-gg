import { AppProps } from 'next/app'

function Portfolio({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default Portfolio
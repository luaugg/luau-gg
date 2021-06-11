import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function DefaultApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-gray-100 h-screen">
            <Head>
                <title>sam's portfolio</title>
                <link rel="shortcut icon" href="./favicon.ico" />
            </Head>

            <div className="flex space-x-8 pl-5 h-14 w-screen bg-white shadow-md">
                <img className="flex-initial my-auto rounded-full w-10 h-10" src="avatar.jpg" />
                
                <div className="relative flex-initial my-auto font-sans font-semibold text-gray-600">
                    About Me
                    <div className="absolute inset-x-0 top-6 w-17 h-0.5 rounded-full bg-gray-600" />
                </div>

                <div className="relative flex-initial my-auto font-sans font-semibold text-gray-600">
                    Projects
                </div>

                <div className="relative flex-initial my-auto font-sans font-semibold text-gray-600">
                    Links
                </div>
            </div>

            <Component {...pageProps} />
        </div>
    )
}
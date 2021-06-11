import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function DefaultApp({ Component, pageProps }: AppProps) {
    return (
        <div className="bg-gray-100 h-screen">
            <Head>
                <title>sam's portfolio</title>
                <link rel="shortcut icon" href="./favicon.ico" />
            </Head>

            <div className="flex space-x-8 pl-5 pr-5 h-14 w-screen bg-white shadow-md">
                <img className="flex-initial my-auto rounded-full w-10 h-10" src="avatar.jpg" />
                
                <a className="flex-inital my-auto font-sans font-semibold text-gray-600 hover:text-red-500" href="/">About Me</a>

                <a className="flex-inital my-auto font-sans font-semibold text-gray-600 hover:text-red-500" href="/projects">Projects</a>

                <div className="flex-initial flex-grow" />

                <a className="flex-initial my-auto" href="https://discord.gg/UbXkbrXxT7">
                    <img className="w-9 h-9" src="discord.png" />
                </a>

                <a className="flex-initial my-auto" href="https://twitter.com/luauOW">
                    <img className="w-8 h-7" src="twitter.png" />
                </a>
            </div>

            <Component {...pageProps} />
        </div>
    )
}
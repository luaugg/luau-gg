import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function DefaultApp({ Component, pageProps }: AppProps) {
    return (
        <div className="flex flex-col space-y-4 bg-gray-100 w-auto md:w-screen h-auto md:h-screen">
            <Head>
                <title>sam's portfolio</title>
                <link rel="shortcut icon" href="./favicon.ico" />
                <meta property="og:title" content="sam 🍒's portfolio" />
                <meta property="og:description" content="y'know when kittens knead blankets? that's the vibe i wanna hold forever ☕" />
                <meta property="og:image" content="https://i.imgur.com/1ktox2r.png" />
                <meta name="theme-color" content="#DFB69A"></meta>
            </Head>

            <div className="flex space-x-8 pl-5 pr-5 h-14 w-screen bg-white shadow-md">
                <img className="flex-initial my-auto rounded-full w-7 h-7" src="avatar.jpg" />
                
                <a className="flex-initial my-auto font-sans font-semibold text-gray-600 hover:text-red-500" href="/">About Me</a>

                <div className="flex-auto flex-grow" />

                <a className="flex-initial my-auto" href="https://discord.gg/UbXkbrXxT7">
                    <img className="w-8 h-8" src="discord.png" />
                </a>

                <a className="flex-initial my-auto" href="https://twitter.com/luauOW">
                    <img className="w-7 h-6" src="twitter.png" />
                </a>

                <a className="flex-initial my-auto" href="https://twitch.tv/luau_ow">
                    <img className="w-7 h-7" src="twitch.png" />
                </a>
            </div>

            <a href="https://github.com/SamOphis/luau-gg" className="order-last mx-auto mb-10 text-gray-600 text-smfont-normal">Made with a bunch of 💝</a>

            <Component {...pageProps} />
        </div>
    )
}

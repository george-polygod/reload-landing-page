import {Inter} from 'next/font/google'
import './globals.css'
import localFont from "next/font/local";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}
const rem = localFont({
    src: [
        {
            path: '../../public/assets/fonts/rem/REM-Bold.ttf',
            weight: '600',
            style: 'normal',
        }
    ],
})
export default function RootLayout({children}) {
    return (
        <html data-wf-page="0" lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title> Reload Games</title>
            <link rel="icon" type="image/x-icon" href="/assets/images/logo.png"></link>

            <meta content="Reload | Reload Games" property="og:title"/>
            <meta
                content="Reload the future of gaming, embark on unprecedented adventures in our flagship games Sacred Tails and Instinct."
                property="og:description"
            />
            <meta content="Reload" property="twitter:title"/>
            <meta
                content="Reload the future of gaming, embark on unprecedented adventures in our flagship games Sacred Tails and Instinct."
                property="twitter:description"
            />
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <meta
                content="Reload the future of gaming, embark on unprecedented adventures in our flagship games Sacred Tails and Instinct."
                name="description"
            />
            <meta content="/images/page.png" property="twitter:image"/>
            <meta property="og:type" content="website"/>
            <meta content="summary_large_image" name="twitter:card"/>
            <meta content="Webflow" name="generator"/>
        </head>
        <body className={rem.className}>{children}</body>
        </html>
    )
}

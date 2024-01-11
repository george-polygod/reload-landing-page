import {Inter} from 'next/font/google'
import './globals.css'
import localFont from "next/font/local";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Reload Game',
    description: 'Reload Games: Unleashing the Future of Gaming - Discover our innovative ecosystem of blockchain-powered games and our dynamic NFT marketplace. Experience gaming redefined at Reload.Games!',
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
        <html lang="en">
        <body className={rem.className}>{children}</body>
        </html>
    )
}

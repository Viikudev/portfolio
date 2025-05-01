import Head from "next/head"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Viku's Portfolio",
  description: "My personal portfolio",
  icons: {
    icon: "/icon.jpg", // /public path
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <title>{`Viku's Portfolio`}</title>
      <meta name='description' content='This is the personal website of Viku' />

      <meta property='og:url' content='https://www.viku.dev/' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content="Viku's Portfolio" />
      <meta
        property='og:description'
        content='This is the personal website of Viku'
      />
      <meta property='og:image' content='@/public/image-preview.png' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta property='twitter:domain' content='viku.dev' />
      <meta property='twitter:url' content='https://www.viku.dev/' />
      <meta name='twitter:title' content="Viku's Portfolio" />
      <meta
        name='twitter:description'
        content='This is the personal website of Viku'
      />
      <meta name='twitter:image' content='@/public/image-preview.png' />

      <body className={rubik.className}>{children}</body>
    </html>
  )
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import localFont from 'next/font/local'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { Inter } from 'next/font/google'
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'

})

const circularStd = localFont({
  src: [{
    path: './fonts/CircularStd-Bold.woff2',
    weight: 'bold',
    style: 'normal'
  }],
  variable: '--font-circular-std'
})


export const metadata: Metadata = {
  title: "Travelog",
  description: "A melhor maneira de viajar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.variable} ${circularStd.variable} font-sans relative  overflow-x-hidden`}
      >
        <Header></Header>

        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

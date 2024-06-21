import React from 'react'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import {Inter, Space_Grotesk} from 'next/font/google'
import { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '@/context/ThemeProvider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
})

const SpaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700' ],
  variable: '--font-spaceGrotesk'
})


export const metadata: Metadata = {
  title: "Uplift Universe",
  description: "Welcome to Uplift Universe! 🌟 Your daily dose of inspiration, motivation, and self-discovery.We're on a mission to illuminate your journey with uplifting stories, thought-provoking animations, and practical wisdom for personal growth. 🌈",
  icons: {
    icon: "/uu-logo.svg"
  }
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider appearance={{
      elements: {
        formButtonPrimary: 'primary-gradient',
        footerActionLink:' primary-text-gradient hover:text-primary-500',
      }
    }
    }>
      <html lang="en">
        <body className={`${inter.variable} ${SpaceGrotesk.variable}`}>
          <ThemeProvider>    
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
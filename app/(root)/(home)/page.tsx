import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import React from 'react'
import { useTheme } from '@/context/ThemeProvider'

function Home() {
  return (
    <>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </>
    
  )
}

export default Home
"use client"

import React, {createContext, useContext, useState, useEffect} from "react"

interface ThemeContextType {
  mode: string
  setMode: (value: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [mode, setMode] = useState("")

  const handleThemeChange = () => {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    const localTheme = localStorage.theme
    localTheme ? setMode(localTheme) : setMode("system")
  }, [])

  useEffect(() => {
    handleThemeChange()
  }, [mode])
  
  return <ThemeContext.Provider value={{ mode, setMode }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
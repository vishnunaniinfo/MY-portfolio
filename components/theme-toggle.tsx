"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Monitor } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem("theme", theme)
  }, [theme])

  const cycleTheme = () => {
    const themes: ("light" | "dark" | "system")[] = ["light", "dark", "system"]
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />
      case "dark":
        return <Moon className="w-5 h-5" />
      case "system":
        return <Monitor className="w-5 h-5" />
    }
  }

  return (
    <Button
      onClick={cycleTheme}
      variant="outline"
      size="sm"
      className="border-2 border-primary/30 hover:border-primary/50 bg-background/80 backdrop-blur-sm"
    >
      {getIcon()}
      <span className="ml-2 capitalize">{theme}</span>
    </Button>
  )
}

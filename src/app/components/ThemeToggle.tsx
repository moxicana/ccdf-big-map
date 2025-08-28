'use client'

import { useTheme } from '../contexts/ThemeContext'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5 text-foreground" />
      ) : (
        <SunIcon className="w-5 h-5 text-foreground" />
      )}
    </button>
  )
}
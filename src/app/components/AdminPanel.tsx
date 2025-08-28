'use client'

import { useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { 
  CogIcon, 
  XMarkIcon,
  SunIcon,
  MoonIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

export function AdminPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const themes = [
    { 
      id: 'light', 
      name: 'Light', 
      icon: SunIcon,
      preview: 'bg-white text-gray-900 border-gray-200'
    },
    { 
      id: 'dark', 
      name: 'Dark', 
      icon: MoonIcon,
      preview: 'bg-gray-900 text-white border-gray-700'
    },
    { 
      id: 'retro', 
      name: 'Synthwave', 
      icon: SparklesIcon,
      preview: 'bg-purple-900 text-pink-400 border-pink-500'
    }
  ]

  return (
    <>
      {/* Admin Panel Toggle */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Open admin panel"
      >
        <CogIcon className="w-6 h-6" />
      </button>

      {/* Admin Panel Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-xl max-w-md w-full border border-border shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="text-xl font-bold text-card-foreground font-serif">Admin Panel</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-card-foreground transition-colors"
                aria-label="Close admin panel"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-card-foreground mb-4 font-serif">Site Theme</h3>
                <div className="space-y-3">
                  {themes.map((themeOption) => {
                    const IconComponent = themeOption.icon
                    return (
                      <button
                        key={themeOption.id}
                        onClick={() => setTheme(themeOption.id as 'light' | 'dark' | 'retro')}
                        className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-all ${
                          theme === themeOption.id
                            ? 'border-primary bg-primary/10'
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        <IconComponent className="w-5 h-5 text-card-foreground" />
                        <div className="flex-1 text-left">
                          <div className="font-medium text-card-foreground">{themeOption.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {themeOption.id === 'light' && 'Clean and bright interface'}
                            {themeOption.id === 'dark' && 'Easy on the eyes'}
                            {themeOption.id === 'retro' && '80s neon synthwave vibes'}
                          </div>
                        </div>
                        <div className={`w-8 h-8 rounded border-2 ${themeOption.preview}`} />
                      </button>
                    )
                  })}
                </div>
              </div>
              
              <div className="flex gap-3">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex-1 bg-secondary text-secondary-foreground py-2 px-4 rounded-lg hover:opacity-90 transition-colors font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
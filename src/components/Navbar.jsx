'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Globe } from 'lucide-react'
import Image from 'next/image'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [language, setLanguage] = useState('es')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const languages = {
    es: 'Español',
    en: 'English',
    pt: 'Português'
  }

  return (
    <nav className="flex items-center justify-between p-2 bg-zinc-900 text-black" >
      <div className="flex items-center space-x-4">
        <span className="text-xl font-bold"></span>
      </div>
      
      <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>

        {/* Language selector */}
        <div className="relative" onMouseEnter={() => setIsLanguageMenuOpen(true)} onMouseLeave={() => setIsLanguageMenuOpen(false)}>
          <button 
            className="flex items-center space-x-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
            aria-haspopup="true"
            aria-expanded={isLanguageMenuOpen}
          >
            <Globe className="h-5 w-5" />
            <span>{languages[language]}</span>
          </button>
          {isLanguageMenuOpen && (
            <ul className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-md shadow-xl z-10">
              {Object.entries(languages).map(([code, name]) => (
                <li key={code}>
                  <button
                    onClick={() => {
                      setLanguage(code);
                      setIsLanguageMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors"
                  >
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Image */}
        <div className="ml-4">
          <Image src="/imagen/Logo blanco.png" width={50} height={50} alt="Logo" />
        </div>
      </div>
    </nav>
  )
}
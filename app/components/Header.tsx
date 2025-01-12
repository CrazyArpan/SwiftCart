'use client'

import Link from 'next/link'
import { ShoppingCart, Sun, Moon, User, Search } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useCart } from '../contexts/CartContext'
import { useTheme } from '../contexts/ThemeContext'
import { useUser, UserButton, SignInButton } from "@clerk/nextjs"
import Logo from './Logo'
import HamburgerIcon from './HamburgerIcon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  
  const { cart } = useCart()
  const { theme, toggleTheme } = useTheme()
  const { isSignedIn, user } = useUser()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  // Import products data
  const { products } = require('../data/products')

  const handleSearch = (query) => {
    const filtered = products.flatMap(category => 
      category.subcategories.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
      )
    )
    setSearchResults(filtered)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSearchOpen && !event.target.closest('.search-container')) {
        setIsSearchOpen(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isSearchOpen])

  return (
    <header className="bg-gray-800 text-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo size={40} color={theme === 'dark' ? '#FFFFFF' : '#FFFFFF'} />
          <span className="text-xl font-bold">SwiftCart</span>
        </Link>

        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
          <Link href="/order-history" className="hover:text-gray-300 transition-colors duration-200">Order History</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="search-container relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Theme-aware Search Input Overlay */}
            {isSearchOpen && (
              <div className={`absolute right-0 mt-2 w-72 ${
                theme === 'dark' 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white'
                } rounded-lg shadow-lg z-50`}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    handleSearch(e.target.value)
                  }}
                  className={`w-full px-4 py-2 rounded-t-lg focus:outline-none ${
                    theme === 'dark'
                      ? 'bg-gray-700 text-white placeholder-gray-400'
                      : 'bg-white text-gray-900 placeholder-gray-500'
                  }`}
                  autoFocus
                />

                {/* Theme-aware Search Results */}
                {searchQuery && searchResults.length > 0 && (
                  <div className={`max-h-96 overflow-y-auto border-t ${
                    theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    {searchResults.map((product) => (
                      <Link
                        key={product.id}
                        href={`/product/${product.id}`}
                        className={`flex items-center p-4 ${
                          theme === 'dark'
                            ? 'hover:bg-gray-700 text-white'
                            : 'hover:bg-gray-100 text-gray-900'
                        }`}
                        onClick={() => {
                          setSearchQuery('')
                          setIsSearchOpen(false)
                        }}
                      >
                        <div>
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className={`text-sm ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            ${product.price}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link href="/cart" className="relative">
            <ShoppingCart />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalItems}
              </span>
            )}
          </Link>

          {isSignedIn ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <SignInButton mode="modal">
              <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200">
                <User size={20} />
                <span>Sign In</span>
              </button>
            </SignInButton>
          )}

          <div className="md:hidden">
            <HamburgerIcon isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <nav className="bg-gray-700 dark:bg-gray-800 px-4 py-2">
          <Link href="/" className="block py-2 hover:text-gray-300 transition-colors duration-200">Home</Link>
          <Link href="/order-history" className="block py-2 hover:text-gray-300 transition-colors duration-200">Order History</Link>
        </nav>
      </div>
    </header>
  )
}
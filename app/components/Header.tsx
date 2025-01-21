'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ShoppingCart, Sun, Moon, User, Search, ChevronDown, ChevronUp, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useCart } from '../contexts/CartContext'
import { useTheme } from '../contexts/ThemeContext'
import { useUser, UserButton, SignInButton } from "@clerk/nextjs"
import Logo from './Logo'
import HamburgerIcon from './HamburgerIcon'
import { products } from '../data/products'

export default function Header() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [selectedSubcategory, setSelectedSubcategory] = useState(null)
  const [isMobileSearch, setIsMobileSearch] = useState(false)
  
  const { cart, addToCart } = useCart()
  const { theme, toggleTheme } = useTheme()
  const { isSignedIn, user } = useUser()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleCartClick = (e) => {
    if (!isSignedIn) {
      e.preventDefault()
      alert("Please login to access your cart")
    }
  }

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([])
      return
    }

    const filtered = products.filter(category =>
      category.name.toLowerCase().includes(query.toLowerCase()) ||
      category.subcategories.some(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    )

    setSearchResults(filtered)
  }

  const toggleCategory = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
    setSelectedSubcategory(null)
  }

  const toggleMobileSearch = () => {
    setIsMobileSearch(!isMobileSearch)
    setIsSearchOpen(!isSearchOpen)
    setSearchQuery('')
    setSearchResults([])
    setExpandedCategory(null)
  }

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      setIsMobileSearch(isMobile && isSearchOpen)
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [isSearchOpen])

  const SearchContent = () => (
    <div className={`${
      isMobileSearch 
        ? 'fixed inset-0 bg-gray-900 bg-opacity-50 z-50'
        : 'relative'
    }`}>
      <div className={`${
        isMobileSearch
          ? 'fixed inset-x-0 top-0 p-4 bg-white dark:bg-gray-800'
          : 'absolute right-0 mt-2 w-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg'
      } z-50`}>
        {isMobileSearch && (
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Search</h2>
            <button 
              onClick={toggleMobileSearch}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X size={24} className="text-gray-900 dark:text-white" />
            </button>
          </div>
        )}
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              handleSearch(e.target.value)
            }}
            className={`w-full px-4 py-2 ${
              isMobileSearch ? 'rounded-lg' : 'rounded-t-lg'
            } border focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              theme === 'dark'
                ? 'bg-gray-700 text-white placeholder-gray-400 border-gray-600'
                : 'bg-white text-gray-900 placeholder-gray-500 border-gray-300'
            }`}
            autoFocus
          />
        </div>

        {searchQuery && searchResults.length > 0 && (
          <div className={`${
            isMobileSearch ? 'max-h-[calc(100vh-150px)]' : 'max-h-96'
          } overflow-y-auto border-t ${
            theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
          }`}>
            {searchResults.map((category) => (
              <div key={category.id}>
                <div className={`flex items-center justify-between p-4 ${
                  theme === 'dark'
                    ? 'hover:bg-gray-700 text-white'
                    : 'hover:bg-gray-100 text-gray-900'
                }`}>
                  <span>{category.name}</span>
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="flex items-center space-x-2 text-blue-500 hover:text-blue-600"
                  >
                    <span>View</span>
                    {expandedCategory === category.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>
                
                {expandedCategory === category.id && (
                  <div className={`p-4 border-t ${
                    theme === 'dark' ? 'border-gray-700 bg-gray-750' : 'border-gray-200 bg-gray-50'
                  }`}>
                    <p className={`text-sm mb-4 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>{category.description}</p>
                    <div className="space-y-4">
                      {category.subcategories.map((sub) => (
                        <div 
                          key={sub.id}
                          className={`p-3 rounded border ${
                            selectedSubcategory?.id === sub.id
                              ? 'border-blue-500'
                              : theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
                          } ${
                            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                              <Image
                                src={sub.image} 
                                alt={sub.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-2">
                                <h3 className={`font-medium ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>{sub.name}</h3>
                                <span className={`font-bold ${
                                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>${sub.price.toFixed(2)}</span>
                              </div>
                              <p className={`text-sm mb-2 ${
                                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                              }`}>{sub.description}</p>
                              <button
                                onClick={() => {
                                  addToCart({
                                    id: sub.id,
                                    name: `${category.name} - ${sub.name}`,
                                    price: sub.price,
                                    quantity: 1,
                                    imageUrl: sub.imageUrl
                                  })
                                }}
                                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
                              >
                                Add to Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

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
          <div className="search-container">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {isSearchOpen && <SearchContent />}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          <Link href="/cart" className="relative" onClick={handleCartClick}>
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
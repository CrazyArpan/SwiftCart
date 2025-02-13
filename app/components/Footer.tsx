import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          Made with ❤️ by{' '}
          <Link 
            href="https://github.com/CrazyArpan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-blue-400 underline transition-colors duration-200"
          >
            Arpan
          </Link>
        </p>
      </div>
    </footer>
  )
}

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { placeholderWords } from '../data/jobData/searchBarData'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [placeholder, setPlaceholder] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = placeholderWords[wordIndex]
    const typingSpeed = isDeleting ? 10 : 100
    const pauseTime = 300

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (placeholder.length < currentWord.length) {
          setPlaceholder(currentWord.slice(0, placeholder.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (placeholder.length > 0) {
          setPlaceholder(placeholder.slice(0, -1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % placeholderWords.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [placeholder, isDeleting, wordIndex])

  return (
    <div className="mb-8">
      <div className="relative max-w-2xl mx-auto">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 w-5 h-5" />

        <input
          type="text"
          placeholder={`Seach for ${placeholder}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 pl-11 border border-amber-300 rounded-lg
                     focus:outline-none focus:ring-2 focus:ring-amber-500
                     focus:border-transparent text-black"
        />
      </div>
    </div>
  )
}

export default SearchBar

import { useState } from 'react'
import EN from '../../assets/UK.png'
import VN from '../../assets/VN.png'
import Image from 'next/image'

const languages = [
  { code: 'EN', label: 'ENGLISH', flag: EN },
  { code: 'VN', label: 'VIỆT NAM', flag: VN }
]

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(languages[0])

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg"
      >
        <span><Image src={selectedLang.flag} alt={selectedLang.label} className="w-5 h-5" /></span>
        <span>{selectedLang.code}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang)
                setIsOpen(false)
              }}
              className="flex items-center space-x-3 px-4 py-2 w-full hover:bg-gray-100"
            >
              <span>
                <Image src={lang.flag} alt={lang.label} width={20} height={20} />
              </span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
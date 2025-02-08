"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import LanguageSelector from '../dropdown/LanguageSelector';
import Image from 'next/image';
import Menu from '../../assets/menu.png'
import Setting from '../../assets/setting.png'
import Case from '../../assets/case.png'
import Res from '../../assets/res.png'
import ArrowRight from '../../assets/arrow_right.png'
import FB from "../../assets/fb.png"
import INS from "../../assets/ins.png"
import LIKEIN from "../../assets/likein.png"
import GM from "../../assets/gm.png"
import TW from "../../assets/tw.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth > 768) {
          setIsOpen(false);
        }
      };
    
      const handleClickOutside = (event) => {
        const menu = document.getElementById('mobile-menu');
        if (menu && !menu.contains(event.target)) {
          setIsOpen(false);
        }
      };
    
      window.addEventListener('resize', handleResize);
      window.addEventListener('mousedown', handleClickOutside);
    
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('mousedown', handleClickOutside);
      };
  } 
  }, []);

  return (
    <header className="w-full py-4 pr-6 md:pr-12">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <span className="text-white">&gt;</span>
          </div>
        </Link>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-700 hover:text-black">
            Tutorials
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black">
            Case studies
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black">
            Resources
          </Link>
          {/* Language Selector */}
          <LanguageSelector />
        </div>
        {/* Language Selector Mobile */}
        <div className='max-md:flex items-center space-x-8 hidden'>
          <LanguageSelector />
          <div className='cursor-pointer' onClick={toggleMenu}>
            <Image
              src={Menu}
              alt='Menu'
            />
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div id="mobile-menu" className="fixed inset-0 left-24 bg-black bg-opacity-50 z-50">
          <div className="absolute top-0 right-0 p-4 flex flex-col justify-between h-full w-full">
            <button className="absolute text-2xl top-4 right-4 text-white" onClick={toggleMenu}>
              ✖
            </button>
            <div className='pt-12'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image 
                    src={Setting}
                    alt='Setting'
                    width={28}
                    height={28}
                    className='h-full'
                  />
                  <Link href="#" className="block p-3 text-white hover:text-black">Tutorials</Link>
                </div>
                <Image 
                  src={ArrowRight}
                  alt='ArrowRight'
                  width={24}
                  height={24}
                  className='h-full cursor-pointer'
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image 
                    src={Case}
                    alt='Case'
                    width={28}
                    height={28}
                    className='h-full'
                  />
                  <Link href="#" className="block p-3 text-white hover:text-black">Case Studies</Link>
                </div>
                <Image 
                  src={ArrowRight}
                  alt='ArrowRight'
                  width={24}
                  height={24}
                  className='h-full cursor-pointer'
                />
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <Image 
                    src={Res}
                    alt='Resource'
                    width={28}
                    height={28}
                    className='h-full cursor-pointer'
                  />
                  <Link href="#" className="block p-3 text-white hover:text-black">Resources</Link>
                </div>
                <Image 
                  src={ArrowRight}
                  alt='ArrowRight'
                  width={24}
                  height={24}
                  className='h-full'
                />
              </div>
            </div>
            <div className="mt-4">
            <div className="w-full h-[1px] bg-[#525252] my-4"></div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Icons */}
            <div className="flex gap-4 max-sm:order-1">
                <Image
                  src={FB}
                  alt="Facebook"
                />
                <Image
                  src={INS}
                  alt="Instagram"
                />
                <Image
                  src={LIKEIN}
                  alt="LIKEIN"
                />
                <Image
                  src={TW}
                  alt="X"
                />
                <Image
                  src={GM}
                  alt="Gmail"
                />
            </div>
            {/* Copyright */}
            <div className="mt-4 md:mt-0 max-sm:order-2 max-md:flex max-md:items-center max-md:pt-4">
              <span className="text-base text-gray-400">© 2021 Copyright  <span className="text-white">Macode.io</span></span>
            </div>
          </div>
          {/* Divider */}
          <div className="absolute left-0 right-0 h-[1px] bg-[#525252] bottom-[30px] my-4 hidden max-md:block"></div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
};

export default Header;
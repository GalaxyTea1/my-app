import FB from "../../assets/fb.png"
import INS from "../../assets/ins.png"
import LIKEIN from "../../assets/likein.png"
import GM from "../../assets/gm.png"
import TW from "../../assets/tw.png"
import Image from "next/image"

const Footer = () => {
    return (
      <footer className="bg-black text-white py-4">
        <div className="max-w-full mx-16 pt-36 pb-3 relative">
          {/* Row 1: Logo và Menu */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-4 mx-12">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4 md:mb-0 max-sm:mb-12">
            <div className="w-10 h-10 bg-[#E1FF4A] rounded-full flex items-center justify-center">
              <span className="text-black">&gt;</span>
            </div>
              <span className="font-semibold text-xl">Macode</span>
            </div>
  
            {/* Menu Items */}
            <div className="flex gap-6 max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <a href="#" className="hover:text-gray-300">Tutorials</a>
              <a href="#" className="hover:text-gray-300">Case Studies</a>
              <a href="#" className="hover:text-gray-300">Resources</a>
            </div>
          </div>
  
          {/* Divider */}
          <div className="w-full h-[1px] bg-[#525252] my-4"></div>
          <div className="flex flex-col md:flex-row justify-between items-center mx-12">
            {/* Social Icons */}
            <div className="flex gap-4 max-sm:order-1 md:order-1">
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
            <div className="mt-4 md:mt-0 max-sm:order-2 md:order-2 max-md:flex max-md:items-center max-md:pt-4">
              <span className="text-base text-gray-400">© 2021 Copyright  <span className="text-[#E1FF4A]">Macode.io</span></span>
            </div>
          </div>
          <div className="absolute left-0 right-0 h-[1px] bg-[#525252] bottom-[30px] my-4 hidden max-md:block"></div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
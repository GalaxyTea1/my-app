import Image from 'next/image'
import CodePreview from "../../assets/code.svg"
import Developer from "../../assets/developer.png"
import CautionPC from "../../assets/caution_pc.png"
import Header from '../header/Header'
import Icon1 from '../../assets/icon1.png'

const LayerHeader = () => {
    return (
        <div className='relative'>
        <section className="relative overflow-hidden">
          <div className="grid grid-cols-1 xl:grid-cols-2">
            {/* Left Content */}
            <div className="z-10 bg-[#E8E8E8] pl-8 pt-10 pb-6 max-md:z-50">
              <Header/>

              <h1 className="font-mono text-5xl md:text-6xl leading-tight mb-8 mt-10 text-black">
                Improve your
                <br />
                skills by <span className="inline-flex items-center">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.20001 21C4.20001 16.5444 5.97001 12.2712 9.12062 9.1206C12.2712 5.96999 16.5444 4.2 21 4.2C25.4556 4.2 29.7288 5.96999 32.8794 9.1206C36.03 12.2712 37.8 16.5444 37.8 21C37.8 25.4556 36.03 29.7288 32.8794 32.8794C29.7288 36.03 25.4556 37.8 21 37.8C16.5444 37.8 12.2712 36.03 9.12062 32.8794C5.97001 29.7288 4.20001 25.4556 4.20001 21ZM25.1118 13.02C25.172 12.8929 25.2061 12.7551 25.212 12.6146C25.2179 12.4741 25.1955 12.3339 25.1462 12.2022C25.0969 12.0705 25.0217 11.9501 24.9249 11.8481C24.8282 11.746 24.712 11.6644 24.5831 11.6082C24.4543 11.5519 24.3154 11.5221 24.1748 11.5205C24.0342 11.5189 23.8948 11.5456 23.7647 11.5989C23.6346 11.6522 23.5165 11.7311 23.4175 11.831C23.3185 11.9308 23.2405 12.0495 23.1882 12.18L15.8382 28.98C15.778 29.1071 15.7439 29.2449 15.738 29.3854C15.7321 29.5259 15.7545 29.6661 15.8038 29.7978C15.8531 29.9295 15.9283 30.0499 16.0251 30.1519C16.1218 30.254 16.238 30.3355 16.3669 30.3918C16.4958 30.4481 16.6346 30.4779 16.7752 30.4795C16.9158 30.4811 17.0553 30.4544 17.1854 30.4011C17.3155 30.3478 17.4335 30.2689 17.5325 30.169C17.6316 30.0692 17.7095 29.9505 17.7618 29.82L25.1118 13.02ZM14.3934 16.0566C14.2959 15.9588 14.18 15.8812 14.0524 15.8283C13.9249 15.7754 13.7881 15.7481 13.65 15.7481C13.5119 15.7481 13.3751 15.7754 13.2476 15.8283C13.12 15.8812 13.0041 15.9588 12.9066 16.0566L8.70661 20.2566C8.60883 20.3541 8.53125 20.47 8.47832 20.5976C8.42538 20.7251 8.39814 20.8619 8.39814 21C8.39814 21.1381 8.42538 21.2749 8.47832 21.4024C8.53125 21.53 8.60883 21.6459 8.70661 21.7434L12.9066 25.9434C13.1038 26.1406 13.3712 26.2513 13.65 26.2513C13.9288 26.2513 14.1962 26.1406 14.3934 25.9434C14.5906 25.7462 14.7013 25.4788 14.7013 25.2C14.7013 24.9212 14.5906 24.6538 14.3934 24.4566L10.9347 21L14.3934 17.5434C14.4912 17.4459 14.5688 17.33 14.6217 17.2024C14.6746 17.0749 14.7019 16.9381 14.7019 16.8C14.7019 16.6619 14.6746 16.5251 14.6217 16.3976C14.5688 16.27 14.4912 16.1541 14.3934 16.0566ZM27.6066 17.5434L31.0653 21L27.6066 24.4566C27.4094 24.6538 27.2987 24.9212 27.2987 25.2C27.2987 25.4788 27.4094 25.7462 27.6066 25.9434C27.8038 26.1406 28.0712 26.2513 28.35 26.2513C28.6288 26.2513 28.8962 26.1406 29.0934 25.9434L33.2934 21.7434C33.3912 21.6459 33.4688 21.53 33.5217 21.4024C33.5746 21.2749 33.6019 21.1381 33.6019 21C33.6019 20.8619 33.5746 20.7251 33.5217 20.5976C33.4688 20.47 33.3912 20.3541 33.2934 20.2566L29.0934 16.0566C28.8962 15.8594 28.6288 15.7487 28.35 15.7487C28.0712 15.7487 27.8038 15.8594 27.6066 16.0566C27.4094 16.2538 27.2987 16.5212 27.2987 16.8C27.2987 17.0788 27.4094 17.3462 27.6066 17.5434Z" fill="black"/>
                </svg>
                </span> study
                <br />
                with coding
              </h1>
              <Image 
                src={Icon1}
                alt='icon'
              />
              <p className="text-gray-600 mb-8 max-w-md">
                Create, launch, and iterate on new marketing campaigns without distracting your product team.
              </p>
    
              <button className="bg-black text-white px-8 py-3 rounded-lg flex items-center space-x-2 hover:bg-gray-800">
                <span>Get started</span>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.4976 1.26078L1.39233 16.366M16.4976 1.26078L7.47367 1.06461M16.4976 1.26078L16.6938 9.50001" stroke="white" strokeWidth="1.56938" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
    
            {/* Right Content */}
            <div className="relative h-[850px] lg:h-[850px] bg-[url(../assets/line.png)] bg-no-repeat bgPosImageHeader">
              <div className="absolute top-[55%] -left-56 max-xl:left-28 max-md:left-[-4rem] max-md:top-[58%] z-10">
                  <Image
                    src={CodePreview}
                    alt="Code Preview"
                    width={500}
                    height={300}
                    className="rounded-xl shadow-xs object-contain scale-105 max-xl:scale-x-110 xl:scale-110 max-md:scale-[70%]"
                    priority
                  />
              </div>
    
              {/* Developer Image */}
              <div className="absolute bottom-0 xl:left-32 min-w-[400px] max-md:left-[10rem] md:left-[26rem] max-md:bottom-[-30px] z-20">
                  <Image
                    src={Developer}
                    alt="Developer"
                    width={400}
                    height={500}
                    className="object-contain max-md:scale-90"
                    priority
                  />
              </div>
            </div>
          </div>
        </section>
        <div className="absolute -bottom-24 left-3/4 z-20 max-md:-bottom-[80px] max-md:left-[60%] max-lg:-bottom-24 ">
            <Image
                src={CautionPC}
                alt="Caution"
                width={180}
                height={180}
                className="object-contain scale-[60%] max-md:scale-[45%]"
            />
         </div>
        </div>
      )
  };

  export default LayerHeader;
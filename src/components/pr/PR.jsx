import Image from "next/image"
import Code from "../../assets/code2.png"
import Caution from "../../assets/caution2.png"
import Wave from "../../assets/wave.png"
import Circle from "../../assets/circle.png"
import Person from "../../assets/person.png"

const PR = () => {
    return (
        <section className="bg-white py-20 px-4">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className=" rounded-xl overflow-hidden">
                
                <div className="">
                <Image
                  src={Code}
                  alt="Code"
                />
                </div>
              </div>
              {/* Yellow Triangle Decoration */}
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
                <Image
                  src={Caution}
                  alt="Caution"
                  width={150}
                  height={150}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-black">
                The language for building web pages
              </h2>
              <p className="text-gray-400 text-lg">
                Go live on a fast, reliable, and hassle-free
                hosting network that scales with your business
                with one click and go code!
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">
                Try it Yourself 
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block ml-2">
                  <path d="M16.4976 1.26078L1.39233 16.366M16.4976 1.26078L7.47367 1.06461M16.4976 1.26078L16.6938 9.50001" stroke="white" strokeWidth="1.56938" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="max-w-full mx-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col justify-between">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Get up and running <br/> fast together
              </h2>
              <div className="flex flex-col md:flex-row items-stretch relative">
                {/* University Card */}
                <div className="flex-1 md:pr-8 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <Image
                      src={Wave}
                      alt="Wave"
                    />
                  </div>
                  <div className="rounded-xl pb-6 pt-14 transition-all">
                    <h3 className="text-xl font-semibold mb-3">University</h3>
                    <p className="text-gray-400">Browse hundreds of in-depth
                      videos, courses, and guides
                      to get up and running fast
                    </p>
                  </div>
                </div>

                {/* Divider Line */}
                <div className="hidden md:block w-[1px] bg-gray-200 absolute left-1/2 top-0 bottom-6 transform -translate-x-1/2"></div>

                {/* Showcase Card */}
                <div className="flex-1 md:pl-8 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="flex justify-center md:justify-start">
                    <Image
                      src={Circle}
                      alt="Wave"
                    />
                  </div>
                  <div className="rounded-xl pb-6 pt-14 transition-all">
                    <h3 className="text-xl font-semibold mb-3">Showcase</h3>
                    <p className="text-gray-400">Get inspired by the
                      incredible websites built by
                      members of the community
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-[#C1FF00] rounded-2xl overflow-hidden">
                  <Image
                    src={Person}
                    alt="Person"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default PR
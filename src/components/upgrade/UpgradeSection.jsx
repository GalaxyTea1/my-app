const UpgradeSection = () => {
    return (
      <div className="bg-[#ddf247] shadow-sm-custom absolute left-1/2 transform -translate-x-1/2 bottom-[-100px] rounded-2xl z-20">
        <div className="max-w-full mx-10 text-center px-40 py-10 max-md:px-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 max-sm:text-[1.2rem]">
            Start upgrading your skills <br/> free for this month
          </h2>
          <p className="text-gray-700 mb-6 max-sm:text-[0.9rem]">
            Build your site for free and take as long as you need
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-black text-white px-6 py-2 opacity-40">
              Try Yourself
            </button>
            <button className="bg-black text-white px-6 py-2 flex items-center gap-2 hover:bg-gray-800">
              Get started
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.4976 1.26078L1.39233 16.366M16.4976 1.26078L7.47367 1.06461M16.4976 1.26078L16.6938 9.50001" stroke="white" strokeWidth="1.56938" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default UpgradeSection;
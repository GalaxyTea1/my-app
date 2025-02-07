"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const features = [
        {
            title: "Best Tutors",
            description: "Bring your design vision to life in clean, semantic HTML5",
            icon: "/assets/f1.svg"
        },
        {
            title: "Flexible",
            description: "Complete your marketing tools with built-in integrations",
            icon: "/assets/f2.svg"
        },
        {
            title: "Easy Access",
            description: "Complete your marketing tools with built-in integrations",
            icon: "/assets/f3.svg"
        }
    ];

    useEffect(() => {
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth <= 768);
                if (window.innerWidth <= 768 && activeIndex >= features.length) {
                    setActiveIndex(0);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [activeIndex, features.length]);

    return (
        <section className="py-16 px-4 bg-[#E8E8E8]">
            <div className="max-w-full mx-10 grid grid-cols-1 gap-8 md:gap-2 md:grid-cols-4">
                {/* Left Column */}
                <div className="flex flex-col md:col-span-1">
                    <h2 className="text-3xl font-bold mb-4 text-black">
                        Our Features<br />Special For You
                    </h2>
                    <p className="mb-8 text-black">
                        We provide various special <br/> features for all of you
                    </p>
                </div>

                {/* Right Column - Features Grid */}
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:col-span-3`}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`px-6 py-10 rounded-lg transition-colors duration-300 ${activeIndex === index ? 'bg-[#E1FF4A]' : 'bg-white'} ${isMobile && activeIndex !== index ? 'hidden' : ''}`}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-12 ${activeIndex === index ? 'bg-white' : 'bg-bg-white'}`}>
                                <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={28}
                                    height={28}
                                    className={activeIndex === index ? '' : ''}
                                />
                            </div>
                            <h3 className={`text-2xl font-semibold mb-3 ${activeIndex === index ? 'text-black' : 'text-black'}`}>
                                {feature.title}
                            </h3>
                            <p className={activeIndex === index ? 'text-black' : 'text-gray-400'}>
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
                {/* Slider dots */}
                <div className="flex gap-2 max-md:mt-4 max-md:justify-center">
                    {[0, 1, 2].map((index) => (
                        <div
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`w-8 h-2 rounded-full cursor-pointer ${activeIndex === index ? 'bg-[#E1FF4A]' : 'bg-white'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Features;
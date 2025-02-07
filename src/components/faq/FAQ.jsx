"use client"

import { useState } from 'react';
import React from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200/10 max-w-full mx-16">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-black">{question}</span>
        <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${isOpen ? 'bg-[#E1FF4A] border-[#E1FF4A]' : 'border-black'}`}>
          <span className={`font-bold text-xl ${isOpen ? 'text-black' : 'text-[#E1FF4A]'}`}>
            {isOpen ? '-' : '+'}
          </span>
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-400 pr-8">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "01. Can I Find the right information faster?",
      answer: "Nulla lectus lectus, suscipit at posuere sit amet, imperdiet sit amet sapien. Donec ornare odio justo, acefficitur enim fermen. Nam enim ligula, lacinia vitae venenatis quis, suscipit id augue."
    },
    {
      question: "02. How to share feature demos and ideas?",
      answer: "Lorem ispisum..."
    },
  ];

  return (
    <section className="py-20 px-4 bg-white" id="faq-section">
      <h2 className="text-3xl text-center font-bold mb-12 max-w-full mx-auto text-black">FAQs</h2>
      <div className="space-y-1 pb-56">
        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
            {index < faqs.length - 1 && <div className="border-t border-gray-300 my-2 mx-16" />}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
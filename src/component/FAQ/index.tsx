'use client'
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosArrowDown} from 'react-icons/io';


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const {t} = useTranslation('common')

  const faqs = [
    {
      question: t('faq_question_1_title'),
      answer:t('faq_question_1_description'),
    },
    {
      question: t('faq_question_2_title'),
      answer:t('faq_question_2_description'),
    },
    {
      question: t('faq_question_3_title'),
      answer:t('faq_question_3_description'),
    },
    {
      question: t('faq_question_4_title'),
      answer:t('faq_question_4_description'),
    },
  ];
  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="min-h-screen py-5  md:p-13 px-4 md:px-0   flex flex-col items-center justify-center">
      <div className="w-11/12 md:w-5/6 text-center">
      <h2 className=" text-[#006fba] text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] font-bold text-center mb-3">
        {t('faq_title')}
      </h2>
      <p className="text-gray-500 text-[14px]  md:text-[18px] lg:text-[20px] 2xl:text-[22px] mb-5">
        {t('faq_description')}
      </p>
      
      <div className="w-full space-y-5 2xl:space-y-8 ">
        {faqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="bg-white rounded-xl shadow-md overflow-hidden "
          >
            <button
              className="w-full  flex cursor-pointer justify-between items-center px-5 md:px-8 py-4 2xl:py-7 focus:outline-none text-left "
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span className=" font-[550] md:font-semibold text-md md:text-lg  text-neutral-900">
                {faq.question}
              </span>
              <span className={`ml-4 text-xl text-neutral-500 transition-transform duration-800 ${openIndex === idx ? 'rotate-180' : 'rotate-0'}`}>
                {<IoIosArrowDown />}
              </span>
            </button>
            <div
              className={`px-8 text-neutral-700 text-sm md:text-base overflow-hidden transition-all duration-800 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 pb-2 2xl:pb-6' : 'max-h-0 opacity-0'}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default FAQ; 
'use client'
import React, { useState } from 'react';
import { IoIosArrowDown} from 'react-icons/io';

const faqs = [
  {
    question: 'What types of trucks do you offer for rental?',
    answer:
      'We provide a reliable and diverse truck fleet tailored to meet various commercial and logistical needs. Our selection includes delivery trucks, freight haulers, medium-duty vehicles, and commercial trucks, all meticulously maintained and regularly serviced to ensure optimal performance. Each vehicle is fully insured and equipped with advanced safety technologies and GPS tracking for real-time monitoring and enhanced operational efficiency. Whether you require a single truck for local deliveries or a complete fleet to support large-scale business operations, we offer flexible solutions designed to align with your specific transportation requirements.',
  },
  {
    question: 'How far in advance should I book my truck rental?',
    answer:
      'We recommend securing your booking as early as possible to guarantee vehicle availability, particularly during peak seasons when demand is high. Early reservations not only ensure you get the truck that best fits your needs but also provide peace of mind and better scheduling flexibility. That said, we understand that urgent situations arise, and we strive to accommodate last-minute bookings whenever possible, depending on fleet availability. Our team is committed to providing timely and dependable service, no matter when you book.',
  },
  {
    question: 'Are your trucks insured and maintained?',
    answer:
      'Yes, all our trucks are fully insured and undergo routine maintenance to meet the highest safety and performance standards. Our dedicated maintenance team conducts thorough inspections and servicing to ensure each vehicle remains in top condition, minimizing the risk of breakdowns and delays. This commitment to regular upkeep and comprehensive insurance coverage ensures that you receive a safe, dependable, and worry-free transportation experience every time.',
  },
  {
    question: 'Can I rent a truck for a single day?',
    answer:
      'Absolutely! We provide flexible rental options designed to accommodate a variety of business needs and schedules. Whether you require a truck for a single day, a full week, or an extended period, our daily, weekly, and long-term rental plans offer the versatility to match your specific requirements. Our goal is to make transportation convenient and cost-effective, ensuring you get the right vehicle for the right duration—without any unnecessary commitments.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="min-h-screen py-5 md:p-13 px-4 md:px-0 w-11/12 md:w-5/6  flex flex-col justify-center items-center">
      <h2 className=" text-black text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] font-bold text-center mb-3">
        Frequently Asked <span className="text-[#006fba]">Questions</span>
      </h2>
      <p className="text-gray-500 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[18px] mb-5">
        Get answers to common questions about our transportation services.
      </p>
      
      <div className="w-full max-w-3xl 2xl:max-w-7xl space-y-5 2xl:space-y-8 ">
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
    </section>
  );
};

export default FAQ; 
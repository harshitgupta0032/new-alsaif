'use client'
import React from 'react';
import QuoteForm from './QuotesForm'

const Quotes = () => {
    return (
        <div id='contact' className="lg:min-h-screen pt-10 flex flex-col items-center justify-center p-4 pb-6  bg-blue-500">
            <div className='md:w-[584px] my-7'>
                <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] text-white font-bold text-center mb-2">
                    Start Your <span className='text-yellow-200'>Project </span> with  <span className="text-yellow-200">Al Saif </span>Today
                </h2>
                <p className="text-white text-center text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[18px] ">
                    Request a customized quote and let our fleet drive your success.
                </p>
            </div>
            <QuoteForm />
        </div>
    )
}

export default Quotes
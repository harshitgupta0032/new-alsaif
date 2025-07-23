'use client'
import React from 'react';
import QuoteForm from './QuotesForm'

const Quotes = () => {
    return (
        <div id='get-quotes' className="lg:min-h-screen   pt-10 flex flex-col items-center justify-center p-4 pb-6  bg-[#006fba] rounded w-full">
            <div className=' my-7 mb-13'>
                <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] text-white font-bold text-center mb-3">
                    Start Your <span className='text-yellow-200'>Project </span> with  <span className="text-yellow-200">Al Saif </span>Today
                </h2>
                <p className="text-white text-center text-[10px] sm:text-[12px] md:text-[13px] lg:text-[17px]">
                    Request a customized quote and let our fleet drive your success.
                </p>
            </div>
            <QuoteForm />
        </div>
    )
}

export default Quotes
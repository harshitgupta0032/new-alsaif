'use client'
import React from 'react';
import QuoteForm from './QuotesForm'

const Quotes = () => {
    return (
        <div id='get-quotes' className="lg:min-h-screen pt-10 flex flex-col items-center justify-center p-4 pb-6  bg-blue-500">
            <div className='md:w-[584px] '>
                <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center mb-2">
                    Get Your <span className="text-yellow-300">Instant Quote</span>
                </h2>
                <p className="text-white text-center text-sm md:text-base mt-4 mb-6  ">
                    Fill out the form below and receive a personalized quote within minutes. No hidden fees, transparent pricing.
                </p>
            </div>
            <QuoteForm />
        </div>
    )
}

export default Quotes
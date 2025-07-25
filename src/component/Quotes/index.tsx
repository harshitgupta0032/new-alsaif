'use client'
import React, { useEffect } from 'react';
import QuoteForm from './QuotesForm'
import { useTranslation } from 'react-i18next';
import SuccessMessage from '../common/SuccessMessage';
import ContactUsInformation from './ContactUsInformation';

const Quotes = () => {

    const { t } = useTranslation('common');
    const [success, setSuccess] = React.useState(false);


    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        if (success) {
            timeoutId = setTimeout(() => {
                setSuccess(false);
            }, 4000);
        }

        return () => {
            clearTimeout(timeoutId); // cleanup only when `success` changes or component unmounts
        };
    }, [success]);


    return (
        <div id='quotes' className="lg:min-h-screen   pt-10 flex flex-col items-center justify-center p-4 pb-6  bg-[#006fba] rounded w-full">

            <div className=' my-7 mb-13'>
                <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] text-black font-bold text-center mb-3">
                    {t('start_your_project_with_Al_Saif_title')}
                </h2>
                <p className="text-white text-center text-[14px]  md:text-[18px] lg:text-[20px] 2xl:text-[22px]">
                    {t('start_your_project_with_Al_Saif_description')}
                </p>
            </div>
            <div className={` grid ${success ? 'lg:grid-cols-1' : 'lg:grid-cols-3'}  gap-6 w-full md:w-5/6 mx-auto  bg-gray-100 py-7  px-3 md:px-6 rounded-xl shadow-lg `}>
                {success ? (
                    <SuccessMessage />
                ) : (
                    <>
                        {/* Contact Us details */}
                        <ContactUsInformation />
                        <div className='md:col-span-2'>
                            <QuoteForm onSuccess={() => setSuccess(true)} />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Quotes
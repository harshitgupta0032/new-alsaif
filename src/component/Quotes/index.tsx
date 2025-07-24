'use client'
import React from 'react';
import QuoteForm from './QuotesForm'
import { useTranslation } from 'react-i18next';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Quotes = () => {

    const { t } = useTranslation('common');

    const contactOptions = {
        address: {
            text: t('start_your_project_with_Al_Saif_contact_us_title'),
            address: t('start_your_project_with_Al_Saif_contact_us_address'),
            icons: <FaMapMarkerAlt />,
        },
        phone: {
            text: t('start_your_project_with_Al_Saif_contact_us_phone_text'),
            phone: "+966596003333",
            icons: <FaPhoneAlt />,
        },
        email: {
            text: t('start_your_project_with_Al_Saif_contact_us_email_text'),
            email: t('start_your_project_with_Al_Saif_contact_us_email'),
            icons: <FaEnvelope />,
        }
    }

    return (
        <div id='get-quotes' className="lg:min-h-screen   pt-10 flex flex-col items-center justify-center p-4 pb-6  bg-[#006fba] rounded w-full">
            <div className=' my-7 mb-13'>
                <h2 className="text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] text-white font-bold text-center mb-3">
                    {t('start_your_project_with_Al_Saif_title')}
                </h2>
                <p className="text-white text-center text-[10px] sm:text-[12px] md:text-[13px] lg:text-[17px]">
                    {t('start_your_project_with_Al_Saif_description')}
                </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 w-11/12 md:w-5/6 mx-auto  bg-gray-100 py-7 px-6 rounded-xl shadow-lg ">
                <div className='col-span-2'>
                    <QuoteForm />
                </div>
                {/* Contact Us details */}
                <div className=' flex flex-col items-start justify-start gap-4 '>
                    <div className='text-black'>
                        <h1 className='text-[24px] font-[600] '>{t('start_your_project_with_Al_Saif_contact_us_title')}
                        </h1>
                        <hr className=' border-5 border-[#006fba] w-[70%]' />
                    </div>
                    <p className='text-black/50 w-[80%]'>{t('start_your_project_with_Al_Saif_contact_us_description')}</p>
                    <div className='flex flex-col gap-4'>
                        {Object.entries(contactOptions).map(([key, { text, icons, ...info }]) => (
                            <div key={key} className="flex items-center gap-4">
                                <span className=" border border-[#006fba] text-[#006fba] p-3 rounded-full">{icons}</span>

                                <div>
                                    <span className='font-bold text-[#006fba]'>{text}: </span>
                                     <span className='text-black/50 text-[14px]'>

                                    {Object.values(info).join(" ")}
                                     </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quotes
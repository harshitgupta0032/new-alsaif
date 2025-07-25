import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactUsInformation = () => {

    const {t} = useTranslation('common');
    const contactOptions = {
            address: {
                text: t('Al_Saif_contact_us_title'),
                address: t('Al_Saif_contact_us_address'),
                icons: <FaMapMarkerAlt />,
            },
            phone: {
                text: t('Al_Saif_form_phone'),
                phone: "+966596003333",
                icons: <FaPhoneAlt />,
            },
            email: {
                text: t('Al_Saif_form_email'),
                email: t('Al_Saif_contact_us_email'),
                icons: <FaEnvelope />,
            }
        }
    
  return (
     <div className=' flex flex-col items-start justify-start gap-4'>
                    <div className='text-black'>
                        <h1 className='text-[24px] font-[600] '>{t('Al_Saif_contact_us_title')}
                        </h1>
                        <hr className=' border-5 border-[#006fba] w-[70%]' />
                    </div>
                    <p className='text-black/50 w-full md:w-[80%]'>{t('Al_Saif_contact_us_description')}</p>
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
  )
}

export default ContactUsInformation
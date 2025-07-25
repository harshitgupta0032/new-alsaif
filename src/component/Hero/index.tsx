'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { FaInfoCircle } from 'react-icons/fa';
import { CiCalculator1 } from 'react-icons/ci';
import Button from '../common/Button';
import Image from 'next/image';
import { useScrollNavigation } from '@/hooks/UseScrollNavigaion';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

const images = [
  '/assets/truck1.jpg',
  '/assets/truck2.jpg',
];

const Hero = () => {

  const ScrollNavigation = useScrollNavigation();;
  const {t} = useTranslation();

  return (
    <section
      id="home"
      className="relative w-full min-h-[500px] sm:min-h-[400px] md:min-h-screen lg:min-h-[calc(100vh-72px)] 2xl:min-w-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden bg-black font-sans"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <Swiper
         key={i18n.language}
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          allowSlidePrev={false}
          allowTouchMove={false}
          className="w-full h-full"
          dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
          speed={1200}
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                className="object-cover object-center w-full h-full"
                draggable={false}
                fill
                priority={idx === 0}
                quality={90}
                sizes="100vw"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />
        <div className="absolute inset-0 z-20 flex bg-black/40 flex-col items-center justify-center gap-3 w-full px-4 sm:px-8 py-12 md:py-20 text-center">
          <div>
            <h1 className="text-white  -tracking-tighter font-extrabold text-3xl md:text-4xl lg:text-5xl mb-4 space-x-3 space-y-3">
              <span className="text-[#006fba] border-white"> {t("ALSAIF Group")} </span> {t("for Land Transport")} <br className="hidden md:block" />
              <span> {t("Powering Your Business with")}</span>  <br className="hidden md:block" />
              <span className="text-[#006fba]"> {t("Reliable Fleet Solutions")} </span>
            </h1>
            <p className="px-6  -tracking-tighter text-gray-200 text-sm md:text-xl max-w-2xl mx-auto my-5  sm:my-8 md:my-10 drop-shadow">
              {t("Access our diverse fleet of trucks, trailers, and tippers for seamless logistics and construction operations.")}
            </p>
          </div>
          <div className="flex flex-wrap flex-row gap-4 w-full sm:w-auto justify-center items-center mb-8">
            <Button
              className="flex items-center justify-center -tracking-tighter border-2 border-[#006fba] hover:border-white hover:bg-white hover:text-blue-600 text-sm  gap-2 md:px-2 2xl:px-6 md:py-2 2xl:py-3 rounded-full md:text-[14px] 2xl:text-[17px] shadow-lg transition"
              onClick={() =>
                  ScrollNavigation({ name: "Contact", href: "#contact" })
                }
            >
              <CiCalculator1 className=" hover:bg-blue-600 text-2xl" />
              {t("Get Instant Quote")}
            </Button>
            <Button
              className="flex items-center justify-center -tracking-tighter gap-2 md:px-2 md:py-2 2xl:px-6 2xl:py-3 bg-transparent rounded-full border-2 border-white text-white   text-sm  md:text-[14px] 2xl:text-[17px] hover:bg-white hover:text-blue-700 transition"
              onClick={() => ScrollNavigation({ name: 'Explore Services', href: '#services' })}
            >
              <FaInfoCircle className="text-lg" />
              {t("Explore Services")}
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
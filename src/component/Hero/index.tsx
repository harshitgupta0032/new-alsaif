'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaInfoCircle } from 'react-icons/fa';
import { CiCalculator1 } from 'react-icons/ci';
import Button from '../common/Button';
import Image from 'next/image';
import { useScrollNavigation } from '@/hooks/UseScrollNavigaion';
import QuotesModel from '../modals/QuotesModel';

const images = [
  '/assets/truck1.jpg',
  '/assets/truck2.jpg',
];

const Hero = () => {

  const ScrollNavigation = useScrollNavigation();
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-[500px] sm:min-h-[400px] md:min-h-screen lg:min-h-[calc(100vh-72px)] 2xl:min-w-[calc(100vh-80px)] flex items-center justify-center text-center overflow-hidden bg-black font-sans"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          allowSlidePrev={false}
          allowTouchMove={false}
          className="w-full h-full"
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
            <h1 className="text-white font-extrabold text-lg sm:text-2xl  md:text-[36px] 2xl:text-[48px] mb-4 tracking-tight">
              <span className="text-blue-400 border-white">ALSAIF Group</span> for Land Transport <br className="hidden md:block" />
              <span>Powering Your Business</span> with <br className="hidden md:block" />
              <span className="text-blue-400">Reliable Fleet Solutions</span>
            </h1>
            <p className="px-6 text-gray-200 text-[10px] md:text-[12px] lg:text-[15px] 2xl:text-[20px] max-w-2xl mx-auto mb-8 font-medium drop-shadow">
              Access our diverse fleet of trucks, trailers, and tippers for seamless logistics and construction operations.
            </p>
          </div>
          <div className="flex flex-wrap flex-row gap-4 w-full sm:w-auto justify-center items-center mb-8">
            <Button
              className="flex items-center justify-center -tracking-tighter border-2 border-blue-500 hover:border-white hover:bg-white hover:text-blue-600 text-sm  gap-2 md:px-2 2xl:px-6 md:py-2 2xl:py-3 rounded-full md:text-[14px] 2xl:text-[17px] shadow-lg transition"
              onClick={() => setIsModalOpen(true)}
            >
              <CiCalculator1 className=" hover:bg-blue-600 text-2xl" />
              Get Instant Quote
            </Button>
            <Button
              className="flex items-center justify-center -tracking-tighter gap-2 md:px-2 md:py-2 2xl:px-6 2xl:py-3 bg-transparent rounded-full border-2 border-white text-white   text-sm  md:text-[14px] 2xl:text-[17px] hover:bg-white hover:text-blue-700 transition"
              onClick={() => ScrollNavigation({ name: 'Explore Services', href: '#services' })}
            >
              <FaInfoCircle className="text-lg" />
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      <QuotesModel isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
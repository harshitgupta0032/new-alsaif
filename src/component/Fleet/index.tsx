'use client';
import Image from 'next/image';

const fleetData = [
  {
    title: 'Delivery Trucks',
    description: 'Perfect for cargo and logistics operations',
    image: '/assets/truck3.jpg',
  },
  {
    title: 'Freight Trucks',
    description: 'Heavy-duty transportation solutions',
    image: '/assets/doctor-laboratory.avif',
  },
  {
    title: 'Medium Trucks',
    description: 'Versatile mid-size transportation',
    image: '/assets/bus.jpg',
  },
  {
    title: 'Commercial Trucks',
    description: 'Professional fleet vehicles',
    image: '/assets/car.jpg',
  },
];

const stats = [
  { value: '150', label: 'Vehicles in Fleet', color: 'text-blue-600' },
  { value: '99%', label: 'Uptime Percentage', color: 'text-green-600' },
  { value: '5000', label: 'Happy Customers', color: 'text-purple-600' },
  { value: '24h', label: 'Hour Support', color: 'text-red-600' },
];

const Fleet = () => {
  return (
  <div className='min-h-screen'>
    <section id='fleet' className="py-13 px-4 md:px-8 lg:px-21 bg-[#f9fbff] text-center">
      <h2 className="text-black text-2xl  sm:text-3xl md:text-4xl lg:text-[36px] 2xl:text-[40px] font-bold  mb-4">
        Our <span className="text-blue-500">Premium Fleet</span>
      </h2>
      <p className="text-gray-600 text-[10px] sm:text-[12px] md:text-[13px] lg:text-[15px] 2xl:text-[18px] mb-5">
        Modern, well-maintained vehicles equipped with latest safety features and comfort amenities for your peace of mind.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {fleetData.map((item, idx) => (
          <div key={idx} className="">
           <div className='rounded-2xl overflow-hidden bg-white shadow group hover:shadow-xl transition flex flex-col mb-5 h-[300px] w-full sm:w-[300px] md:w-auto '>
            <div className="relative w-full h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 2xl:px-3 text-left flex-1">
              <h3 className="text-lg 2xl:text-2xl font-semibold text-neutral-900">{item.title}</h3>
              <p className="text-sm 2xl:text-[17px] text-gray-600">{item.description}</p>
            </div>
           </div>
            <div className="bg-white rounded-2xl shadow py-6 text-center flex flex-col items-center justify-center mb-5 w-full sm:w-[300px] md:w-auto">
              <h3 className={`text-3xl 2xl:text-4xl font-bold ${stats[idx].color}`}>{stats[idx].value}</h3>
              <p className="text-sm 2xl:text-lg text-gray-700 mt-2">{stats[idx].label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  );
};

export default Fleet;

import React from "react";
import { CustomButton } from ".";
import { hero_bg } from "@/public";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='flex  lg:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='sm:px-16 px-6 py-4 pt-36 flex-1 md:absolute z-10'>
        <h1 className='2xl:text-[72px] lg:text-[64px] xl:max-w-[600px] md:max-w-[550px] text-[40px] font-extrabold '>
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className='xl:text-[27px] md:text-[21px] text-[19px]   text-stone-700 font-light max-w-[380px] xl:max-w-[500px] mt-5'>
          Streamline your car rental experience our effortless booking process.
        </p>
        <CustomButton
          title='Explore Cars'
          customStyle='bg-blue-700 mt-10 text-[19px] rounded-full text-white'
        />
      </div>
      <div className='   flex justify-end items-end  w-full md:h-screen'>
        <div className='absolute z-10  max-md:max-w-[520px]'>
          <Image
            src='/assets/images/hero.png'
            alt='Hero'
            width={700}
            height={400}
            className='object-contain '
          />
        </div>
        <div className='max-md:max-w-[600px] '>
          <Image
            src={hero_bg}
            width={1100}
            alt=''
            className=' object-contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

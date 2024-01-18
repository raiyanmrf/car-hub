import React from "react";
import { CustomButton } from ".";
import { hero_bg } from "@/public";
import Image from "next/image";

const Hero = () => {
  return (
    <section className='flex lg:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='sm:px-16 px-6 py-4 pt-36 flex-1 lg:absolute'>
        <h1 className='2xl:text-[72px] sm:text-[64px] xl:max-w-[600px] lg:max-w-[550px] text-[40px] font-extrabold '>
          Find, book, rent a car—quick and super easy!
        </h1>
        <p className='xl:text-[27px] text-[22px] max-sm:text-[19px] text-stone-700 font-light lg:max-w-[450px] xl:max-w-[500px] mt-5'>
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title='Explore Cars'
          customStyle='bg-blue-700 mt-10 text-[19px] rounded-full text-white'
        />
      </div>
      <div className='   flex justify-end items-end  w-full xl:h-screen'>
        <Image
          src='/assets/images/hero.png'
          alt='Hero'
          width={700}
          height={400}
          className='object-contain absolute'
        />

        <Image src={hero_bg} width={1100} alt='' className=' object-cover' />
      </div>
    </section>
  );
};

export default Hero;

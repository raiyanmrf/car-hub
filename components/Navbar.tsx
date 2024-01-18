import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='flex max-w-[1440px] mx-auto justify-between items-center py-6 sm:px-16'>
        <Link href='/'>
          <Image
            src='logo.svg'
            alt='logo'
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <Link href='/'>
          <CustomButton title='Sign In' customStyle='bg-white ' />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;

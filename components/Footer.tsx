import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Footer = () => {
  return (
    <div className='relative z-10 w-full bg-gradient-to-b from-sky-200 to-sky-100'>
      <div className='mx-auto max-w-[1440px] text-black flex flex-wrap max-sm:text-[11px] text-sm sm:px-16 px-6 py-4  justify-between'>
        <div>
          <Link href='/'>
            <Image
              src='logo.svg'
              alt='logo'
              width={118}
              height={18}
              className='object-contain'
            />
          </Link>
          <p className='text-base text-gray-700'>
            Carhub 2023 <br />
            All Rights Reserved &copy;
          </p>
        </div>{" "}
        {footerLinks.map(l => (
          <div className='' key={l.title}>
            <h1 className='font-bold'>{l.title}</h1>
            <div className='flex flex-col'>
              {l.links.map(links => (
                <Link href={links.url}>{links.title}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

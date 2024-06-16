"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'; 
import { AnimatedHamburgerButton } from './hamburger-button';

function Header() {
    const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const currentPosition = window.scrollY;
    setScrolling(currentPosition > scrollTop && currentPosition > 0);
    setScrollTop(currentPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollTop]);
  return (
    <header className={`z-10 sticky top-0 left-0 h-fit w-screen px-8 md:px-16 xl:px-32 flex justify-between items-center transition-transform duration-300 ${
        scrolling ? "-translate-y-full" : "translate-y-0"
      }`}>
      <div className='z-10 w-22 h-full'>
        <Image src={"/asamaan_logo.png"} alt='Asamaan Logo' height={100} width={100} className='invert'/>
      </div>
      <div>
        <AnimatedHamburgerButton />
      </div>
    </header>
  )
}

export default Header

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import MobileNav from './MobileNav';
import { SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import { SignedOut } from '@clerk/nextjs';


const Navbar = () => {
  return (
    <nav className='flex justify-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
      <Link href= "/" className='flex items-center gap-1'>
        <Image  
        src="/icons/logo.svg"
        height={32}
        width={32}
        alt='logo'
        className='max-sm:size-10'
        />
        <p className='text-[26px] px-4 text-white font-extrabold max-sm:hidden' >Boom</p>
      </Link>
      <div className='flex flex-between items-center gap-5'>
        {/*Clerk User Management*/}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        <MobileNav />
      </div>
      
    </nav>
  )
}

export default Navbar

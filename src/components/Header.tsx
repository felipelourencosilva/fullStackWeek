'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'Next-auth/react'
import {AiOutlineMenu} from 'react-icons/ai'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { status, data } = useSession();


  const handleLoginClick = () => {
    setMenuIsOpen(!menuIsOpen)
    signIn()
  }
  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)
  const handleLogoutClick = () => signOut()

  return (
    <div className="container mx-auto p-5 h-[93px] py-0 justify-between items-center flex" >
      <div className='relative h-[32px] w-[182px]'>
        <Image src="/logo.svg" alt='FullStackWeek' fill/>
      </div>

    {status === 'unauthenticated' && (
      <button className='text-primary text-sm font-semibold' onClick={handleLoginClick}>Login</button>
    )}

    {status === "authenticated" && data.user && (
      <div className="flex items-center gap-3 border-grayLighter border-solid border rounded-full p-2 px-3 relative" >
        <AiOutlineMenu size={16} onClick={handleMenuClick} className='cursor-pointer'/>

        <Image height={32} width={32} src={data.user.image!} alt={data.user.name! }  className='rounded-full shadow-md'/>

        {menuIsOpen && (
          <div className='absolute top-14 left-0 w-full h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center'>
            <button className='text-primary text-sm font-semibold' onClick={handleLogoutClick}>Logout</button>
          </div>
        )}
      </div>
    )}
  </div>
  )
}

export default Header
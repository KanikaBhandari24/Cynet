import React from 'react'
import { Border } from './Border'
import { Image } from './Image'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const ContactUs = () => {
  return (
    <div className='w-full px-36 py-16 flex h-screen bg-dark-green'>
        <div className='w-1/2 '>
            <div className='mb-7'>
                <h1 className='text-green mont-bold text-8xl tracking-tighter'>Contact Us</h1>
                <p className='text-white mont-md text-xl font-medium w-[60%] mt-5'>Schedule a free consultation or apply as a digital accessibility expert</p>
            </div>
            <Border />
            <div className='flex gap-[4.5rem]'>
                <p className='mont-bold text-l-g text-2xl tracking-tighter'>Phone</p>
                <p className='text-white mont-md text-2xl'>(123) 456-7890</p>
            </div>
            <Border />
            <div className='flex gap-[5.2rem]'>
                <p className='mont-bold text-l-g text-2xl tracking-tighter'>Email</p>
                <p className='text-white mont-md text-2xl'>hello@reallygreatsite.com</p>
            </div>
            <Border />
            <div className='flex items-center gap-[5rem]'>
                <p className='mont-bold text-l-g text-2xl tracking-tighter'>Social</p>
                <div className='flex gap-4 items-center'>
                    <FaFacebookF className='text-white text-3xl' />
                    <FaInstagram className='text-white text-4xl' />
                </div>
            </div>
            <Border />
            <div className='w-[65%] mt-12'>
                <p className='mont-md text-white text-xl tracking-tighter'>We are an accessible workplace. Persons with disabilities are welcome to apply. </p>
            </div>
        </div>
        <div className='w-[50%]  -mt-16 h-[90vh]'>
            <Image src={'./src/assets/model_contact_us.jpg'} />
        </div>
    </div>
  )
}

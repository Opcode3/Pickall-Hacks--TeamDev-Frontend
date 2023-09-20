import Image from 'next/image'
import React from 'react'

const CarViewItem = () => {

  return (
    <a href="">
        <div className='flex hover:bg-gray-100 transition-all cursor-pointer hover:shadow-lg rounded-xl overflow-hidden border'>
            <div className=" relative w-[291px] h-[176px]">
                <Image src={'/car.jpg'} alt='' fill sizes="(min-width: 808px) 50vw, 100vw" 
                style={{
                    objectFit: 'cover', // cover, contain, none
                }}
                />
            </div>
            <div className="w-full py-2 px-5">
                <div className=" flex items-center justify-between w-full">
                    <h3 className=' text-xl font-bold text-gray-800'>Alfa Romeo Giulia 20205</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                </div>
                <div className="pt-3 flex justify-between flex-col h-[132px]">
                    <div className="flex flex-wrap items-center text-xs gap-2">
                        <span className='px-2 py-1 bg-pickall-primary bg-opacity-30 rounded-2xl'> <b className=' font-semibold'>No of persons: </b> 5</span>
                        <span className='px-2 py-1 bg-pickall-primary bg-opacity-30 rounded-xl'> <b className=' font-semibold'>No of doors: </b> 4</span>
                    </div>
                    <span className='text-sm text-gray-800 block text-right'> ₦1,200/day <small className="block underline"> ₦90,000 est. total</small></span>
                </div>
            </div>
        </div>
    </a>
  )
}

export default CarViewItem
import React from 'react'

type LocationSearchType = {
    title: string
}
const LocationSearch = ({title}:LocationSearchType) => {
  return (
    <label className="grid border rounded py-1 px-3 bg-white grid-cols-[30px_auto] w-full items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <div className=" grid">
            <span className='text-[8px] text-pickall-primary'>{title}</span>
            <input type="search" placeholder='City, Airport, hotel' className=' py-1 text-xs border-none outline-none' />
        </div>
    </label>
  )
}

export default LocationSearch
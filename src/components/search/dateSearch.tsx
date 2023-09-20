import React from 'react'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type DateSearchType = {
    title: string
}
const DateSearch = ({title}:DateSearchType) => {
  const [startDate, setStartDate] = React.useState(new Date());

  return (
    <label className="grid group hover:border-pickall-primary border rounded py-1 px-3 bg-white grid-cols-[25px_auto] items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 group-hover:stroke-pickall-primary">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
        </svg>

        <div className=" grid">
            <span className='text-[8px] text-pickall-primary'>{title}</span>
            <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} className=' text-xs py-0 outline-none border-none' />
        </div>
    </label>
  )
}

export default DateSearch
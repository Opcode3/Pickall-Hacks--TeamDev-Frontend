import React from 'react'

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

type TimeSearchType = {
    title: string
}

function generateTimeArray() {
  const timeArray = [];
  
  for (let hour = 0; hour <= 23; hour++) {
    for (let minute = 0; minute <= 30; minute += 30) {
      const isAM = hour < 12;
      const ampm = isAM ? 'AM' : 'PM';
      const formattedHour = isAM ? hour : hour - 12;
      const formattedHourString = formattedHour === 0 ? '12' : formattedHour.toString().padStart(2, '0');
      const formattedMinute = minute.toString().padStart(2, '0');
      const timeString = `${formattedHourString}:${formattedMinute} ${ampm}`;
      if(timeString == '12:00 AM'){
        timeArray.push('Midnight');
        continue;
      }
      if(timeString == '12:00 PM'){
        timeArray.push('Noon');
        continue;
      }
      timeArray.push(timeString);
    }
  }
  
  return timeArray;
}


const TimeSearch = ({title}:TimeSearchType) => {
  const [startDate, setStartDate] = React.useState(new Date());
  const timeList = generateTimeArray();
  return (
    <label className="grid border rounded py-1 px-3 bg-white items-center">
        <span className='text-[8px] text-pickall-primary'>{title}</span>
        <select name="" id="" className=' py-1 text-xs -ml-1 border-none outline-none'>
          { timeList.map( slot => <option key={slot} value={slot}>{slot}</option>)}
        </select>
    </label>
  )
}

export default TimeSearch
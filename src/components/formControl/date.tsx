import React, { useState } from "react";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export const ExampleDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className=" relative flex flex-col">
      <span>Pick-up location</span>
      <DatePicker selected={startDate} onChange={(date: Date) => setStartDate(date)} />
    </div>
  );
};
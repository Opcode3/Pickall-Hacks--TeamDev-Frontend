import React from 'react'
import CheckBox from '../formControl/checkBox'
import LocationSearch from './locationSearch'
import DateSearch from './dateSearch'
import TimeSearch from './timeSearch'

const SearchHomeCar = () => {
  return (
    <section className=' h-fit bg-pickall-primary mx-auto px-[8%] py-6 bg-opacity-10  block'>
        <div className=" max-w-full w-[900px] mx-auto ">
          <CheckBox />
          <div className="flex flex-col items-center gap-2">
            <div className=" w-full flex gap-2">
              <LocationSearch title='Pick-up location' />
              <DateSearch title='Pick-up day' />
              <TimeSearch title='Pick-up time' />


            </div>
            <div className="flex w-full gap-2">
            <LocationSearch title='Drop-off location' />
              <DateSearch title='Drop-off day' />
              <TimeSearch title='Drop-off time' />
            </div>
          </div>
        </div>
    </section>
  )
}

export default SearchHomeCar
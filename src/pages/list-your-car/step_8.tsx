import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserLayout from '@/layouts/userLayout'
import Meta from '@/components/common/meta'
import Input from '@/components/formControl/input'
import { useRef } from 'react'
import Button from '@/components/formControl/button'
import InputLabel from '@/components/formControl/inputLabel'
import CheckBox from '@/components/formControl/checkBox'
import CheckInput from '@/components/formControl/checkInput'
import { CarGallery } from '@/components/lists/cargallery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const emailRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const firstNameRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)


  const primaryGoal = [
    "1 hour", "2 hours", "3 hours (recommended)", "6 hours", "12 hours", "1 day"
  ]

  const tripDuration = [
    "Hourly", "1 (recommended)", "2 day", "3 day", "4 days", "5 days"
  ]


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Unable to connect to server!")
  };


  

  return (
    <>
      <UserLayout title=''>
        <>
          <Meta 
            title="Pickall | List your car - Step 2"
            desc="Pickall car hiring app is an innovative and seamless platform for hailing cars. Our mission is to provide our users with a premium driving experience like no other, offering a convenient and efficient way to access top-tier vehicles and on-demand transportation solutions. Whether you're a luxury car owner, a discerning individual seeking an exclusive ride, or a dispatch hailing business looking to expand your reach, Pickall is the destination for all your transportation needs."
            url=""
            icon="../favicon.ico"
          />
          <main className=' min-h-[calc(100vh-410px)]'>
            <form onSubmit={ e => submitHandler(e)} className=' w-[500px] mx-auto mt-[80px] mb-[60px]'>
              <h1 className=' text-3xl font-bold w-fit'>List your Car</h1>
              <div className="text-xs flex items-center pb-3">
                <span className='pr-3'>7 of 8 steps</span> |
                <span className='ml-3 bg-pickall-primary hover:bg-opacity-90 px-2 rounded-xl cursor-pointer text-white py-1'>View all steps</span>
              </div>
              <section className='grid gap-2'>
                <h3 className=' font-semibold mb-0'>Safety and quality standard</h3>
                
                <button className='mt-2 bg-pickall-primary hover:bg-opacity-50 bg-opacity-90  text-white w-fit text-sm py-1 px-5 rounded'>Publish</button>
              </section>
            </form>
          </main>
        </>
      </UserLayout>
    </>
  )
}

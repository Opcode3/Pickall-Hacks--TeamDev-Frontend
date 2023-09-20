import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserLayout from '@/layouts/userLayout'
import Meta from '@/components/common/meta'
import Input from '@/components/formControl/input'
import { useRef } from 'react'
import Button from '@/components/formControl/button'
import InputLabel from '@/components/formControl/inputLabel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const phoneRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)


  const forgotPasswordHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <>
      <UserLayout title=''>
        <>
          <Meta 
            title="Pickall | Create an account"
            desc="Pickall car hiring app is an innovative and seamless platform for hailing cars. Our mission is to provide our users with a premium driving experience like no other, offering a convenient and efficient way to access top-tier vehicles and on-demand transportation solutions. Whether you're a luxury car owner, a discerning individual seeking an exclusive ride, or a dispatch hailing business looking to expand your reach, Pickall is the destination for all your transportation needs."
            url=""
            icon="../favicon.ico"
          />
          <main className=' min-h-[calc(100vh-410px)]'>
            <form onSubmit={ e => forgotPasswordHandler(e)} className=' w-[400px] mx-auto mt-[80px] mb-[60px]'>
              <h1 className=' text-3xl font-bold pb-3 w-fit'>
                Confirm Password
                <small className='text-xs font-medium block'>Fill in the below field appropriately; we will send you a reset password link to your email.</small>
              </h1>
              <section className='grid gap-2'>
                <InputLabel placeholder='Last Name' htmlRef={lastNameRef} type='text' />
                <InputLabel placeholder='Phone Number' htmlRef={phoneRef} type='number' />
                <Button label='Continue' />
                <span className=' block text-sm mt-5 mb-2 text-center'>Already have an account? <a href="/account/login" className=' text-pickall-primary transition-all hover:underline'>Log in</a> </span>
              </section>
            </form>
          </main>
        </>
      </UserLayout>
    </>
  )
}

import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserLayout from '@/layouts/userLayout'
import Meta from '@/components/common/meta'
import Input from '@/components/formControl/input'
import { useRef } from 'react'
import Button from '@/components/formControl/button'
import InputLabel from '@/components/formControl/inputLabel'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <UserLayout title=''>
        <>
          <Meta 
            title="Pickall | Login"
            desc="Pickall car hiring app is an innovative and seamless platform for hailing cars. Our mission is to provide our users with a premium driving experience like no other, offering a convenient and efficient way to access top-tier vehicles and on-demand transportation solutions. Whether you're a luxury car owner, a discerning individual seeking an exclusive ride, or a dispatch hailing business looking to expand your reach, Pickall is the destination for all your transportation needs."
            url=""
            icon="../favicon.ico"
          />
          <main className=' min-h-[calc(100vh-410px)]'>
            <form className=' w-[400px] mx-auto mt-[80px] mb-[60px]'>
              <h1 className=' text-3xl font-bold pb-3'>Login</h1>
              <section className='grid gap-2'>
                <InputLabel placeholder='Email address' htmlRef={emailRef} type='text' />
                <InputLabel placeholder='Password' htmlRef={passwordRef} type='password' />
                <span className=' text-xs block text-right'> <Link href="/account/forgot-password" className='text-pickall-primary transition-all hover:underline'>Forgot Password?</Link> </span>
                <Button label='Sign in' />
                <span className=' block text-sm mt-5 mb-2 text-center'>New on our platform? <Link href="/account/register" className=' text-pickall-primary transition-all hover:underline'>Create an account</Link> </span>
              </section>
            </form>
          </main>
        </>
      </UserLayout>
    </>
  )
}

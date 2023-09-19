import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserLayout from '@/layouts/userLayout'
import Meta from '@/components/common/meta'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <UserLayout title=''>
        <>
          <Meta 
            title="Pickall | Car hire and sharing marketplace"
            desc="Pickall car hiring app is an innovative and seamless platform for hailing cars. Our mission is to provide our users with a premium driving experience like no other, offering a convenient and efficient way to access top-tier vehicles and on-demand transportation solutions. Whether you're a luxury car owner, a discerning individual seeking an exclusive ride, or a dispatch hailing business looking to expand your reach, Pickall is the destination for all your transportation needs."
            url=""
            icon=""
          />
          <main className=' min-h-[calc(100vh-410px)]'>


          </main>
        </>
      </UserLayout>
    </>
  )
}

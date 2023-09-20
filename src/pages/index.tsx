import Image from 'next/image'
import { Inter } from 'next/font/google'
import UserLayout from '@/layouts/userLayout'
import Meta from '@/components/common/meta'
import SearchHomeCar from '@/components/search/homeCar'
import MapWithSearch from '@/components/formControl/MapWithSearch'
import LocationSearchInput from '@/components/google/LocationSearchInput'
import { useState } from 'react'
import CarViewItem from '@/components/lists/carViewItem'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [address, setAddress] = useState<string>('');
  const [latLng, setLatLng] = useState<null | { lat: number; lng: number }>(null);

  return (
    <>
      <UserLayout title=''>
        <>
          <Meta 
            title="Pickall | Car hire and sharing marketplace"
            desc="Pickall car hiring app is an innovative and seamless platform for hailing cars. Our mission is to provide our users with a premium driving experience like no other, offering a convenient and efficient way to access top-tier vehicles and on-demand transportation solutions. Whether you're a luxury car owner, a discerning individual seeking an exclusive ride, or a dispatch hailing business looking to expand your reach, Pickall is the destination for all your transportation needs."
            url=""
            icon="favicon.ico"
          />
          <main className=' min-h-[calc(100vh-410px)]'>
            <SearchHomeCar />
            <div className="grid grid-cols-[250px_auto] mx-auto gap-4 w-fit">
              <section className='bg-white border px-2 my-8 rounded h-[400px]'></section>
              <section className='rounded min-h-[400px] px-2 py-8 grid gap-3 w-[800px]'>
                <CarViewItem url="" />
                <CarViewItem />
                <CarViewItem />
              </section>
            </div>
          </main>
        </>
      </UserLayout>
    </>
  )
}

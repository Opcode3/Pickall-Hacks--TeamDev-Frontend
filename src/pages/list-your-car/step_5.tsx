import Image from "next/image";
import { Inter } from "next/font/google";
import UserLayout from "@/layouts/userLayout";
import Meta from "@/components/common/meta";
import Input from "@/components/formControl/input";
import { useRef } from "react";
import Button from "@/components/formControl/button";
import InputLabel from "@/components/formControl/inputLabel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const emailRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const registrationFromHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const primaryGoal = [
    "1 hour",
    "2 hours",
    "3 hours (recommended)",
    "6 hours",
    "12 hours",
    "1 day",
  ];

  const tripDuration = [
    "Hourly",
    "1 (recommended)",
    "2 day",
    "3 day",
    "4 days",
    "5 days",
  ];

  const maxTripDuration = [
    "5 days",
    "1 week",
    "2 weeks",
    "1 month",
    "3 months",
    "Any (recommended)",
  ];

  return (
    <>
      <UserLayout title="">
        <>
          <Meta
            title="Pickall | List your car - Step 2"
            desc="Pickall car hiring app is an innovative and seamless platform for hailing cars. Our mission is to provide our users with a premium driving experience like no other, offering a convenient and efficient way to access top-tier vehicles and on-demand transportation solutions. Whether you're a luxury car owner, a discerning individual seeking an exclusive ride, or a dispatch hailing business looking to expand your reach, Pickall is the destination for all your transportation needs."
            url=""
            icon="../favicon.ico"
          />
          <main className=" min-h-[calc(100vh-410px)]">
            <form
              onSubmit={(e) => registrationFromHandler(e)}
              className=" w-[500px] mx-auto mt-[80px] mb-[60px]"
            >
              <h1 className=" text-3xl font-bold w-fit">List your Car</h1>
              <div className="text-xs flex items-center pb-3">
                <span className="pr-3">5 of 8 steps</span> |
                <span className="px-3">Next: Car details</span> |
                <span className="ml-3 bg-pickall-primary hover:bg-opacity-90 px-2 rounded-xl cursor-pointer text-white py-1">
                  View all steps
                </span>
              </div>
              <section className="grid">
                <h3 className=" font-semibold mb-0">Your Availability</h3>
                <div className="">
                  <label className=" text-xs font-light" htmlFor="">
                    How much advance notice do you need before a trip start?
                  </label>
                  <select
                    name=""
                    className=" focus:border-pickall-primary px-3 py-2 text-xs font-normal border outline-none block w-full border-gray-500 rounded-sm"
                  >
                    {primaryGoal.map((goal) => (
                      <option value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label className=" text-xs font-light" htmlFor="">
                    What is the shortest possible trip you'll accept?
                  </label>
                  <select
                    name=""
                    className=" focus:border-pickall-primary px-3 py-2 text-xs font-normal border outline-none block w-full border-gray-500 rounded-sm"
                  >
                    {tripDuration.map((goal) => (
                      <option value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label className=" text-xs font-light" htmlFor="">
                    What is the longest possible trip you'll accept?
                  </label>
                  <select
                    name=""
                    className=" focus:border-pickall-primary px-3 py-2 text-xs font-normal border outline-none block w-full border-gray-500 rounded-sm"
                  >
                    {maxTripDuration.map((goal) => (
                      <option value={goal}>{goal}</option>
                    ))}
                  </select>
                </div>
                <button className="mt-2 bg-pickall-primary hover:bg-opacity-50 bg-opacity-90  text-white w-fit text-sm py-1 px-5 rounded">
                  Next
                </button>
              </section>
            </form>
          </main>
        </>
      </UserLayout>
    </>
  );
}

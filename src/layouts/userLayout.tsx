import AccountIcon from "@/components/icons/accountIcon";
import MenuIcon from "@/components/icons/menuIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type UserLayoutProps = {
  children: JSX.Element;
  title: string;
};

const UserLayout = ({ children }: UserLayoutProps) => {


    const companyList = [
        {
            name: "About Pickall-Car Hire",
            url:"/about"
        },
        {
            name:"Jobs",
            url:"/careers"
        },
        {
            name:"List your cars",
            url:"/list-a-car"
        },
        {
            name:"Contact & support",
            url:"/support"
        }
    ]

    const policiesList = [
        { name:"Privacy", url:""},
        { name:"Terms of use", url:""}
    ]

    const resourcesList = [
        { name:"Help center", url:""}
    ]

    const dateObj = new Date();
        
  return (
    <div>
      <header className=" border-b h-16 px-[7%] flex items-center justify-between">
        <span className=" bg-pickall-primary w-36 h-10 rounded-sm inline-block"></span>
        <ul className=" flex items-center gap-6">
            <li><a href=" " className="border border-black rounded-sm text-sm text-[#333] hover:bg-gray-200 transition-all font-normal py-[6px] px-3">Become a host</a></li>
            <li className=" flex w-fit items-center gap-[2px]">
                <span><MenuIcon /></span>
                <span> <AccountIcon /></span>
            </li>
        </ul>
      </header>
      {children}
      <footer className=" bg-pickall-primary bg-opacity-25 px-[7%] py-8">
        <div className="grid grid-cols-9 min-h-[350px]">
            <span className=" bg-white col-span-3 w-36 h-10 rounded-sm inline-block"></span>
            <ul className=" col-span-2">
                <li className="pb-2 font-semibold text-lg"> Company </li>
                { companyList.map( item => <li key={item.url} className="py-[2px] pl-1"> <Link href={item.url} className=" text-sm hover:text-pickall-primary">{item.name}</Link> </li>) }
            </ul>
            <ul className="col-span-2">
                <li className="pb-2 font-semibold text-lg">Policies</li>
                { policiesList.map( item => <li key={item.url} className="py-[2px] pl-1"> <Link href={item.url} className=" text-sm hover:text-pickall-primary">{item.name}</Link> </li>) }
            </ul>
            <ul className=" col-span-2">
                <li className="pb-2 font-semibold text-lg">Resources</li>
                { resourcesList.map( item => <li key={item.url} className="py-[2px] pl-1"> <Link href={item.url} className=" text-sm hover:text-pickall-primary">{item.name}</Link> </li>) }
            </ul>
        </div>
        <div className="flex justify-between items-center">
            <span className=" text-sm">&copy;{dateObj.getFullYear()} Pickall-car hire</span>
            <span className=" text-sm font-bold">TEAM<b className=" text-pickall-primary">-DEV</b></span>
        </div>
      </footer>
    </div>
  );
};

export default UserLayout;

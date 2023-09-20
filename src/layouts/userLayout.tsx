import AccountIcon from "@/components/icons/accountIcon";
import CarIcon from "@/components/icons/carIcon";
import KeyIcon from "@/components/icons/keyIcon";
import MenuIcon from "@/components/icons/menuIcon";
import SupportIcon from "@/components/icons/supportIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type UserLayoutProps = {
  children: JSX.Element;
  title: string;
};

type MenuListType = {
  name: string;
  url: string;
  section: 0 | 1 | 2 ;
  icon?: React.JSX.Element;
};

const UserLayout = ({ children }: UserLayoutProps) => {
  const companyList = [
    {
      name: "About Pickall-Car Hire",
      url: "/about",
    },
    {
      name: "Jobs",
      url: "/careers",
    },
    {
      name: "List your cars",
      url: "/list-a-car",
    },
    {
      name: "Contact & support",
      url: "/support",
    },
  ];

  const policiesList = [
    { name: "Privacy", url: "/privacy" },
    { name: "Terms of use", url: "/terms-of-use" },
  ];

  const resourcesList = [{ name: "Help center", url: "" }];

  const menuList = [
    { name: "Login", url: "/account/login", section: 0 },
    { name: "Register", url: "/account/register", section: 0 },
    { name: "Become a host", url: "/become-a-host", section: 1, icon: <CarIcon />,},
    { name: "How Pickall-Car Hire Works", url: "/how-pickall-car-hire-works",section: 2, icon: <KeyIcon />,},
    { name: "Seek Help", url: "/help", section: 0, icon: <SupportIcon /> },
  ];

  const dateObj = new Date();

  const [menuToggle, setMenuToggle] = React.useState<boolean>(false);

  return (
    <div>
      <header className="relative">
        <nav className=" border-b h-16 px-[8%] flex items-center justify-between">
          <a href="/" className="w-fit h-fit rounded-sm inline-block relative">
            <Image src={'/images/logo.png'} width={100} height={32} alt="" />
          </a>
          <ul className=" flex items-center gap-6">
            <li>
              <a
                href="/list-your-car"
                className="border border-black rounded-sm text-sm text-[#333] hover:bg-gray-200 transition-all font-normal py-[6px] px-3"
              >
                List your car
              </a>
            </li>
            <li onClick={ e => setMenuToggle(!menuToggle)} className={`flex transition-colors border ${ menuToggle ? ' border-pickall-primary border-opacity-30 bg-pickall-primary bg-opacity-25 ': ' border-transparent' } w-fit hover:bg-pickall-primary hover:bg-opacity-25 py-1 px-2 rounded items-center gap-[2px]`}>
              <span className="block w-[22px]">
                <MenuIcon />
              </span>
              <span className="block w-[24px]">
                {" "}
                <AccountIcon />
              </span>
            </li>
          </ul>
        </nav>
        <ul className={`absolute right-[4%] ${menuToggle ? 'block':'hidden'}  border rounded shadow px-3 py-3 mt-1 bg-white w-fit min-w-[300px]`}>
          {menuList.map((item) => (
            <li
              key={item.name}
              className={` ${item.section === 2 ? "border-t pt-2 mt-1" : item.section === 1 ? "pb-1 mb-1" : ""}`}
            >
              {" "}
              <Link href={item.url} className=" hover:bg-pickall-primary hover:bg-opacity-50 rounded px-2 py-2 flex items-center gap-1 ">
                { item.icon ? <span className=" block w-4">{item.icon}</span> : ""}
                <span className="text-sm">{item.name}</span>
              </Link>{" "}
            </li>
          ))}
          <li> </li>
        </ul>
      </header>
      {children}
      <footer className=" bg-pickall-primary bg-opacity-25 px-[8%] py-8">
        <div className="grid grid-cols-9 min-h-[350px]">
          <span className="col-span-3 w-36 h-10 rounded-sm inline-block">
            <a href="/" className="w-fit h-fit rounded-sm inline-block relative">
                <Image src={'/images/pickall-black.png'} width={300} height={32} alt="" />
            </a>
          </span>
          
          <ul className=" col-span-2">
            <li className="pb-2 font-semibold text-lg"> Company </li>
            {companyList.map((item) => (
              <li key={item.url} className="py-[2px] pl-1">
                {" "}
                <Link
                  href={item.url}
                  className=" text-sm hover:text-pickall-primary"
                >
                  {item.name}
                </Link>{" "}
              </li>
            ))}
          </ul>
          <ul className="col-span-2">
            <li className="pb-2 font-semibold text-lg">Policies</li>
            {policiesList.map((item) => (
              <li key={item.url} className="py-[2px] pl-1">
                {" "}
                <Link
                  href={item.url}
                  className=" text-sm hover:text-pickall-primary"
                >
                  {item.name}
                </Link>{" "}
              </li>
            ))}
          </ul>
          <ul className=" col-span-2">
            <li className="pb-2 font-semibold text-lg">Resources</li>
            {resourcesList.map((item) => (
              <li key={item.url} className="py-[2px] pl-1">
                {" "}
                <Link
                  href={item.url}
                  className=" text-sm hover:text-pickall-primary"
                >
                  {item.name}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between items-center">
          <span className=" text-sm">
            &copy;{dateObj.getFullYear()} Pickall-car hire
          </span>
          <span className=" text-sm font-bold">
            TEAM<b className=" text-pickall-primary">-DEV</b>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default UserLayout;

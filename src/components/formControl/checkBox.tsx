import React from "react";

const CheckBox = () => {
    const [toggle, setToggle]  = React.useState<boolean>(true);
  return (
    <>
        <label onClick={ e => setToggle(!toggle)} className=" relative w-fit flex items-center gap-1 ">
            <span className={`w-5 h-[18px] ${ toggle ? 'bg-pickall-primary': ''} border border-pickall-primary flex items-center justify-center rounded-sm`}>
                <svg
                    className={` ${ toggle ? 'block': 'hidden'} w-4 h-4 top-0 left-[2px]`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </span>
            <span className="text-sm">Drop-off location is the same</span>
        </label>
    </>
  );
};

export default CheckBox;

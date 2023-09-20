import React from "react";

const CheckInput = ({label}:{label:string}) => {
    const [toggle, setToggle]  = React.useState<boolean>(false);
  return (
    <>
        <label onClick={ e => setToggle(!toggle)} className=" relative w-fit flex items-center gap-1 ">
            <span className={`w-3 h-[12px] ${ toggle ? 'bg-pickall-primary': ''} border border-pickall-primary flex items-center justify-center rounded-sm`}>
                <svg
                    className={` ${ toggle ? 'block': 'hidden'} w-3 h-3 top-0 left-[2px]`}
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
            <span className="text-xs">{label}</span>
        </label>
    </>
  );
};

export default CheckInput;

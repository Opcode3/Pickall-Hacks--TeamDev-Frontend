import React from "react";

type InputType = {
  type: "text" | "email" | "number" | "password";
  placeholder?: string;
  ref: React.RefObject<HTMLInputElement>;
};
const Input = ({ type, placeholder, ref }: InputType) => {
  return <input type={type} ref={ref} placeholder={placeholder} className=" focus:border-pickall-primary px-4 py-[10px] text-sm font-normal border outline-none block w-full border-gray-500 rounded-sm" required />;
};

export default Input;

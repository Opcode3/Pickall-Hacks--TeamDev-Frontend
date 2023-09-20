import React from "react";

type InputLabelType = {
  type: "text" | "email" | "number" | "password";
  placeholder?: string;
  htmlRef: React.RefObject<HTMLInputElement>;
};
const InputLabel = ({ type, placeholder, htmlRef }: InputLabelType) => {
  return (
    <div className="">
      <label className=" text-xs font-light" htmlFor={placeholder}>{placeholder}</label>
      <input type={type} ref={htmlRef} id={placeholder} placeholder={placeholder} className=" focus:border-pickall-primary px-3 py-2 text-xs font-normal border outline-none block w-full border-gray-500 rounded-sm" required />
    </div>
  )
};

export default InputLabel;

import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const PreFooter = () => {
  return (
    <div className="bg-[#FAFBFC] px-5 flex flex-col gap-10 md:px-8 py-14 items-center justify-center">
      <h2 className="font-bold text-gray-700 text-3xl mb-2 max-w-[85%] md:max-w-[600px] text-center">
        We are happy to have you here, thanks for being there always.
      </h2>

      <div className="flex">
        <p className="rounded-l-[6px] h-auto flex items-center pl-3 pr-10 border border-[##DAE0E6] text-gray-400 bg-white shadow-inner shadow-[#1018280A]">
          Kuda: 1101893635
        </p>
        <Button />
      </div>

      <div className="flex items-center justify-center gap-6 -mt-4 flex-wrap">
        <p className="flex gap-3 items-center">
          <FaCircleCheck className="text-[#215056]" />
          Fully Secure
        </p>
        <p className="flex gap-3 items-center">
          <FaCircleCheck className="text-[#215056]" />
          24/7 Support
        </p>
        <p className="flex gap-3 items-center">
          <FaCircleCheck className="text-[#215056]" />
          Done Deal
        </p>
      </div>
    </div>
  );
};

export default PreFooter;

const Button = () => {
  return (
    <button className="bg-[#215056] text-white px-4 w-fit group py-3 flex items-center rounded-r-[6px] shadow-inner shadow-[#1018280A]">
      <div className="relative overflow-hidden w-[130px]">
        <span className="invisible">Hover over me</span>
        <span className="absolute top-0 left-0 group-hover:-translate-y-full transition-transform whitespace-nowrap ease-in-out duration-500 hover:duration-300 flex gap-2 items-center w-fit">
          Urgent tukay{" "}
          <Image src="/abeg.png" width={24} height={24} alt="Please Help" />
        </span>
        <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300 w-fit">
          Abeg help me 🙏
        </span>
      </div>
    </button>
  );
};

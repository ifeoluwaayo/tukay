import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const Boss = () => {
  return (
    <div className="bg-[#FAFBFC] px-5 flex flex-col gap-10 md:px-8 pb-10">
      <div className="flex items-center justify-between gap-6 flex-col md:flex-row">
        <div className="w-fit flex flex-col items-center">
          <Image
            src="/boss.png"
            width={500}
            height={500}
            alt="Please Help"
            className="md:-mt-14"
          />
          <p className="text-3xl tracking-wide text-center py-3 font-semibold rounded-lg px-8 bg-[#4297AB]">
            I Greet you boss
          </p>
        </div>
        <div className="flex flex-col gap-5 mt-6 md:mt-20 md:max-w-[50%]">
          <h2 className="font-bold text-gray-700 text-3xl">Boss I Greet Oh</h2>
          <p className="font-normal text-[#5F6D7E]">
            Help me touch that boss way dey with ehn BF, Boss i greet oh... Na
            my guy Pablo with them scorpion and croc na ehn send me come meet
            you, make you give am:
          </p>

          <ul className="flex flex-col gap-1 mb-3">
            <li className="flex gap-2 items-center -tracking-[0.1px] font-normal text-[#5F6D7E]">
              <FaCheck className="text-[#215056]" /> G2 (Garri and groundnut)
            </li>
            <li className="flex gap-2 items-center -tracking-[0.1px] font-normal text-[#5F6D7E]">
              <FaCheck className="text-[#215056]" /> Groceries
            </li>
            <li className="flex gap-2 items-center -tracking-[0.1px] font-normal text-[#5F6D7E]">
              <FaCheck className="text-[#215056]" /> Cassava flecks
            </li>
          </ul>

          <Button />
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-5 mt-6 md:mt-10 md:max-w-[50%]">
          <h2 className="font-bold text-gray-700 text-3xl">
            Sapa nice one nice one
          </h2>
          <p className="font-normal text-[#5F6D7E]">
            Sapa is a state of Ahh God abeg, who we offend, nothing is too small
            to save a life.
          </p>

          <ul className="flex flex-col gap-1 mb-3">
            <li className="flex gap-2 items-center -tracking-[0.1px] font-normal text-[#5F6D7E]">
              <FaCheck className="text-[#215056]" /> Urgent tukay
            </li>
            <li className="flex gap-2 items-center -tracking-[0.1px] font-normal text-[#5F6D7E]">
              <FaCheck className="text-[#215056]" /> Garri
            </li>
            <li className="flex gap-2 items-center -tracking-[0.1px] font-normal text-[#5F6D7E]">
              <FaCheck className="text-[#215056]" /> Drop location
            </li>
          </ul>

          <Button />
        </div>
        <Image
          src="/sapa.png"
          width={500}
          height={500}
          alt="Please Help"
          className="-mt-20"
        />
      </div>
    </div>
  );
};

export default Boss;

const Button = () => {
  return (
    <button className="bg-[#215056] text-white px-4 w-fit group py-3 flex items-center rounded-[6px] shadow-inner shadow-[#1018280A]">
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

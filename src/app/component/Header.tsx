import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex bg-black border-b border-[#BABABA] text-white items-center justify-between px-5 md:px-8 py-3 md:py-5">
      <div className="flex gap-3 items-center">
        <Image src="/logo.png" width={40} height={40} alt="Please Help" />
        <h1 className="font-semibold text-2xl md:3xl">Sapa</h1>

        <ul className="md:flex items-center gap-6 hidden ml-[15vw]">
          <Link href="https://adeayomide.me" className="cursor-pointer">
            About Me 😭
          </Link>
          <li className="cursor-pointer">Sapa 😢</li>
          <li className="cursor-pointer">Help 🥺</li>
        </ul>
      </div>

      <button className="bg-[#215056] px-4 group py-3 flex items-center rounded-[6px] shadow-inner shadow-[#1018280A]">
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
    </header>
  );
};

export default Header;

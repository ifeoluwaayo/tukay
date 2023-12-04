import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-8 bg-[#222222] text-white px-5 flex flex-col gap-8 md:px-8 py-14 items-center justify-center">
      <div className="flex items-center w-full flex-col md:flex-row gap-5 justify-between pb-5 border-b border-[#2E3545]">
        <div className="flex gap-3 items-center">
          <Image src="/logo.png" width={40} height={40} alt="Please Help" />
          <h1 className="font-semibold text-2xl md:3xl">Sapa</h1>
        </div>

        <ul className="flex items-center gap-6">
          <Link href="https://adeayomide.me" className="cursor-pointer">
            About Me 😭
          </Link>
          <li className="cursor-pointer">Sapa 😢</li>
          <li className="cursor-pointer">Help 🥺</li>
        </ul>

        <ul className="flex items-center gap-3">
          <Link href="https://adeayomide.me" className="cursor-pointer">
            <FaFacebook className="text-xl" />
          </Link>
          <Link href="https://adeayomide.me" className="cursor-pointer">
            <FaGoogle className="text-xl" />
          </Link>
          <Link href="https://adeayomide.me" className="cursor-pointer">
            <FaApple className="text-2xl" />
          </Link>
          <Link href="https://adeayomide.me" className="cursor-pointer">
            <FaInstagram className="text-2xl" />
          </Link>
        </ul>
      </div>
      <div className="w-full flex items-center justify-between gap-5 flex-col-reverse md:flex-row text-[#A5ACBA] text-sm">
        <p className="">
          &copy; {new Date().getFullYear()} Sapa. All Rights Reserved.
        </p>
        <ul className="flex items-center gap-6">
          <li className="cursor-pointer">Privacy Policy</li>
          <li className="cursor-pointer">Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

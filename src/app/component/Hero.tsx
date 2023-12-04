import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white px-5 md:px-8 pt-14 flex-col md:flex-row flex items-center">
      <div className="flex flex-col gap-4 z-10">
        <h1 className="font-semibold tracking-wide leading-tight text-5xl">
          Na Beg, I Dey <br />
          Beg
        </h1>
        <p>
          Urgent 2k is a valid Nigerian currency. It is more than an emergency
          fund; it is a lifesaver, a life jacket when you are drowning. In fact,
          this currency has officially been recognized.
        </p>

        <Button />

        <div className="mt-5">
          <h3>How you can support me</h3>

          <div className="flex items-center overflow-scroll no-scrollbar mt-3">
            <Image
              src="/paypal.png"
              width={144}
              height={600}
              alt="Please Help"
            />
            <Image
              src="/opay.png"
              width={90}
              height={600}
              alt="Please Help"
              className="ml-7"
            />
            <Image
              src="/palmpay.png"
              width={143}
              height={600}
              alt="Please Help"
              className="ml-3"
            />
            <Image src="/kuda.png" width={144} height={600} alt="Please Help" />
          </div>
        </div>
      </div>
      <Image
        src="/eiii.png"
        width={600}
        height={600}
        alt="Please Help"
        className="z-[1]"
      />
    </div>
  );
};

export default Hero;

const Button = () => {
  return (
    <button className="bg-[#215056] px-4 w-fit group py-3 flex items-center rounded-[6px] shadow-inner shadow-[#1018280A]">
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

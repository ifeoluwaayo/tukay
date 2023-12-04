import Image from "next/image";

const Currencies = () => {
  return (
    <div className="bg-white px-5 flex flex-col gap-12 md:px-8 py-16">
      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-gray-700 text-3xl mb-2">
          Our Currencies
        </h2>
        <p className="font-normal text-[#5F6D7E] text-center">
          These currencies has been saving lives since 1900
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex flex-col gap-5 relative">
          <Image src="/male.png" width={500} height={600} alt="Please Help" />
          <div>
            <h3 className="font-semibold text-gray-700 text-xl tracking-tight">
              We accepts all forms of digital help
            </h3>
            <p className="text-[#5F6D7E] text-justify max-w-[600px] mt-2">
              Urgent 2k is a valid Nigerian currency. It is more than an
              emergency fund; it is a lifesaver, a life jacket when you are
              drowning. In fact, this currency has officially been recognized.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <Image src="/female.png" width={500} height={600} alt="Please Help" />
          <div>
            <h3 className="font-semibold text-gray-700 text-xl tracking-tight">
              We accepts all forms of digital help
            </h3>
            <p className="text-[#5F6D7E] text-justify max-w-[600px] mt-2">
              Urgent 2k is a valid Nigerian currency. It is more than an
              emergency fund; it is a lifesaver, a life jacket when you are
              drowning. In fact, this currency has officially been recognized.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currencies;

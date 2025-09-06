"use client";
import Image from "next/image";
import GlobalButton from "../MicroComponent/GlobalButton";
import Carousel from "../Components/Carousel";

export default function SectionOne() {
  return (
    <div
      className="relative mx-auto md:mt-16 md:pt-0 pt-[50px] md:px-0 px-[20px] flex flex-col items-center justify-center">
        <div className="flex md:flex-row flex-col md:gap-0 gap-10 justify-between items-start my-3 w-full">
            <div className="md:w-[50%] flex flex-col gap-5 md:ml-16">
                <div>
                    <h1 className="bg-orange-200 w-fit md:text-[38px] text-[30px]">Bring More Customers</h1>
                    <h1 className="bg-orange-400 text-white w-fit md:text-[52px] text-[30px] font-bold">Through Your Door.</h1>
                </div>
                <div>
                    <ul className="md:text-[18px] text-[14px] flex flex-col gap-3 w-fix">
                        <li className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#FF7622"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z" fill="#FFECD4"></path></svg>
                            <div>
                                <span className="text-orange-400 font-bold">Boost your sales</span> by connecting directly with local buyers
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#FF7622"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z" fill="#FFECD4"></path></svg>
                            <div>
                                <span className="text-orange-400 font-bold">Strengthen relationships with customers</span> right in your neighbourhood
                            </div>
                        </li>
                        <li className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z" fill="#FF7622"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.0965 7.39004L9.9365 14.3L8.0365 12.27C7.6865 11.94 7.1365 11.92 6.7365 12.2C6.3465 12.49 6.2365 13 6.4765 13.41L8.7265 17.07C8.9465 17.41 9.3265 17.62 9.7565 17.62C10.1665 17.62 10.5565 17.41 10.7765 17.07C11.1365 16.6 18.0065 8.41004 18.0065 8.41004C18.9065 7.49004 17.8165 6.68004 17.0965 7.38004V7.39004Z" fill="#FFECD4"></path></svg>
                            <div>
                                <span className="text-orange-400 font-bold">Leverage our platform</span> to stand strong against big online retailers
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex gap-5">
                    <GlobalButton/>
                    <h1 className="text-[#7C7C7C] md:text-xl text-[14px]">Boost Your Sales with <br/>
                    Smart Technology!</h1>
                </div>
            </div>
            <div className="md:w-[60%] w-[-webkit-fill-available]">
                <div className="carouselsection">
                    <Carousel/>
                </div>
            </div>
        </div>
      <div className="section1 md:pt-[60px] pt-[50px] md:px-[80px] flex md:flex-row flex-col gap-5 items-center justify-between">
        <div className="flex flex-col gap-5 md:w-[50%]">
            <h1 className="md:text-[42px] text-[25px]">Empower Your Business Today!</h1>
            <p className="md:text-[20px] text-[14px] text-[#656565]">
			At Beary Local, we’re passionate about revitalising local retail. With a deep understanding of the challenges small businesses face, our platform bridges the gap between traditional commerce and digital capabilities, ensuring you’re never left behind.</p>
        </div>
        <div className="md:w-[50%]">
            <Image
            src='/about-1.png'
            width={575}
            height={460}
            alt="about-image"
            ></Image>
        </div>
      </div>
    </div>
  );
}

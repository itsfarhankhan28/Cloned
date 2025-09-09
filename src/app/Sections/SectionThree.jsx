"use client"
import React from 'react'
import Image from 'next/image'
import GlobalButton from '../MicroComponent/GlobalButton'

const SectionThree = () => {
  return (
    <>
    <div className="text-gray-600 body-font">
        <div className="py-16 mx-auto flex flex-col">
            <div className=" mx-auto md:px-[80px] px-[20px]">
            <div className="flex flex-col md:flex-row items-center md:gap-5 gap-10 bg-[#ffecd4] rounded-3xl shadow-[0px_6px_7px_2px_rgba(166,166,166,0.97)]">
                <div className="text-center">
                    <img src="/Benefits-for-Businesses.png" alt="image" className='md:w-[480px] md:h-[500px]'/>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t sm:mt-0 text-center md:text-left md:justify-start md:items-start justify-center items-center flex flex-col gap-5 md:pr-3 pr-5 md:pl-0 pl-5 md:pb-0 pb-10">
                <div>
                    <img loading="lazy" decoding="async" width={140} height={36} src="https://wordpress-1034502-4663747.cloudwaysapps.com/wp-content/uploads/2024/12/New_Stars-1.png"  alt=""/>
                </div>
                <div>
                    <h1 className='text-[#ff7622] md:text-[20px] text-[15px]'>— BENEFITS OF BUSINESSES</h1>
                </div>
                <div>
                    <p className='md:text-[28px] text-[20px] text-[#464646] font-[500]'>Increase foot traffic, boost sales, and stay competitive with online retail giants. Beary Local puts the power back in your hands.</p>
                </div>
                <div className="flex gap-5">
                    <GlobalButton/>
                    <h1 className="text-[#7C7C7C] md:text-lg text-[14px] font-[sans-serif]">Explore your <br/>
                    neighbourhood offers!</h1>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SectionThree
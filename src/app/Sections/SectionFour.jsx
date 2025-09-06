import React from 'react'
import GlobalButton from '../MicroComponent/GlobalButton'
import Image from 'next/image'

const SectionFour = () => {
  return (
    <div className="text-gray-600 body-font">
        <div className="md:py-16 py-10 mx-auto flex flex-col">
            <div className=" mx-auto md:px-[80px] px-[20px]">
            <div className="flex flex-col-reverse md:flex-row items-center bg-[#ffecd4] rounded-3xl shadow-[0px_6px_7px_2px_rgba(166,166,166,0.97)]">
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t sm:mt-0 text-center md:text-left md:justify-start md:items-start justify-center items-center flex flex-col gap-5 md:pr-3 md:pl-0 pr-5 pl-5 md:pb-0 pb-10">
                <div>
                    <img loading="lazy" decoding="async" className='md:w-[140px] md:h-[36px]' src="https://wordpress-1034502-4663747.cloudwaysapps.com/wp-content/uploads/2024/12/New_Stars-1.png"  alt=""/>
                </div>
                <div>
                    <h1 className='text-[#ff7622] md:text-[20px] text-[14px]'>— BENEFITS OF CUSTOMERS</h1>
                </div>
                <div>
                    <p className='md:text-[28px] text-[20px] text-[#464646] font-[500]'>Access the best local offers, discover hidden gems in your neighborhood, and support the businesses that make your community unique.</p>
                </div>
                <div className="flex gap-5">
                    <GlobalButton/>
                    <h1 className="text-[#7C7C7C] md:text-lg text-[14px]">Explore your <br/>
                    neighbourhood offers!</h1>
                </div>
                </div>
                <div className="sm:w-1/3 text-center sm:pr-8">
                    <Image
                    src='/Benefits-for-Customers.png'
                    width={480}
                    height={500}
                    alt='image'
                    />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default SectionFour
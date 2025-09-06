import React from 'react'
import GlobalButton from '../MicroComponent/GlobalButton'
import GlobalCard from '../MicroComponent/GlobalCard'

const SectionTwo = () => {
  return (
    <div className='md:pt-[60px] pt-[50px] md:pb-[85px] pb-[50px] md:px-[80px] px-[20px] bg-[#333333] flex justify-center items-center flex-col gap-10'>
        <div className='flex gap-1 md:text-[36px] text-[25px]'>
            <span className='text-white font-[600]'>Features:</span>
            <h1 className='text-[#ff7622]'>Connect with Locals and Power Up Your Sales</h1>
        </div>
        <div className='flex md:flex-row flex-col md:gap-5 gap-10'>
            <GlobalCard
            src='/Easy-Product-Listings1.png'
            contentTitle="Easy Product Listings"
            contentPara1="Showcase near-expiry, special offers & wholesale products with just a few clicks."
            contentPara2="Our user-friendly interface makes managing promotions effortless."
            />
            <GlobalCard
            src='/Real-Time-Notifications1.png'
            contentTitle="Real-Time Notifications"
            contentPara1="Keep your community informed with instant notifications and updates on new offers,"
            contentPara2="ensuring your customers never miss out and keep coming back to your shop."
            />
            <GlobalCard
            src='/Customer-Engagement-Tools1.png'
            contentTitle="Customer Engagement Tools"
            contentPara1="Engage directly with your buyers through the app,"
            contentPara2="fostering a loyal customer base with lasting loyalty."
            />
        </div>
        <div>
            <GlobalButton/>
        </div>
    </div>
  )
}

export default SectionTwo

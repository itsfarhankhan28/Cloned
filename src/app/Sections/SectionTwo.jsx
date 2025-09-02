import React from 'react'
import GlobalButton from '../MicroComponent/GlobalButton'
import GlobalCard from '../MicroComponent/GlobalCard'

const SectionTwo = () => {
  return (
    <div className='pt-[60px] pb-[85px] px-[80px] bg-[#333333] flex justify-center items-center flex-col gap-10'>
        <div className='flex gap-1'>
            <span className='text-white font-[600] text-[36px]'>Features:</span>
            <h1 className='text-[36px] text-[#ff7622]'>Connect with Locals and Power Up Your Sales</h1>
        </div>
        <div className='flex gap-5'>
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
